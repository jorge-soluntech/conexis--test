import { Button, Typography } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { loginUI } from '@/consts';

import { LogoTypeWithMargin } from '../../logo/logotype';
import type { IServerDown } from './IServerDown';
import styles from './serverDown.module.scss';

const { Title, Paragraph } = Typography;

const ServerDown: FC<IServerDown.IProps> = ({ titleForm }) => {
  const router = useRouter();

  return (
    <div className={styles.server_down}>
      <LogoTypeWithMargin />
      <div style={{ marginTop: 0 }}>
        <Title level={3}>{titleForm}</Title>
        <Paragraph className={styles.email_sent_subtitle}>
          {loginUI.LOGIN_TEXT.subtitle_server_down}
          <span style={{ color: '#DD7812' }}>customerhelp@conexis.io</span>
        </Paragraph>
        <Button type="default" onClick={() => router.reload()}>
          Reload
        </Button>
      </div>
    </div>
  );
};

export default ServerDown;
