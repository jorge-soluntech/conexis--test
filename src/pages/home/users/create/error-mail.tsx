import type { GetServerSideProps } from 'next';

import ErrorMailComponent from '@/components/common/userCreateComponents/formErrorMail/ErrorMailComponent';
import { userCretaeUI } from '@/consts';
/**
 * The MyJobs page, will see Main as a template, use the same template for other pages
 * @returns The MyJobs page ./
 */

const ErrorForm = () => {
  return (
    <>
      <ErrorMailComponent
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

export default ErrorForm;
