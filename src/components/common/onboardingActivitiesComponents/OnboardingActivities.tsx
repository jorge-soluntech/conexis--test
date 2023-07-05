import { Layout, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { AuthContext } from '@/application/authContext';
import { urls } from '@/consts';
import locales from '@/locales/en/en.json';
import { str } from '@/utils';

import SuccessComponent from '../successComponent/SuccessComponent';
import FormOnboardingActivities from './formOnboardingActivities/FormOnboardingActivities';
import styles from './onboardingActivities.module.scss';

const { Title } = Typography;
const { Content } = Layout;

const OnboardingActivities = () => {
  const { dataUser = { logged_buyer_client_company_name: '' } } =
    useContext(AuthContext);

  const router = useRouter();
  const { success } = router.query;

  const nameCompany = str.capitalizeString(
    dataUser!.logged_buyer_client_company_name
  );

  const { onboardingActivities } = locales;

  return (
    <div className={styles.oActivities}>
      <Title level={4} className={styles.oActivities__buyer}>
        {nameCompany}
      </Title>
      <Title level={3} className={styles.oActivities__title}>
        {onboardingActivities.titleForm}
      </Title>
      <p>{onboardingActivities.descriptionForm}</p>
      <Content>
        <div className={styles.form_container}>
          {success ? (
            <SuccessComponent
              title={onboardingActivities.titleSuccess}
              textButton={onboardingActivities.textButtonSuccess}
              route={urls.URL_BACK_FORM_ONBOARDING}
            />
          ) : (
            <FormOnboardingActivities />
          )}
        </div>
      </Content>
    </div>
  );
};

export default OnboardingActivities;
