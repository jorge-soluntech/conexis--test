import router from 'next/router';
import { useState } from 'react';

import {
  createCandidate,
  resetValuesFormCandidates,
  setModalWarningEmail,
  setPage,
} from '@/application/candidatesSlice/candidatesSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { urls, workers } from '@/consts';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';
import styles from './modalWarningEmail.module.scss';

const {
  candidates: { create },
} = locales;

const ModalWarningEmail = () => {
  const dispatch = useAppDispatch();

  const { isModalWarningEmail, valuesFormCreate } = useAppSelector(
    (state) => state.candidates
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const closeModal = () => dispatch(setModalWarningEmail(false));

  const submitCreateCandidate = async () => {
    setIsLoading(true);
    const response = await dispatch(
      createCandidate({
        router,
        body: valuesFormCreate,
      })
    );

    if (response.payload.statusCode !== 201) return;

    setIsLoading(false);
    closeModal();
    dispatch(setPage(1));
    dispatch(resetValuesFormCandidates());
    router.push({
      pathname: urls.URL_CREATE_CANDIDATE,
      query: { success: workers.ROUTES_SUCCESS.emailSent },
    });
  };

  return (
    <FormSuccessModal
      isModal={isModalWarningEmail}
      title={create.titleModalWarning}
      isLoading={isLoading}
      handleSave={submitCreateCandidate}
      handleCancel={closeModal}
      showSuccess={false}
      titleSave={create.titleYesButton}
      titleCancel={create.titleNoButton}
    >
      <h5 className={styles.text_warning}>{create.textModalWarning}</h5>
      <h5 className={styles.text_warning}>{create.textModalConfirm}</h5>
    </FormSuccessModal>
  );
};

export default ModalWarningEmail;
