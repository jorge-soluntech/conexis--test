/* eslint-disable array-callback-return */

import { LeftOutlined } from '@ant-design/icons';
import { Col, Form, Layout, Row, Typography } from 'antd';
import type { RuleObject } from 'antd/es/form';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import type { RuleType } from 'rc-field-form/lib/interface';
import type { FC } from 'react';
import { useContext, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { EMAIL_VALIDATION_REGEX } from '@/consts/forms_general';
import { businessUnitsHomeUrl } from '@/consts/routes';
import { BusinessUnitServices } from '@/infrastructure/services/BusinessUnitsServices';
import locales from '@/locales/en/en.json';

import BusinessUnitForm from '../BUForm/businessUnitCreateForm';
import SucessComponent from '../BUsuccessComponent/successBUComponent';
import styles from './BUForm.module.scss';
import type { IBUForm } from './IBUForm';

const { Title } = Typography;

const { Content } = Layout;

/**
 * A form that is used to create a business unit.
 *
 * @param titleForm - The string title of the business unit creation form.
 * @returns The form of creating a business unit with the titles and creation form
 */

const BUForm: FC<IBUForm.IProps> = ({ titleForm }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [showError, setShowError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [successResult, setSuccessResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { dataUser } = useContext(AuthContext);

  const { businessUnits } = locales;
  const { formsCommon } = locales;

  const [messageError, setMessageError] = useState<string>(
    formsCommon.errors.required
  );

  const businessUnitServices = new BusinessUnitServices(router);

  const clearOwnerFields = () => {
    form.setFieldsValue({
      firstName: undefined,
      lastName: undefined,
      primaryEmail: undefined,
    });
  };

  const clearInformationFields = () => {
    form.setFieldsValue({
      businessUnitNumber: undefined,
      address: undefined,
      location: undefined,
      primaryPhone: undefined,
    });
  };

  const numberValidationRules = [
    {
      required: true,
      validator: async (_: RuleObject, value: string) => {
        if (!value) {
          setMessageError(businessUnits.create.errors.number);
          setShowError(true);
          return Promise.reject();
        }
        return Promise.resolve();
      },
    },
  ];

  const phoneValidationRules = [
    {
      validator: async (_: RuleObject, value: string | number) => {
        if (value && value.toString().length < 10) {
          setMessageError(businessUnits.create.errors.phone);
          setPhoneError(true);
          setShowError(true);
          return Promise.reject();
        }
        return Promise.resolve();
      },
    },
  ];

  const emailValidationRules = [
    {
      type: 'email' as RuleType | undefined,
      validator: async (_: RuleObject, value: string) => {
        if (value) {
          if (EMAIL_VALIDATION_REGEX.test(value)) {
            return Promise.resolve();
          }
          setMessageError(businessUnits.create.errors.email);
          setShowError(true);
          return Promise.reject();
        }
        return Promise.resolve();
      },
    },
  ];

  const onSubmit = async (data: IBUForm.IFormValues) => {
    const dataForm = {
      id_tenant: undefined,
      business_unit_number: data.businessUnitNumber.toString(),
      first_name: data.firstName,
      last_name: data.lastName,
      primary_email: data.primaryEmail
        ? data.primaryEmail.toLowerCase()
        : undefined,
      primary_phone: data.primaryPhone
        ? data.primaryPhone.toString()
        : undefined,
      address: data.address,
      location: data.location,
    };
    setLoading(true);
    await businessUnitServices
      .createBusinessUnit(dataForm)
      .then(() => {
        setSuccessResult(true);
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          setMessageError(err.response?.data?.message?.toString());
          setShowError(true);

          if (
            err.response?.data?.message &&
            Array.isArray(err.response?.data?.message) &&
            err.response?.data?.message[0] &&
            err.response?.data?.message[0].includes('must be an email')
          ) {
            setMessageError(formsCommon.errors.email);
            setShowError(true);
          }
        }

        if (err.request.status === 500) {
          setMessageError(formsCommon.errors.main_error);
          setShowError(true);
        }
      });
    setLoading(false);
  };

  return (
    <>
      <Content>
        <div className={`${styles.form_container}`}>
          <Row>
            <Col>
              <div
                className={styles.back_arrow}
                onClick={() => {
                  router.push(businessUnitsHomeUrl, undefined, {
                    shallow: true,
                  });
                }}
              >
                <LeftOutlined />
                &nbsp; {businessUnits.title}
              </div>
            </Col>
          </Row>

          <div className={styles.form_subtitle}>
            {dataUser ? dataUser.logged_buyer_client_company_name : ''}
          </div>
          <Title
            style={{ marginBottom: '20px', marginTop: '0', fontSize: 32 }}
            level={2}
          >
            {titleForm}
          </Title>
          {successResult ? (
            <SucessComponent
              successMessage={businessUnits.create.sucessfullCreation}
            />
          ) : (
            <BusinessUnitForm
              create={true}
              showError={showError}
              messageError={messageError}
              setShowError={setShowError}
              onSubmit={onSubmit}
              clearInformationFields={clearInformationFields}
              clearOwnerFields={clearOwnerFields}
              loading={loading}
              numberValidationRules={numberValidationRules}
              phoneValidationRules={phoneValidationRules}
              emailValidationRules={emailValidationRules}
              phoneError={phoneError}
              form={form}
            />
          )}
        </div>
      </Content>
    </>
  );
};

export default BUForm;
