import { Typography } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import {
  readBusinessUnitsByBuyer,
  readCostCentersByBuyer,
  readCountries,
  readGlCodesByBuyer,
  readPossibleApprovers,
  readPossibleHiringManagers,
  readSuppliersByBuyer,
  readWorkShiftsByBuyer,
} from '@/application/postJobsSlice/postJobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { levels, postJobsUI, roles, urls } from '@/consts';
import locales from '@/locales/en/en.json';

import SuccessComponent from '../../successComponent/SuccessComponent';
import ContentFormPostJob from '../contentFormPostJob/ContentFormPostJob';
import styles from './postNewJobs.module.scss';

const { OPTIONS_SAVE_STATUS } = postJobsUI;

const {
  postNewJob: { formCreate, title },
} = locales;

const PostNewJobs = () => {
  const { currentUserRoleName, currentUserRole } = useAppSelector(
    (state) => state.dashboard
  );
  const { userLevel } = useAppSelector((state) => state.role);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { success } = router.query;

  useEffect(() => {
    dispatch(readPossibleApprovers({ router }));
    dispatch(readPossibleHiringManagers({ router }));
    dispatch(readWorkShiftsByBuyer({ router }));
    dispatch(readCountries({ router }));
    dispatch(readBusinessUnitsByBuyer({ router }));
    dispatch(readGlCodesByBuyer({ router }));
    dispatch(readCostCentersByBuyer({ router }));
    dispatch(readSuppliersByBuyer({ router }));
  }, [currentUserRoleName]);

  useEffect(() => {
    if (
      currentUserRole === roles.LOGGED_AS.supplier ||
      userLevel === levels.supplier
    ) {
      router.push(urls.URL_DASHBOARD);
    }
  }, [currentUserRole]);

  const titleSuccessMessage = useMemo(() => {
    if (success === OPTIONS_SAVE_STATUS.isSaveLater) {
      return formCreate.titleSuccessSaved;
    }
    if (success === OPTIONS_SAVE_STATUS.isSaveTemplate) {
      return formCreate.titleSuccessSavedAsTemplate;
    }
    return formCreate.titleSuccessSent;
  }, [success]);

  return (
    <div className={styles.post_job}>
      <Typography.Title className={styles.post_job__buyer}>
        {currentUserRoleName}
      </Typography.Title>
      <Typography.Title className={styles.post_job__title}>
        {title}
      </Typography.Title>
      <div className={styles.form_container}>
        {!success ? (
          <ContentFormPostJob />
        ) : (
          <SuccessComponent
            title={titleSuccessMessage}
            textButton={formCreate.titleButtonGoJobs}
            route={urls.URL_MY_JOBS}
          />
        )}
      </div>
    </div>
  );
};

export default PostNewJobs;
