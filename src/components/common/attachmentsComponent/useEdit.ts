import router from 'next/router';
import { useContext, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  setDataBuyer,
  setExistingAttachments,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import {
  clearDataStateSupplier,
  setDataSupplier,
  setListAttachments,
  setStepSupplier,
} from '@/application/supplierSlice/supplierSlice';
import { useAppSelector } from '@/components/hooks/storeHooks';
import { DASHBOARDTYPES } from '@/consts/permissions';
import { BuyerServices } from '@/infrastructure/services/BuyerServices';
import { SupplierServices } from '@/infrastructure/services/SupplierServices';

import type { ICardTop } from '../homeComponents/cardTop/ICardTop';
import type { IFormAttachment } from './IFormAttachment';
import { parseDashboardData } from './parseDashboardData';

/** This hook handle the logic to Edit buyers or suppliers and returns
 * @returns a object with the required actions depending the given dashboard
 */
export const useEdit = ({ dashboard }: IFormAttachment.IDashboards) => {
  const supplierServices = new SupplierServices(router);
  const buyerServices = new BuyerServices(router);
  const { idTenant, dataUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { supplierId, dataSupplier, listAttachments } = useAppSelector(
    (state) => state.suppliers
  );
  const { idEditBuyer, dataBuyer, existingAttachments } = useAppSelector(
    (state) => state.buyers
  );

  const dashboardData =
    dashboard === DASHBOARDTYPES.supplier ? dataSupplier : dataBuyer;

  /** This function call the service to edit a supplier or a buyer */
  const editRecord = async ({ attachments }: any) => {
    setIsLoading(true);

    const dataToSend = await parseDashboardData({
      dashboard,
      dashboardData,
      idTenant,
      attachments,
    });
    if (dashboard === DASHBOARDTYPES.supplier) {
      return supplierServices.editSupplier(supplierId, dataToSend);
    }

    return buyerServices.editBuyer(idEditBuyer, dataToSend);
  };
  /**
   * The buyers options depending the previus selection in the buyers information step.
   */
  const buyerOptions: ICardTop.IList[] = dataUser.permissioned_buyers
    .filter(({ buyer }: { buyer: string }) => {
      return dataSupplier.associated_buyers?.includes(buyer) ?? [];
    })
    .map((data: any) => ({
      value: data.buyer,
      label: data.buyerName,
    }));

  return {
    editRecord,
    isLoading,
    setIsLoading,
    setDashboardStep:
      dashboard === DASHBOARDTYPES.supplier ? setStepSupplier : setStepBuyer,
    clearDashboardData: clearDataStateSupplier,
    setDataDashboard:
      dashboard === DASHBOARDTYPES.supplier ? setDataSupplier : setDataBuyer,
    dataAttachments:
      dashboard === DASHBOARDTYPES.supplier
        ? dataSupplier.attachments
        : dataBuyer.attachments,
    existingAttachments:
      dashboard === DASHBOARDTYPES.supplier
        ? listAttachments
        : existingAttachments,
    buyerOptions: dashboard === DASHBOARDTYPES.supplier ? buyerOptions : [],
    setListAttachments:
      dashboard === DASHBOARDTYPES.supplier
        ? setListAttachments
        : setExistingAttachments,
    dashboardData,
  };
};
