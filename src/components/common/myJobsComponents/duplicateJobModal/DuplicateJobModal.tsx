/* eslint-disable react/no-children-prop */
import router from 'next/router';
import { useState } from 'react';

import {
  getAllJobs,
  setModalDuplicateJob,
} from '@/application/jobsSlice/jobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { JobsServices } from '@/infrastructure/services/JobsServices';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';

const {
  myJobs: { duplicatelJob },
} = locales;

const DuplicateJobModal = () => {
  const dispatch = useAppDispatch();
  const jobsServices = new JobsServices(router);
  const { currentUserRole } = useAppSelector((state) => state.dashboard);
  const { isModalDuplicateJob, selectedJobId } = useAppSelector(
    (state) => state.jobs
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const reloadData = async () => {
    await dispatch(
      getAllJobs({
        router,
        currentUserRole: currentUserRole as string,
      })
    );
  };

  const duplicateJobAsTemplate = () => {
    setIsLoading(true);
    jobsServices.duplicateAsTemplate(selectedJobId).then(() => {
      setIsLoading(false);
      dispatch(setModalDuplicateJob(false));
      reloadData();
    });
  };

  return (
    <FormSuccessModal
      isModal={isModalDuplicateJob}
      isLoading={isLoading}
      handleOkSuccess={duplicateJobAsTemplate}
      showSuccess={true}
      titleSuccess={duplicatelJob.titleSuccess}
    />
  );
};

export default DuplicateJobModal;
