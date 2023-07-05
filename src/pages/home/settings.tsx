import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';

const Settings = dynamic(
  () => import('@/components/common/settingsComponents/Settings'),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * Settings page
 *
 * @returns The settings page
 */

const SettingsPage: NextPage = () => {
  return (
    <>
      <Settings />
    </>
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

export default SettingsPage;
