import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  clearDataStateSupplier,
  setDataSupplier,
  setIdSupplier,
  setListAttachments,
  setStepSupplier,
} from '@/application/supplierSlice/supplierSlice';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import type { ISupplier } from '@/consts/ISupplierState';
import { SupplierServices } from '@/infrastructure/services/SupplierServices';
/**
 * This hook is used to get, format and shape the data, then dispatch to redux.
 * It also returns an isLoading boolean while it is getting & formatting the data.
 * @returns {boolean} isLoading
 */
export const useSupplierForm = (): { isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);

    dispatch(setStepSupplier(0));
    const getSupplier = async () => {
      const { supplierId } = router.query;
      if (!supplierId) return;
      const supplierServices = new SupplierServices(router);
      await supplierServices
        .getSuppliersById(supplierId as string)
        .then((response: any) => {
          const data = response.data as ISupplier.GetSupplierByID;
          dispatch(
            setDataSupplier({
              ...data,
              associated_buyers: data.associated_buyers.map(
                (buyer) => buyer.id
              ),
              agreement_expiry_date: data.agreement_expiry_date
                ? (dayjs(data.agreement_expiry_date) as unknown as string)
                : null,
              attachments: [],
            })
          );
          dispatch(
            setListAttachments(
              data.attachments.map((attachment) => ({
                id: attachment.id,
                key: attachment.id,
                file: attachment.file,
                name: attachment.name,
                original_name: attachment.original_name,
                type: attachment.type,
                expiry_date: attachment.expiry_date
                  ? dayjs(attachment.expiry_date).format('DD MMM YYYY')
                  : '',
              }))
            )
          );
          dispatch(setIdSupplier(data.id));
          setIsLoading(false);
        });
    };
    getSupplier();

    return () => {
      dispatch(clearDataStateSupplier());
    };
  }, [dispatch, router]);

  return { isLoading };
};
