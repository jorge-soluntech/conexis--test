import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import locales from '@/locales/en/en.json';

const WorkShiftsCreate = dynamic(
  () =>
    import(
      '@/components/common/workShiftsComponents/workShiftsCreate/WorkShiftsCreate'
    ),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * The WorkShiftsCreate page, will see Main as a template, use the same template for other pages
 * @returns The WorkShiftsCreate page ./home/work-shifts/create
 */

const WorkShiftsCreatePage = () => {
  const { workShifts } = locales;

  return (
    <FormPageLoader
      {...{ useGetData: useCreateFormLoader, hasFormDetailsHeader: true }}
    >
      <WorkShiftsCreate
        titleForm={workShifts.create.titleForm}
        titleBackButton={workShifts.create.titleButtonBack}
      />
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

export default WorkShiftsCreatePage;
