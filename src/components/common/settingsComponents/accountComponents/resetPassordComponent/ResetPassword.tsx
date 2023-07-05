import { Button, Col, Form, Input, Row, Typography } from 'antd';
import type { AxiosError } from 'axios';
import { Eye, EyeSlash } from 'iconsax-react';
import { useRouter } from 'next/router';
import type { RuleObject, RuleType } from 'rc-field-form/lib/interface';
import { useState } from 'react';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { PASSWORDS_VALIDATION_REGEX } from '@/consts/forms_general';
import { SettingsServices } from '@/infrastructure/services/SettingsServices';
import locales from '@/locales/en/en.json';

import type { IResetPassword } from './IResetPassword';
import styles from './ResetPassword.module.scss';

/**
 * A component that lets the user reset the password.
 *
 * @returns A component with a reset password form.
 */
const ResetPassword = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [messageSuccess, setMessageSuccess] = useState<string>('');

  const [form] = Form.useForm();

  const { settings, formsCommon } = locales;

  const router = useRouter();
  const settingServices = new SettingsServices(router);

  const { Paragraph } = Typography;

  const passwordValidationFun = (errorMsg: string) => {
    return [
      {
        type: 'string' as RuleType | undefined,
        required: true,
        validator: async (_: RuleObject, value: string) => {
          if (
            !PASSWORDS_VALIDATION_REGEX.test(value || '') ||
            value?.length < 8
          ) {
            setMessageError(errorMsg);
            setShowError(true);
            return Promise.reject();
          }
          return Promise.resolve();
        },
      },
    ];
  };

  const passwordMatchFun = (errorMsg: string) => {
    return [
      {
        type: 'string' as RuleType | undefined,
        required: true,
        validator: async (inputRules: RuleObject, value: string) => {
          const formValues = form.getFieldsValue();
          if (
            Object.values(formValues).every(
              (val) => (val === undefined || val === '') && inputRules.required
            )
          ) {
            setTimeout(() =>
              form.setFields([{ name: 'newPassword', errors: [''] }])
            );
            setMessageError(settings.formReset.textErrorEmptyFields);
            setShowError(true);
            return Promise.reject();
          }
          if (
            form.getFieldValue('newPassword') &&
            value !== form.getFieldValue('newPassword')
          ) {
            setTimeout(() =>
              form.setFields([{ name: 'newPassword', errors: [''] }])
            );
            setMessageError(errorMsg);
            setShowError(true);
            return Promise.reject();
          }

          return Promise.resolve();
        },
      },
    ];
  };

  const passwordIcon = (visible: boolean) =>
    visible ? (
      <Eye size="20" color="#C1C6CD" />
    ) : (
      <EyeSlash size="20" color="#C1C6CD" />
    );

  const onSubmit = async (data: IResetPassword.IFormValues) => {
    const dataForm = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      confirmationPassword: data.confirmationPassword,
    };

    await settingServices
      .updatePassword(dataForm)
      .then(() => {
        setShowSuccess(true);
        setShowError(false);
        setMessageSuccess(settings.formReset.success);
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          setMessageError(err.response?.data?.message?.toString());
          setShowError(true);

          if (err.response?.data?.message?.includes('Incorrect password')) {
            form.setFields([{ name: 'oldPassword', errors: [''] }]);
            setMessageError(settings.formReset.errors.incorrectPassword);
            setShowError(true);
          }
        }

        if (err.request.status === 500) {
          setMessageError(formsCommon.errors.main_error);
          setShowError(true);
        }
      });
  };

  return (
    <>
      <Form
        name="basic"
        className={styles.form}
        onFinish={onSubmit}
        layout="vertical"
        form={form}
      >
        {showError && (
          <AlertMessage
            message={messageError}
            afterClose={() => setShowError(false)}
          />
        )}
        {showSuccess && (
          <AlertMessage
            message={messageSuccess}
            srcIcon="/assets/icons/alert_success.svg"
            afterClose={() => setShowSuccess(false)}
            success={true}
          />
        )}
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Form.Item
              name="oldPassword"
              className={`${styles.label}`}
              validateTrigger="onSubmit"
              required={true}
              rules={passwordValidationFun(settings.formReset.errors.password)}
              label={settings.formReset.password}
            >
              <Input.Password
                size="large"
                placeholder={settings.formReset.passwordPlaceholder}
                iconRender={passwordIcon}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="newPassword"
              validateTrigger="onSubmit"
              className={` ${styles.smallInputs} ${styles.label}`}
              required={true}
              rules={passwordValidationFun(settings.formReset.errors.password)}
              label={settings.formReset.newPassword}
            >
              <Input.Password
                size="large"
                placeholder={settings.formReset.newPasswordPlaceholder}
                iconRender={passwordIcon}
              />
            </Form.Item>
            <Paragraph className={styles.form__rules}>
              {settings.formReset.alert1} <br />
              {settings.formReset.alert2}
            </Paragraph>
          </Col>

          <Col lg={12} sm={24} xs={24} md={12}>
            <Form.Item
              name="confirmationPassword"
              label={settings.formReset.confirmPassword}
              required={true}
              requiredMark={true}
              validateTrigger="onSubmit"
              rules={passwordMatchFun(settings.formReset.errors.passwordMatch)}
              className={styles.inputLabel}
            >
              <Input.Password
                size="large"
                placeholder={settings.formReset.confirmPasswordPlaceholder}
                iconRender={passwordIcon}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submit}>
            {formsCommon.submit}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResetPassword;
