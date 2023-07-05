import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import locales from '@/locales/en/en.json';

const CandidatesCreate = dynamic(
  () =>
    import(
      '@/components/common/candidatesComponents/candidatesCreate/CandidatesCreate'
    ),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * The CandidatesCreatePage page, will see Main as a template, use the same template for other pages
 * @returns The CandidatesCreatePage page ./home/work-shifts/create
 */

const CandidatesCreatePage = () => {
  const { candidates } = locales;

  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <CandidatesCreate
        titleForm={candidates.create.titleForm}
        titleBackButton={candidates.create.titleButtonBack}
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

export default CandidatesCreatePage;
