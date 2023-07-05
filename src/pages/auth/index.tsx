import { message } from 'antd';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';

import FormAuth from '@/components/common/loginComponents/formAuth/FormAuth';
import GridLogin from '@/components/layouts/gridLogin/GridLogin';
import { loginUI } from '@/consts';

type Props = {
  resetting: boolean;
  setting: boolean;
  content: string;
};

const LoginPage: NextPage<Props> = ({ resetting, setting, content }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const successReset = () => {
    messageApi.open({
      type: 'success',
      content: `Password successfully ${content}`,
      duration: 5,
      icon: (
        <span className="icon_success_reset">
          <Image
            src="/assets/icons/alert_success.svg"
            alt="check"
            width={24}
            height={24}
          />
        </span>
      ),
    });
  };

  useEffect(() => {
    if (resetting || setting) {
      successReset();
    }
  }, [resetting, setting]);
  return (
    <>
      {contextHolder}
      <GridLogin>
        <FormAuth titleForm={loginUI.LOGIN_TEXT.title_form_login} />
      </GridLogin>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { resetting, setting } = query;

  if (resetting && !req.cookies.token) {
    return {
      props: {
        resetting,
        content: 'changed',
      },
    };
  }

  if (setting && !req.cookies.token) {
    return {
      props: {
        setting,
        content: 'set',
      },
    };
  }

  if (!req.cookies.token) {
    return {
      props: {
        resetting: false,
        content: '',
      },
    };
  }

  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
  };
};

export default LoginPage;
