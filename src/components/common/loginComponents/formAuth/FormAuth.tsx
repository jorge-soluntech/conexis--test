import { Alert, Button, Typography } from 'antd';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext, useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { AuthContext } from '@/application/authContext';
import { setShowSuccessReset } from '@/application/uiSlice/uiSlice';
import Input from '@/components/common/input/Input';
import { LogoTypeWithMargin } from '@/components/common/logo/logotype';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import { URL_DASHBOARD } from '@/consts/routes';

import styles from './formAuth.module.scss';
import type { IFormAuth } from './IFormAuth';

const { Title, Paragraph } = Typography;

/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @returns The form of login page
 */

const FormAuth: FC<IFormAuth.IProps> = ({ titleForm }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const { loginUser, currentAttempts, failedAttempts } =
    useContext(AuthContext);

  const [showError, setShowError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>(
    'This field is required'
  );

  const { register, handleSubmit } = useForm<IFormAuth.IFormValues>();

  // Set failedAttempts to 0 every five minutes
  useEffect(() => {
    const intervalAttempts = setInterval(() => currentAttempts(0), 300000);
    return () => {
      clearInterval(intervalAttempts);
    };
  }, []);

  const onSubmit: SubmitHandler<IFormAuth.IFormValues> = async ({
    username,
    password,
  }) => {
    setIsLoading(true);
    try {
      const isValidLogin = await loginUser(username, password, 9);

      if (Cookies.get('locked')) {
        setMessageError('Too many attempts. Try again in 60 minutes.');
        setShowError(true);
        return;
      }

      if (failedAttempts >= 4 && !isValidLogin) {
        const inFiveMinutes = new Date(new Date().getTime() + 60 * 60 * 1000);
        Cookies.set('locked', inFiveMinutes.toString(), {
          expires: inFiveMinutes,
        });
        setMessageError('Too many attempts. Try again in 60 minutes.');
        setShowError(true);
        return;
      }

      if (!isValidLogin) {
        currentAttempts(failedAttempts + 1);
        setMessageError('Email or password incorrect.');
        setShowError(true);
        return;
      }

      router.push(URL_DASHBOARD);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.form_auth}>
      <LogoTypeWithMargin />
      {showError && (
        <Alert
          message={messageError}
          className="alert_red"
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

      <div style={{ marginTop: 0 }}>
        <Title level={3}>{titleForm}</Title>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Input
            inputWidth="100%"
            inputHeight="48px"
            type="text"
            inputLabel="Email"
            id="username"
            register={register}
          />
          <div style={{ marginTop: '24px' }}>
            <Input
              inputWidth="100%"
              inputHeight="48px"
              type="password"
              inputLabel="Password"
              placeholder="8+ characters"
              id="password"
              register={register}
            />
          </div>
          <div
            className={styles.form_auth_forgot}
            onClick={() => {
              dispatch(setShowSuccessReset());
              router.push('/auth/forgot-password', undefined, {
                shallow: true,
              });
            }}
          >
            Forgot password?
          </div>
          <div style={{ marginTop: '24px' }}>
            <Button
              loading={isLoading}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Log in
            </Button>
          </div>
          <Paragraph className={styles.support}>
            <strong>Customer Support</strong>
            <br /> Email: customerhelp@conexis.io <br />
            Monday - Friday (9:00 AM to 5:00 PM EST)
          </Paragraph>
        </form>
      </div>
    </div>
  );
};

export default FormAuth;
