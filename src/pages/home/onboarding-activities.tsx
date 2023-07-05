import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';

const OnboardingActivities = dynamic(
  () =>
    import(
      '@/components/common/onboardingActivitiesComponents/OnboardingActivities'
    ),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * OnboardingActivities page
 *
 * @returns The OnboardingActivities page
 */

const OnboardingActivitiesPage: NextPage = () => {
  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <OnboardingActivities />
    </FormPageLoader>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  };
};

export default OnboardingActivitiesPage;
