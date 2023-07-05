/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import type { AxiosError } from 'axios';
import { useState } from 'react';

import { useAppDispatch } from '@/components/hooks/storeHooks';
import type { Attachment } from '@/consts/Attachments';
import type { Dashboards } from '@/consts/permissions';

import { useFormAddAttachments } from './formAddAttachment/UseFormAddAttachment';
import { useCreate } from './useCreate';

type ICreateAttachments = {
  dashboard: Dashboards;
};
const useCreateAttachments = ({ dashboard }: ICreateAttachments) => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isNewAttachment, setIsNewAttachment] = useState<boolean>(true);
  const [attachments, setAttachments] = useState<
    Attachment.AttachmentComponent[]
  >([]);

  const { validateAttachments } = useFormAddAttachments({
    setErrors,
    setShowError,
    attachments,
    setAttachments,
    setIsNewAttachment,
    dashboard,
  });

  const {
    createRecord,
    dataDashboard,
    setDataDashboard,
    setDashboardStep,
    clearDashboardData,
    buyerOptions,
  } = useCreate({
    dashboard,
    attachments,
    setAttachments,
    setIsLoading,
    setIsNewAttachment,
  });

  const onBack = () => {
    dispatch(setDashboardStep(2));
    dispatch(
      setDataDashboard({
        ...dataDashboard,
        attachments,
      } as any)
    );
  };

  const handleContinue = () => {
    dispatch(setDataDashboard({ ...(dataDashboard as any), attachments }));
    const hasErrors = validateAttachments();
    if (hasErrors) {
      setShowError(true);
    } else {
      setShowError(false);
      createRecord()
        .then(() => {
          dispatch(setDashboardStep(4));
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
    setErrors,
    isLoading,
    showError,
    setShowError,
    attachments,
    setAttachments,
    isNewAttachment,
    setIsNewAttachment,
    handleContinue,
    buyerOptions,
  };
};

export default useCreateAttachments;
