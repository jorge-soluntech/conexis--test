/* eslint-disable react/no-children-prop */
import router from 'next/router';
import { useState } from 'react';

import {
  getAllJobs,
  setModalCancelJob,
} from '@/application/jobsSlice/jobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { JobsServices } from '@/infrastructure/services/JobsServices';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';
import useFormCancelJob from './useFormCancelJob/useFormCancelJob';

const {
  myJobs: { cancelJob },
} = locales;

const CancelJobModal = () => {
  const dispatch = useAppDispatch();
  const jobsServices = new JobsServices(router);
  const { currentUserRole } = useAppSelector((state) => state.dashboard);
  const { isModalCancelJob, selectedJobId } = useAppSelector(
    (state) => state.jobs
  );

  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reasonCancelation, setReasonCancelation] = useState<string>('');

  const { formCancelJob } = useFormCancelJob({
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

  const markAsCanceled = () => {
    setIsLoading(true);
    const dataToSend = {
      note_for_declined_submissions: reasonCancelation,
    };
    jobsServices.markAsCanceled(dataToSend, selectedJobId).then(() => {
      setIsLoading(false);
      reloadData();
      setSuccess(true);
    });
  };

  const closeModal = () => {
    dispatch(setModalCancelJob(false));
    setSuccess(false);
    setReasonCancelation('');
  };

  const onSave = () => {
    markAsCanceled();
  };

  return (
    <FormSuccessModal
      isModal={isModalCancelJob}
      isLoading={isLoading}
      title={cancelJob.title}
      handleSave={onSave}
      handleCancel={closeModal}
      handleOkSuccess={closeModal}
      showSuccess={success}
      titleSuccess={cancelJob.titleSuccess}
      children={formCancelJob}
    />
  );
};

export default CancelJobModal;
