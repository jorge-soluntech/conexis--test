import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { userCretaeUI } from '@/consts';

const SuccessfullComponent = dynamic(
  () =>
    import(
      '@/components/common/userCreateComponents/formSuccess/SuccessfullComponent'
    ),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * The MyJobs page, will see Main as a template, use the same template for other pages
 * @returns The MyJobs page ./
 */

const SuccessForm = () => {
  return (
    <>
      <SuccessfullComponent
        titleForm={userCretaeUI.USER_CREATION_TEXT.title_form_user_creation}
      />
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

export default SuccessForm;
