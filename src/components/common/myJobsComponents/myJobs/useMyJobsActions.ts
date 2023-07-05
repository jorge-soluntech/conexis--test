import router from 'next/router';
import { useState } from 'react';

import {
  getAllJobs,
  setModalCancelJob,
  setModalDelete,
  setModalDuplicateJob,
  setModalFillJob,
  setModalOnHoldJob,
  setModalOpenJob,
} from '@/application/jobsSlice/jobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { ACTIONS } from '@/consts/myJobs';
import { JobsServices } from '@/infrastructure/services/JobsServices';

/** Hook that contains the logic to delete the jobs and
 * reload the data of the table every time an action is taken */
export const useMyJobsActions = () => {
  const dispatch = useAppDispatch();

  const jobsServices = new JobsServices(router);
  const { currentUserRole } = useAppSelector((state) => state.dashboard);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleDropdownVisibleChange = (visible: boolean): void => {
    setDropdownVisible(visible);
  };

  const reloadData = () =>
    dispatch(
      getAllJobs({
        router,
        currentUserRole: currentUserRole as string,
      })
    );

  /** This function is called when the user clicks on the button to delete on template or multiple templates
   * @param jobIDs - An array of strings to delete jobs (one or multiple)
   * @param isIndividual - a boolean that tells me if the function was called by the row action or the checkbox action
   *  */
  const deleteTemplateJobs = async (
    jobIDs: string[],
    isIndividual?: boolean
  ) => {
    setLoadingDelete(true);
    jobsServices.deleteJobs(jobIDs).then(() => {
      dispatch(setModalDelete({ isIndividual, isModalOpened: true }));
      reloadData();
      setLoadingDelete(false);
    });
  };

  const repostOnHoldJobs = async (jobID: string) => {
    jobsServices.updateStatus(jobID).then(() => {
      dispatch(setModalOpenJob(true));
      reloadData();
    });
  };

  const handleUpdateJobStatusOnHold = async (jobID: string) => {
    jobsServices.updateStatus(jobID).then(() => {
      dispatch(setModalOnHoldJob(true));
      reloadData();
    });
  };

  const handleModalDispatch = (key: string, jobId: string) => {
    handleDropdownVisibleChange(false);
    if (key === ACTIONS.setToFilled) {
      dispatch(setModalFillJob(true));
    }
    if (key === ACTIONS.cancel) {
      dispatch(setModalCancelJob(true));
    }
    if (key === ACTIONS.duplicateAsTemplate) {
      dispatch(setModalDuplicateJob(true));
    }
    if (key === ACTIONS.delete) {
      deleteTemplateJobs([jobId], true);
    }
    if (key === ACTIONS.repost) {
      repostOnHoldJobs(jobId);
    }
    if (key === ACTIONS.putOnHold) {
      handleUpdateJobStatusOnHold(jobId);
    }
  };

  return {
    reloadData,
    deleteTemplateJobs,
    loadingDelete,
    repostOnHoldJobs,
    handleUpdateJobStatusOnHold,
    // The next three items are currently used with Dots.tsx component
    dropdownVisible,
    handleModalDispatch,
    handleDropdownVisibleChange,
  };
};
