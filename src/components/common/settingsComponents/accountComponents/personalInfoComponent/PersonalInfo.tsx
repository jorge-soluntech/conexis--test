import { Button, Col, Form, Input, Row } from 'antd';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import type { RuleObject, RuleType } from 'rc-field-form/lib/interface';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { EMAIL_VALIDATION_REGEX } from '@/consts/forms_general';
import { SettingsServices } from '@/infrastructure/services/SettingsServices';
import locales from '@/locales/en/en.json';

import type { IPersonalInfo } from './IPersonalInfo';
import styles from './PersonalInfo.module.scss';

/**
 * A component that contains the Personal information conponent of settings.
 *
 * @returns A component with the Personal information conponent of settings.
 */
const PersonalInfo = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');
  const [messageSuccess, setMessageSuccess] = useState<string>('');
  const { fechtDataUser } = useContext(AuthContext);

  const [form] = Form.useForm();

  const { settings, formsCommon } = locales;

  const router = useRouter();
  const settingServices = new SettingsServices(router);

  const myPersonalInfo = () => {
    settingServices
      .getPersonalInfo()
      .then((res) => {
        form.setFieldsValue({
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          email: res.data.email,
        });
      })
      .catch(() => {
        setMessageError(formsCommon.errors.main_error);
        setShowError(true);
      });
  };

  useEffect(() => {
    myPersonalInfo();
  }, []);

  const nameValidationFun = (errorMsg: string) => {
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
            setMessageError(settings.formInfo.errors.emptyFields);
            setShowError(true);
            return Promise.reject();
          }
          if (!value) {
            setMessageError(errorMsg);
            setShowError(true);
            return Promise.reject();
          }
          if (EMAIL_VALIDATION_REGEX.test(value || '')) {
            return Promise.resolve();
          }
          return Promise.resolve();
        },
      },
    ];
  };

  const onSubmit = async (data: IPersonalInfo.IFormValues) => {
    const dataForm = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
    };

    await settingServices
      .updatePersonalInfo(dataForm)
      .then(() => {
        setShowSuccess(true);
        setShowError(false);
        setMessageSuccess(settings.formInfo.success);
      })
      .then(() => {
        fechtDataUser();
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          setMessageError(err.response?.data?.message?.toString());
          setShowError(true);

          if (err.response?.data?.message?.includes('already being used')) {
            setMessageError(settings.formInfo.errors.emailUnique);
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
            srcIcon="/assets/icons/alert_success_bold.svg"
            afterClose={() => setShowSuccess(false)}
            success={true}
          />
        )}
        <Row>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              className={` ${styles.smallInputs} ${styles.label}`}
              validateTrigger="onSubmit"
              required={true}
              rules={nameValidationFun(settings.formInfo.errors.firstName)}
              name="firstName"
              label={settings.formInfo.FirstName}
            >
              <Input
                className={styles.inputLabel}
                size="large"
                type="text"
                placeholder={settings.formInfo.FirstNamePlaceholder}
              />
            </Form.Item>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Form.Item
              name="lastName"
              validateTrigger="onSubmit"
              required={true}
              rules={nameValidationFun(settings.formInfo.errors.lastName)}
              label={settings.formInfo.LastName}
            >
              <Input
                className={styles.labelRequired}
                size="large"
                type="text"
                placeholder={settings.formInfo.LastNamePlaceholder}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={24} sm={24} xs={24} md={24}>
            <Form.Item
              name="email"
              label={settings.formInfo.email}
              required={true}
              requiredMark={true}
              validateTrigger="onSubmit"
              rules={nameValidationFun(settings.formInfo.errors.email)}
            >
              <Input
                className={`${styles.inputLabel}`}
                size="large"
                placeholder={settings.formInfo.emailPlaceholder}
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

export default PersonalInfo;
