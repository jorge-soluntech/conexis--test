import type { GetServerSideProps, NextPage } from 'next';

import BackLogin from '@/components/common/loginComponents/backLogin/BackLogin';
import FormReset from '@/components/common/loginComponents/formReset/FormReset';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import GridLogin from '@/components/layouts/gridLogin/GridLogin';
import { loginUI } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

type Props = {
  token: string;
  email: string;
};

const ResetPasswordPage: NextPage<Props> = ({ token, email }) => {
  const { width = 0 } = useWindowDimensions();

  return (
    <GridLogin>
      <div className="back_desktop">
        {width >= TABLET_BREAKPOINT && <BackLogin />}
      </div>
      <FormReset
        titleForm={loginUI.LOGIN_TEXT.title_form_reset}
        token={token}
        email={email}
      />
    </GridLogin>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { token, email } = query;

  if (token && email) {
    return {
      props: {
        token,
        email,
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

export default ResetPasswordPage;
