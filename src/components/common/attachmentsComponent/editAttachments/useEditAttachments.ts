import type { AxiosError } from 'axios';
import router from 'next/router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '@/components/hooks/storeHooks';
import useAttachments from '@/components/hooks/useAttachments/useAttachments';
import type { Attachment } from '@/consts/Attachments';
import { DASHBOARDTYPES } from '@/consts/permissions';
import { DASHBOARD_STEPS } from '@/consts/suppliers';
import { UtilServices } from '@/infrastructure/services/utilsServices';

import { useFormAddAttachments } from '../formAddAttachment/UseFormAddAttachment';
import type { IFormAttachment } from '../IFormAttachment';
import { useEdit } from '../useEdit';

/** Hook used in the suppliers and buyers dashboard to handle the logic of the fourth step */

const useEditAttachments = ({ dashboard }: IFormAttachment.IDashboards) => {
  const dispatch = useAppDispatch();
  const {
    editRecord,
    setDashboardStep,
    clearDashboardData,
    setDataDashboard,
    buyerOptions,
    dataAttachments,
    existingAttachments,
    setListAttachments,
    dashboardData,
    isLoading,
    setIsLoading,
  } = useEdit({ dashboard });

  const [showError, setShowError] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isNewAttachment, setIsNewAttachment] = useState<boolean>(false);
  const [viewListAttachments, setViewListAttachments] = useState<boolean>(true);
  const [attachments, setAttachments] =
    useState<Attachment.AttachmentComponent[]>(dataAttachments);
  const [newAttachment, setNewAttachment] = useState<
    Attachment.AttachmentComponent[]
  >([]);

  const { validateAttachments } = useFormAddAttachments({
    setErrors,
    setShowError,
    attachments: newAttachment,
    setAttachments: setNewAttachment,
    setIsNewAttachment,
    dashboard,
  });

  const downloadS3File = async (file: Attachment.ListAttachments) => {
    try {
      await UtilServices.downloadS3File(
        { id: file.file, name: file.name },
        router
      );
    } catch (error) {
      setErrors({
        downloadFile: "There's been an error. Please try again later.",
      });
      setShowError(true);
    }
  };

  const onBack = () => {
    dispatch(setDashboardStep(DASHBOARD_STEPS.stepThree));
    dispatch(setDataDashboard({ ...dashboardData, attachments } as any));
  };
  const { updateS3File } = useAttachments();

  const uploadAttachment = () => {
    setIsLoading(true);
    const uploadAtachmentsInParallel = newAttachment
      .filter((attachments: any) => attachments !== undefined)
      .map(async (attachment: any) => {
        await updateS3File({
          url: attachment.url,
          originFileObj: attachment.file.originFileObj,
          type: attachment.file.type,
        });
        const uploadedAttachment: Attachment.IuploadedAttachment = {
          name: attachment.name,
          file: attachment.path,
          type: attachment.type,
          original_name: attachment.file.name,
          expiry_date: attachment.expiryDate,
        };
        if (dashboard === DASHBOARDTYPES.supplier) {
          uploadedAttachment.buyer_id = attachment.buyer;
        }
        return uploadedAttachment;
      });
    return Promise.all(uploadAtachmentsInParallel);
  };

  const validateNewAttachment = async () => {
    const hasError = validateAttachments();
    if (hasError) {
      setShowError(true);
      setViewListAttachments(false);
    } else {
      setAttachments((prev) => [
        ...(prev || []),
        newAttachment[0] as Attachment.AttachmentComponent,
      ]);

      const attachmentToAdd = newAttachment.map((attachment) => ({
        key: uuidv4(),
        id: attachment.id,
        file: attachment.path,
        name: attachment.name,
        original_name: attachment.file.name,
        type: attachment.type,
        expiry_date: attachment.expiryDate,
        buyer_id: '',
      }));

      await uploadAttachment();
      setIsLoading(false);
      dispatch(setListAttachments(existingAttachments.concat(attachmentToAdd)));
      setViewListAttachments(true);
      setShowError(false);
      setNewAttachment([]);
    }
  };

  const handleContinue = () => {
    dispatch(setDataDashboard({ ...dashboardData, attachments } as any));
    const hasError = validateAttachments();
    if (hasError) {
      setShowError(true);
      setViewListAttachments(false);
    } else {
      setShowError(false);
      editRecord({ attachments })
        .then(() => {
          dispatch(setDashboardStep(DASHBOARD_STEPS.success));
          dispatch(clearDashboardData());
        })
        .catch((err: AxiosError<any>) => {
          setIsLoading(false);
          if (err?.request?.status === 400) {
            setErrors({
              invalidFile: err.response?.data?.message,
            });
          }
        });
    }
  };

  return {
    onBack,
    errors,
    isLoading,
    setErrors,
    showError,
    setShowError,
    setAttachments,
    isNewAttachment,
    setIsNewAttachment,
    existingAttachments,
    downloadS3File,
    handleContinue,
    viewListAttachments,
    setViewListAttachments,
    newAttachment,
    setNewAttachment,
    validateNewAttachment,
    buyerOptions,
  };
};

export default useEditAttachments;
