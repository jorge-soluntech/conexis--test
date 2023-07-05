import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  clearDataStateBuyer,
  setDataBuyer,
  setExistingAttachments,
  setIdEditBuyer,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import type { IBuyers } from '@/consts/IBuyers';
import { BuyerServices } from '@/infrastructure/services/BuyerServices';
import convertKeysToCamelCase from '@/utils/convertKeysToCamelCase';

/**
 * This hook is used to get, format and shape the data, then dispatch to redux.
 * It also returns an isLoading boolean while it is getting & formatting the data.
 * @returns {boolean} isLoading
 */
export const useBuyerForm = (): { isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(setStepBuyer(0));
    const getBuyer = async () => {
      const { buyerId } = router.query;
      if (!buyerId) return;
      const buyerServices = new BuyerServices(router);
      await buyerServices.getBuyerById(buyerId as string).then((response) => {
        const { data } = response;
        const dataParsed = convertKeysToCamelCase(data);
        dataParsed.contractExpiryDate = dayjs(data.contract_expiry_date);
        dataParsed.contractApproverId = data.contract_approver
          ? {
              label: data.contract_approver?.full_name,
              value: data.contract_approver?.id,
            }
          : null;
        // the values arrive at the endpoint as a string but the type of data to be sent is a number
        dataParsed.vatAmount = parseInt(data.vat_amount, 10);
        dataParsed.salesTaxAmount = parseInt(data.sales_tax_amount, 10);
        dataParsed.otherTaxAmount = parseInt(data.other_tax_amount, 10);
        /** the value of the bypassJobApproval and bypassSubmissionApproval fields are reversed in the database.
         * This means that if the answer to this field is "no", the database must store a True and vice versa. */
        dataParsed.bypassJobApproval = !data.bypass_job_approval;
        dataParsed.bypassSubmissionApproval = !data.bypass_submission_approval;
        dataParsed.attachments = [];
        dispatch(setDataBuyer(dataParsed as IBuyers.IDataBuyer));
        dispatch(
          setExistingAttachments(
            data.attachments.map((attachment: any) => ({
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
        dispatch(setIdEditBuyer(data.id));
        setIsLoading(false);
      });
    };
    getBuyer();

    return () => {
      dispatch(clearDataStateBuyer());
    };
  }, [dispatch, router]);

  return { isLoading };
};
