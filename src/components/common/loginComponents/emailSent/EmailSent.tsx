import { message, Typography } from 'antd';
import Image from 'next/image';
import type { FC } from 'react';
import { useContext } from 'react';

import { AuthContext } from '@/application/authContext';
import { LogoTypeWithMargin } from '@/components/common/logo/logotype';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { loginUI } from '@/consts';
import { MOBILE_BREAKPOINT } from '@/consts/login_ui';

import styles from './emailSent.module.scss';
import type { IEmailSent } from './IEmailSent';

const { Title, Paragraph } = Typography;

const EmailSent: FC<IEmailSent.IProps> = ({ titleForm }) => {
  const { emailCheckToSend, emailSent } = useContext(AuthContext);

  const [messageApi, contextHolder] = message.useMessage();

  const { width = 0 } = useWindowDimensions();

  const successSent = () => {
    messageApi.open({
      type: 'success',
      content: 'Email successfully sent',
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

  const resendEmail = async () => {
    await emailCheckToSend(emailSent, 9);
    successSent();
  };

  return (
    <>
      {contextHolder}
      <div className={styles.email_sent}>
        <LogoTypeWithMargin />
        <div className="container_form" style={{ marginTop: 0 }}>
          <Title level={3}>{titleForm}</Title>
          <Paragraph className={styles.email_sent_subtitle}>
            {loginUI.LOGIN_TEXT.subtitle_email_sent}
            <br />
            {width <= MOBILE_BREAKPOINT ? <br /> : null}
            <strong>{`${emailSent} `}</strong>
            with a link to reset your <br />
            password.
          </Paragraph>
          <div
            className={styles.email_sent_resend}
            onClick={() => resendEmail()}
          >
            Re-send email
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSent;
