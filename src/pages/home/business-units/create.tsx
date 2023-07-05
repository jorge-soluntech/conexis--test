import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import locales from '@/locales/en/en.json';

const FormBusinessUnitCreate = dynamic(
  () => import('@/components/common/businessUnitsComponents/create/BUForm'),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * The BusinessUnitsCreate page, will see Main as a template, use the same template for other pages
 * @returns The BusinessUnitsCreate page ./
 */

const BusinessUnitsCreate = () => {
  const { businessUnits } = locales;
  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <FormBusinessUnitCreate titleForm={businessUnits.create.titleForm} />
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

export default BusinessUnitsCreate;
