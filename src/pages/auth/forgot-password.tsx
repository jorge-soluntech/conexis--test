import type { GetServerSideProps, NextPage } from 'next';

import BackLogin from '@/components/common/loginComponents/backLogin/BackLogin';
import FormForgot from '@/components/common/loginComponents/formForgot/FormForgot';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import GridLogin from '@/components/layouts/gridLogin/GridLogin';
import { loginUI } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

type Props = {
  reset: boolean;
};

const ForgotPage: NextPage<Props> = () => {
  const { width = 0 } = useWindowDimensions();
  return (
    <GridLogin>
      <div className="back_desktop">
        {width >= TABLET_BREAKPOINT && <BackLogin />}
      </div>
      <FormForgot
        titleForm={loginUI.LOGIN_TEXT.title_form_forgot}
        subtitleForm={loginUI.LOGIN_TEXT.subtitle_form_forgot}
      />
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

export default ForgotPage;
