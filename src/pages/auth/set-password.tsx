import Cookies from 'js-cookie';
import type { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';

import BackLogin from '@/components/common/loginComponents/backLogin/BackLogin';
import FormSet from '@/components/common/loginComponents/formSet/FormSet';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import GridLogin from '@/components/layouts/gridLogin/GridLogin';
import { loginUI } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

type Props = {
  token: string;
  email: string;
};

const SetPasswordPage: NextPage<Props> = ({ token, email }) => {
  const { width = 0 } = useWindowDimensions();

  useEffect(() => {
    Cookies.remove('token');
    Cookies.remove('user');
  }, []);

  return (
    <GridLogin>
      <div className="back_desktop">
        {width >= TABLET_BREAKPOINT && <BackLogin />}
      </div>
      <FormSet
        titleForm={loginUI.LOGIN_TEXT.title_form_set}
        token={token}
        email={email}
      />
    </GridLogin>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { token, email } = query;

  if (token && email) {
    const emailDecode = encodeURIComponent(email as string).replace('%20', '+');
    return {
      props: {
        token,
        email: decodeURIComponent(emailDecode),
      },
    };
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  };
};

export default SetPasswordPage;
