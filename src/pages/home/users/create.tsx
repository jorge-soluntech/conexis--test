import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import { userCretaeUI } from '@/consts';

const FormUserCreate = dynamic(
  () =>
    import(
      '@/components/common/userCreateComponents/formUserCreate/FormUserCreate'
    ),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);
/**
 * The FormUserCreate page, will see Main as a template, use the same template for other pages
 * @returns The FormUserCreate page ./
 */

const UserCreate = () => {
  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <FormUserCreate
        titleForm={userCretaeUI.USER_CREATION_TEXT.title_form_user_creation}
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

export default UserCreate;
