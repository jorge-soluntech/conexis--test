import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ServerDown from '@/components/common/loginComponents/serverDown/ServerDown';
import GridLogin from '@/components/layouts/gridLogin/GridLogin';
import { loginUI } from '@/consts';
import RequestService from '@/infrastructure/services';

const ServerDownPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await RequestService.pingServer();
        router.back();
        return true;
      } catch (error) {
        return false;
      }
    };
    fetchData();
  }, []);

  return (
    <GridLogin>
      <ServerDown titleForm={loginUI.LOGIN_TEXT.title_server_down} />
    </GridLogin>
  );
};

export default ServerDownPage;
