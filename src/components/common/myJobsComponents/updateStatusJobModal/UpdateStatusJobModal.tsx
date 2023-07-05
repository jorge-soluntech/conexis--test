import React from 'react';

import {
  setModalOnHoldJob,
  setModalOpenJob,
} from '@/application/jobsSlice/jobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';

const {
  myJobs: { OnHoldModalMessage, RepostModalMessage },
} = locales;

type ModalTemplateArgs = {
  isModalOpenJob: boolean;
  isModalOnHoldJob: boolean;
};
const getModalTemplate = ({
  isModalOnHoldJob,
  isModalOpenJob,
}: ModalTemplateArgs) => {
  switch (true) {
    case isModalOnHoldJob:
      return OnHoldModalMessage;
    case isModalOpenJob:
      return RepostModalMessage;
    default:
      return '';
  }
};

export const UpdateStatusJobModal = () => {
  const dispatch = useAppDispatch();
  const { isModalOnHoldJob, isModalOpenJob } = useAppSelector(
    (state) => state.jobs
  );

  const handleOkSuccess = () => {
    dispatch(setModalOpenJob(false));
    dispatch(setModalOnHoldJob(false));
  };

  const isModal = isModalOnHoldJob || isModalOpenJob;

  const modalTemplate = getModalTemplate({ isModalOnHoldJob, isModalOpenJob });

  return (
    <FormSuccessModal
      isModal={isModal}
      titleSuccess={modalTemplate}
      showSuccess={true}
      handleOkSuccess={handleOkSuccess}
    />
  );
};
