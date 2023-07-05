import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/application/authContext';
import EmailSent from '@/components/common/loginComponents/emailSent/EmailSent';
import GridLogin from '@/components/layouts/gridLogin/GridLogin';
import { loginUI } from '@/consts';

const EmailSentPage: NextPage = () => {
  const { emailSent } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (emailSent === undefined) {
      router.push('/auth/forgot-password');
    }
  }, [emailSent]);

  return (
    <GridLogin>
      <EmailSent titleForm={loginUI.LOGIN_TEXT.title_email_sent} />
    </GridLogin>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req.cookies.token) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default EmailSentPage;
