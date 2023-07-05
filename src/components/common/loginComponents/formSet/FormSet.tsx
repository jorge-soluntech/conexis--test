/* eslint-disable @typescript-eslint/naming-convention */
import { Alert, Button, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { AuthContext } from '@/application/authContext';
import Input from '@/components/common/input/Input';
import BackLogin from '@/components/common/loginComponents/backLogin/BackLogin';
import useFormAlert from '@/components/hooks/useFormAlert';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

import { LogoTypeWithMargin } from '../../logo/logotype';
import styles from './formSet.module.scss';
import type { IFormSet } from './IFormSet';

const { Title, Paragraph } = Typography;

/**
 * Returns the Alert, Title and Form component
 *
 * @param titleForm - The string of title form
 * @param token - The token from de query url
 * @param email - The email from de query url
 * @returns The form of set-password page
 */

const FormSet: FC<IFormSet.IProps> = ({ titleForm, token, email }) => {
  const router = useRouter();
  const { setNewPassword } = useContext(AuthContext);

  const { messageError, showError, renderAlert, closeError } = useFormAlert();

  const { register, handleSubmit } = useForm<IFormSet.IFormValues>();

  const { width = 0 } = useWindowDimensions();

  const onSubmit: SubmitHandler<IFormSet.IFormValues> = async (data) => {
    const { password, password_repeat } = data;

    const dataForm = {
      email,
      tenant: 9,
      token,
      newPassword: password,
      confirmationPassword: password_repeat,
    };

    if (renderAlert(dataForm)) {
      return;
    }

    const isSetSuccess = await setNewPassword(dataForm);

    if (!isSetSuccess) {
      router.push('/auth/expired-link', undefined, {
        shallow: true,
      });
      return;
    }

    router.push('/auth?setting=true', undefined, {
      shallow: true,
    });
  };

  return (
    <div className={styles.form_set}>
      <LogoTypeWithMargin />
      {width <= TABLET_BREAKPOINT && <BackLogin />}
      <div className={styles.form_set_alert}>
        {showError && (
          <Alert
            message={messageError}
            className="alert_red"
            type="error"
            style={{ width: '100%' }}
            showIcon
            closable
            afterClose={() => closeError()}
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
      </div>
      <div style={{ width: '100%' }}>
        <Title level={3}>{titleForm}</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputWidth="100%"
            inputHeight="48px"
            type="password"
            inputLabel="Password"
            placeholder=""
            id="password"
            register={register}
            rules={{
              required: false,
            }}
          />
          <div style={{ marginTop: '24px' }}>
            <Input
              inputWidth="100%"
              inputHeight="48px"
              type="password"
              inputLabel="Repeat password"
              placeholder=""
              id="password_repeat"
              register={register}
              rules={{
                required: false,
              }}
            />
          </div>
          <Paragraph className={styles.form_set_rules}>
            Your password must contain at least 8 characters, <br /> 1 number, 1
            special character, 1 uppercase letter.
          </Paragraph>
          <div style={{ marginTop: '24px' }}>
            <Button type="primary" size="large" htmlType="submit">
              Create new password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSet;
