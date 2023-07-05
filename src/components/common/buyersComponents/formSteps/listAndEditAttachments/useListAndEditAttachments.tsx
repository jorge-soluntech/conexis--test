import type { AxiosError } from 'axios';
import router from 'next/router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  clearDataStateBuyer,
  setDataBuyer,
  setExistingAttachments,
  setStepBuyer,
} from '@/application/buyersSlice/buyersSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useAttachments from '@/components/hooks/useAttachments/useAttachments';
import type { Attachment } from '@/consts/Attachments';
import { BuyerServices } from '@/infrastructure/services/BuyerServices';
import { UtilServices } from '@/infrastructure/services/utilsServices';

import useAddAttachment from '../addAttachment/UseAddAttachment';

const useListAndEditAttachments = () => {
  const dispatch = useAppDispatch();
  const { updateS3File } = useAttachments();
  const buyerServices = new BuyerServices(router);
  const { idEditBuyer, dataBuyer, existingAttachments } = useAppSelector(
    (state) => state.buyers
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isNewAttachment, setIsNewAttachment] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<
    Attachment.CreateUpdateAttachment[]
  >(dataBuyer.attachments);
  const [viewListAttachments, setViewListAttachments] = useState<boolean>(true);
  const [newAttachment, setNewAttachment] = useState<
    Attachment.AttachmentComponent[]
  >([]);

  const { handleData, validateAttachments } = useAddAttachment({
    setErrors,
    setShowError,
    attachments: newAttachment,
    setAttachments: setNewAttachment,
    setIsNewAttachment,
  });

  const downloadS3File = async (file: { name: string; id: string }) => {
    try {
      await UtilServices.downloadS3File(file, router);
    } catch (error) {
      setErrors({
        downloadFile: "There's been an error. Please try again later.",
      });
      setShowError(true);
    }
  };

  const editBuyer = async () => {
    setIsLoading(true);
    const dataToSend = await handleData();
    const uploadAtachmentsInParallel = attachments
      .filter((attachments) => attachments !== undefined)
      .map(async (attachment: any) => {
        await updateS3File({
          url: attachment.url,
          originFileObj: attachment.file.originFileObj,
          type: attachment.file.type,
        });
        return {
          name: attachment.name,
          file: attachment.path,
          type: attachment.type,
          original_name: attachment.file.name,
          expiry_date: attachment.expiryDate,
        };
      });
    const copiedAttachments = await Promise.all(uploadAtachmentsInParallel);
    const copyAttachments = copiedAttachments.filter(
      (attachment) => attachment
    );
    dataToSend.attachments = copyAttachments;
    buyerServices
      .editBuyer(idEditBuyer, dataToSend)
      .then(() => {
        dispatch(setStepBuyer(4));
        dispatch(clearDataStateBuyer());
      })
      .catch((err: AxiosError<any>) => {
        setIsLoading(false);
        if (err?.request?.status === 400) {
          setErrors({
            invalidFile: err.response?.data?.message,
          });
        }
      });
  };

  const onBack = () => {
    dispatch(setStepBuyer(2));
    dispatch(setDataBuyer({ ...dataBuyer, attachments }));
  };

  const validateNewAttachment = () => {
    const hasError = validateAttachments();
    if (hasError) {
      setShowError(true);
      setViewListAttachments(false);
    } else {
      setAttachments((prev) => [...(prev || []), newAttachment[0] as any]);

      const attachmentToAdd = newAttachment.map((attachment) => ({
        key: '',
        id: uuidv4(),
        file: uuidv4(),
        name: attachment.name,
        original_name: (attachment.file as any).name,
        type: attachment.type,
        expiry_date: (attachment as any).expiryDate,
      }));

      dispatch(
        setExistingAttachments(existingAttachments.concat(attachmentToAdd))
      );
      setViewListAttachments(true);
      setShowError(false);
      setNewAttachment([]);
    }
  };

  const handleContinue = () => {
    dispatch(setDataBuyer({ ...dataBuyer, attachments }));
    const hasError = validateAttachments();
    if (hasError) {
      setShowError(true);
      setViewListAttachments(false);
    } else {
      setShowError(false);
      editBuyer();
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
  };
};

export default useListAndEditAttachments;
