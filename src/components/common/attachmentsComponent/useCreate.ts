import router from 'next/router';
import type { Dispatch, SetStateAction } from 'react';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  clearDataStateBuyer,
  setDataBuyer,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import {
  clearDataStateSupplier,
  setDataSupplier,
  setStepSupplier,
} from '@/application/supplierSlice/supplierSlice';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useAttachments from '@/components/hooks/useAttachments/useAttachments';
import type { Attachment } from '@/consts/Attachments';
import type { IBuyers } from '@/consts/IBuyers';
import type { Dashboards } from '@/consts/permissions';
import { DASHBOARDTYPES } from '@/consts/permissions';
import { BuyerServices } from '@/infrastructure/services/BuyerServices';
import { SupplierServices } from '@/infrastructure/services/SupplierServices';
import phoneFormatter from '@/utils/phoneFormatter';

import type { ICardTop } from '../homeComponents/cardTop/ICardTop';

type ICreateAttachments = {
  dashboard: Dashboards;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  attachments: Attachment.AttachmentComponent[];
  setAttachments: Dispatch<SetStateAction<Attachment.AttachmentComponent[]>>;
  setIsNewAttachment: Dispatch<SetStateAction<boolean>>;
};

export const useCreate = ({
  dashboard,
  attachments,
  setIsNewAttachment,
  setAttachments,
  setIsLoading,
}: ICreateAttachments) => {
  // const [form] = Form.useForm();
  const { updateS3File } = useAttachments();
  const { idTenant, dataUser } = useContext(AuthContext);
  const { dataBuyer } = useAppSelector((state) => state.buyers);
  const { dataSupplier } = useAppSelector((state) => state.suppliers);
  const buyerServices = new BuyerServices(router);
  const supplierService = new SupplierServices(router);
  useEffect(() => {
    if (dataBuyer?.attachments?.length > 0) {
      setIsNewAttachment(false);
      setAttachments(
        dataBuyer.attachments as unknown as Attachment.AttachmentComponent[]
      );
    }
  }, [dataBuyer?.attachments, setAttachments, setIsNewAttachment]);

  // useEffect(() => {
  //   form.setFieldsValue(dataSupplier);
  // }, [dataSupplier, form]);

  useEffect(() => {
    if (dataSupplier?.attachments?.length > 0) {
      setIsNewAttachment(false);
      setAttachments(dataSupplier.attachments);
    }
  }, [dataSupplier?.attachments, setAttachments, setIsNewAttachment]);

  const handleCopyAttachments = async () => {
    const uploadAtachmentsInParallel = attachments.map(
      async (attachment: any) => {
        await updateS3File({
          url: attachment.url,
          originFileObj: attachment.file.originFileObj,
          type: attachment.file.type,
        });
        const attachmentObj: Attachment.IAttachmentObj = {
          name: attachment.name,
          file: attachment.path,
          type: attachment.type,
          original_name: attachment.file.name,
          expiry_date: attachment.expiryDate,
        };
        if (dashboard === DASHBOARDTYPES.supplier) {
          attachmentObj.buyer_id = dataUser.logged_buyer;
        }
        return attachmentObj;
      }
    );
    const copiedAttachments = await Promise.all(uploadAtachmentsInParallel);
    return copiedAttachments.filter((attachment) => attachment);
  };
  /**
   *
   * @returns The object to send to the backend to  create buyer
   */
  const handleData = async () => {
    const dataToSend: any = {};
    Object.keys(dataBuyer).forEach((key) => {
      const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      dataToSend[snakeCaseKey] = dataBuyer[key as keyof IBuyers.IDataBuyer];
    });

    dataToSend.id_tenant = idTenant;
    dataToSend.primary_contact_email =
      dataBuyer.primaryContactEmail === ''
        ? null
        : dataBuyer.primaryContactEmail;

    dataToSend.accounts_payable_contact_email =
      dataBuyer.accountsPayableContactEmail === ''
        ? null
        : dataBuyer.accountsPayableContactEmail;
    /** the value of the bypassJobApproval and bypassSubmissionApproval fields are reversed in the database.
     * This means that if the answer to this field is "no", the database must store a True and vice versa. */
    dataToSend.bypass_job_approval = !dataBuyer.bypassJobApproval;
    dataToSend.bypass_submission_approval = !dataBuyer.bypassSubmissionApproval;
    dataToSend.contract_approver_id = dataBuyer.contractApproverId?.value;
    const copyAttachments = await handleCopyAttachments();
    dataToSend.attachments = copyAttachments;
    dataToSend.is_self_served = dataBuyer.isSelfServed ?? false;
    return dataToSend;
  };

  const createBuyer = async () => {
    setIsLoading(true);
    const dataToSend = await handleData();
    return buyerServices.createBuyer(dataToSend);
  };

  const createSupplier = async () => {
    setIsLoading(true);
    const copyAttachments = await handleCopyAttachments();
    return supplierService.createSupplier({
      ...dataSupplier,
      id_tenant: idTenant,
      primary_contact_email:
        dataSupplier.primary_contact_email === ''
          ? null
          : dataSupplier.primary_contact_email,
      attachments: copyAttachments,
      secondary_contact_email:
        dataSupplier.secondary_contact_email === ''
          ? null
          : dataSupplier.secondary_contact_email,
      tertiary_contact_email:
        dataSupplier.tertiary_contact_email === ''
          ? null
          : dataSupplier.tertiary_contact_email,
      accounts_receivable_contact_email:
        dataSupplier.accounts_receivable_contact_email === ''
          ? null
          : dataSupplier.accounts_receivable_contact_email,
      primary_contact_phone: phoneFormatter(dataSupplier.primary_contact_phone),
      geographic_coverage: [dataSupplier.geographic_coverage].flat(),
      diversity_certifications: [dataSupplier.diversity_certifications].flat(),
    });
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
    createRecord:
      dashboard === DASHBOARDTYPES.supplier ? createSupplier : createBuyer,
    dataDashboard:
      dashboard === DASHBOARDTYPES.supplier ? dataSupplier : dataBuyer,
    setDataDashboard:
      dashboard === DASHBOARDTYPES.supplier ? setDataSupplier : setDataBuyer,
    setDashboardStep:
      dashboard === DASHBOARDTYPES.supplier ? setStepSupplier : setStepBuyer,
    clearDashboardData:
      dashboard === DASHBOARDTYPES.supplier
        ? clearDataStateSupplier
        : clearDataStateBuyer,
    dataUser,
    buyerOptions: dashboard === DASHBOARDTYPES.supplier ? buyerOptions : [],
  };
};
