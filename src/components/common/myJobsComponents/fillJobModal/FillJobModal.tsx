/* eslint-disable react/no-children-prop */
import router from 'next/router';
import { useState } from 'react';

import { getAllJobs, setModalFillJob } from '@/application/jobsSlice/jobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { JobsServices } from '@/infrastructure/services/JobsServices';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';
import useFormFillJobModal from './useFormFillJob/useFormFillJob';

const {
  myJobs: { fillJob },
} = locales;

const FillJobModal = () => {
  const dispatch = useAppDispatch();
  const jobsServices = new JobsServices(router);
  const { currentUserRole } = useAppSelector((state) => state.dashboard);
  const { isModalFillJob, selectedJobId } = useAppSelector(
    (state) => state.jobs
  );

  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reasonCancelation, setReasonCancelation] = useState<string>('');
  const [rejectFailedSubmissions, setRejectFailedSubmissions] =
    useState<boolean>(false);

  const { formFillJob } = useFormFillJobModal({
    rejectFailedSubmissions,
    setRejectFailedSubmissions,
    reasonCancelation,
    setReasonCancelation,
  });

  const reloadData = async () => {
    await dispatch(
      getAllJobs({
        router,
        currentUserRole: currentUserRole as string,
      })
    );
  };

  const markAsFilled = () => {
    setIsLoading(true);
    const dataToSend = {
      reject_unsuccessful_submissions: rejectFailedSubmissions,
      note_for_declined_submissions: reasonCancelation,
    };
    jobsServices.markAsFilled(dataToSend, selectedJobId).then(() => {
      setIsLoading(false);
      reloadData();
      setSuccess(true);
    });
  };

  const closeModal = () => {
    dispatch(setModalFillJob(false));
    setRejectFailedSubmissions(false);
    setSuccess(false);
    setReasonCancelation('');
  };

  const onSave = () => {
    markAsFilled();
  };

  return (
    <FormSuccessModal
      isModal={isModalFillJob}
      isLoading={isLoading}
      title={fillJob.title}
      handleSave={onSave}
      handleCancel={closeModal}
      handleOkSuccess={closeModal}
      showSuccess={success}
      titleSuccess={fillJob.titleSuccess}
      children={formFillJob}
    />
  );
};

export default FillJobModal;
