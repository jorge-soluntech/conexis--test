import type { Dispatch, FC, SetStateAction } from 'react';

import { setCloseModals } from '@/application/jobsSlice/jobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';

const {
  myJobs: { DeleteTemplatesModal, DeleteJob },
} = locales;
type TTemplateJobsModal = {
  setTemplateJobs: Dispatch<SetStateAction<string[]>>;
};
export const TemplateJobsModal: FC<TTemplateJobsModal> = ({
  setTemplateJobs,
}) => {
  const dispatch = useAppDispatch();
  const { isIndividual, isModalDelete } = useAppSelector((state) => state.jobs);

  const handleOkSuccess = () => {
    dispatch(setCloseModals());
    setTemplateJobs([]);
  };

  return (
    <FormSuccessModal
      isModal={isModalDelete}
      titleSuccess={isIndividual ? DeleteJob : DeleteTemplatesModal}
      showSuccess={true}
      handleOkSuccess={handleOkSuccess}
    />
  );
};
