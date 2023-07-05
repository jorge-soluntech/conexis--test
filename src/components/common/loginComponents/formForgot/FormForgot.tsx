import { Alert, Button, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { AuthContext } from '@/application/authContext';
import Input from '@/components/common/input/Input';
import BackLogin from '@/components/common/loginComponents/backLogin/BackLogin';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

import { LogoTypeWithMargin } from '../../logo/logotype';
// import BackLogin from '../backLogin/backLogin';
import styles from './formForgot.module.scss';
import type { IFormForgot } from './IFormForgot';

const { Title, Paragraph } = Typography;

/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @param subtitleForm - The string of subtitle form
 * @returns The form of forgot-password page
 */

const FormForgot: FC<IFormForgot.IProps> = ({ titleForm, subtitleForm }) => {
  const router = useRouter();

  const { emailCheckToSend } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<IFormForgot.IFormValues>();

  const { width = 0 } = useWindowDimensions();

  const [showError, setShowError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const onSubmit: SubmitHandler<IFormForgot.IFormValues> = async (data) => {
    const { status, message } = await emailCheckToSend(data.email, 9);

    if (!status) {
      setShowError(true);
      setMessageError(message);
      return;
    }

    router.push('/auth/email-sent', undefined, {
      shallow: true,
    });
  };

  return (
    <div className={styles.form_forgot}>
      <LogoTypeWithMargin />
      {width <= TABLET_BREAKPOINT && <BackLogin />}
      {showError && (
        <Alert
          message={messageError}
          className="alert_red"
          style={{ marginBottom: 24 }}
          type="error"
          showIcon
          closable
          afterClose={() => setShowError(false)}
          icon={
            <Image
              src="/assets/icons/alert_error.svg"
              alt="logo_conexis"
              width={24}
              height={24}
            />
          }
        />
      )}
      <div className="container_form">
        <Title level={3}>{titleForm}</Title>
        <Paragraph className={styles.form_forgot_subtitle}>
          {subtitleForm}
        </Paragraph>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputWidth="100%"
            inputHeight="48px"
            type="email"
            id="email"
            register={register}
            inputLabel="Email"
          />
          <div style={{ marginTop: '24px' }}>
            <Button type="primary" size="large" htmlType="submit">
              Send email
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormForgot;
