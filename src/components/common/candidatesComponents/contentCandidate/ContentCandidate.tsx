import { useRouter } from 'next/router';
import React from 'react';

import { urls, workers } from '@/consts';
import locales from '@/locales/en/en.json';

import SuccessComponent from '../../successComponent/SuccessComponent';
import SupportComponent from '../../supportComponent/SupportComponent';
import FormCandidatesCreate from '../formCandidatesCreate/FormCandidatesCreate';
import styles from './contentCandidate.module.scss';

const ContentCandidate = () => {
  const { candidates, formsCommon } = locales;

  const router = useRouter();
  const { success, isTalent } = router.query;

  return (
    <>
      {success === workers.ROUTES_SUCCESS.emailNotSent && (
        <SupportComponent
          title={candidates.create.titleSuccessSupport}
          paragraph={
            <>
              {candidates.create.textContactSupport}
              <span className={styles.email_support}>
                {formsCommon.emailSupport}
              </span>
            </>
          }
        />
      )}
      {success === workers.ROUTES_SUCCESS.emailSent && (
        <SuccessComponent
          title={
            !isTalent
              ? candidates.create.titleSuccess
              : candidates.create.titleSuccessAddedTalentPool
          }
          subtitle={!isTalent && candidates.create.subtitleSuccess}
          textButton={candidates.create.textButtonSuccess}
          route={urls.URL_BACK_CREATE_CANDIDATE}
        />
      )}

      {!success && <FormCandidatesCreate />}
    </>
  );
};

export default ContentCandidate;
