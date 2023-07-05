import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';

/**
 * The PostNewJobs page, will see Main as a template, use the same template for other pages
 * @returns The PostNewJobs page ./home/post-new-jobs/
 */

const PostNewJobs = dynamic(
  () =>
    import('@/components/common/postJobsComponents/postNewJobs/PostNewJobs'),
  {
    loading: () => <FallbackComponent />,
  }
);

const PostNewJobsPage = () => {
  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <PostNewJobs />
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

export default PostNewJobsPage;
