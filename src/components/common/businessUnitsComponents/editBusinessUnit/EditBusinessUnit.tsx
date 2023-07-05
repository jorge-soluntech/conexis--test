import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import type { RuleType } from 'rc-field-form/lib/interface';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { RuleObject } from '@/components/designSystem';
import {
  Col,
  Content,
  Form,
  LeftOutlined,
  Row,
  Typography,
} from '@/components/designSystem';
import { EMAIL_VALIDATION_REGEX } from '@/consts/forms_general';
import { businessUnitsHomeUrl } from '@/consts/routes';
import { BusinessUnitServices } from '@/infrastructure/services/BusinessUnitsServices';
import locales from '@/locales/en/en.json';

import BusinessUnitForm from '../BUForm/businessUnitCreateForm';
import SucessComponent from '../BUsuccessComponent/successBUComponent';
import type { IBUForm } from '../create/IBUForm';
import styles from './EditBusinessUnit.module.scss';
import type { IEditBusinessUnit } from './IEditBusinessUnit';

const { Title } = Typography;

const { businessUnits } = locales;
const { formsCommon } = locales;

/**
 * A form that is used to update a business unit.
 *
 * @param
 * @returns The form to update business unit
 */
const FormEditBusinessUnit: FC<IEditBusinessUnit.IProps> = ({
  businessUnitId,
  fieldsValue,
  showError,
  phoneError,
  successResult,
  dataUser,
  messageError,
  detailsBusinessUnit,
  setMessageError,
  setShowError,
  setPhoneError,
  setSuccessResult,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const [loading, setLoading] = useState<boolean>(false);
  const businessUnitServices = new BusinessUnitServices(router);

  useEffect(() => {
    form.setFieldsValue(fieldsValue);
  }, [fieldsValue]);

  const clearOwnerFields = () => {
    form.setFieldsValue({
      firstName: undefined,
      lastName: undefined,
      primaryEmail: undefined,
    });
  };

  const clearInformationFields = () => {
    form.setFieldsValue({
      address: undefined,
      primaryPhone: undefined,
    });
  };

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
      region: data.region,
      first_name: data.firstName,
      last_name: data.lastName,
      address: data.address,
      location: data.location,
      primary_phone: data.primaryPhone?.toString(),
      primary_email: data.primaryEmail ? data.primaryEmail : undefined,
    };
    setLoading(true);
    await businessUnitServices
      .updateBusinessUnit(businessUnitId, dataForm)
      .then(() => {
        setSuccessResult(true);
      })
      .catch((err: AxiosError<any>) => {
        if (err.request.status === 400) {
          setMessageError(err.response?.data?.message);
          setShowError(true);
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
        <div className={styles.form_container}>
          <Row>
            <Col>
              <div
                className={styles.back}
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
          <Title className={styles.title} level={2}>
            {businessUnits.edit.title}
          </Title>
          {successResult ? (
            <SucessComponent successMessage={businessUnits.edit.success} />
          ) : (
            <>
              <div className={styles.business_unit}>
                <div className={styles.business_unit__detail}>
                  <span className={styles.business_unit__detail__label}>
                    {businessUnits.edit.id}
                  </span>
                  <span className={styles.business_unit__detail__value}>
                    {detailsBusinessUnit.id}
                  </span>
                </div>
                <div className={styles.business_unit__detail}>
                  <span className={styles.business_unit__detail__label}>
                    {businessUnits.create.inputs.name}
                  </span>
                  <span className={styles.business_unit__detail__value}>
                    {detailsBusinessUnit.location}
                  </span>
                </div>
                <div className={styles.business_unit__detail}>
                  <span className={styles.business_unit__detail__label}>
                    {businessUnits.create.inputs.number}
                  </span>
                  <span className={styles.business_unit__detail__value}>
                    {detailsBusinessUnit.businessUnitNumber}
                  </span>
                </div>
              </div>

              <BusinessUnitForm
                create={false}
                showError={showError}
                messageError={messageError}
                setShowError={setShowError}
                onSubmit={onSubmit}
                loading={loading}
                clearInformationFields={clearInformationFields}
                clearOwnerFields={clearOwnerFields}
                numberValidationRules={[]}
                phoneValidationRules={phoneValidationRules}
                emailValidationRules={emailValidationRules}
                phoneError={phoneError}
                form={form}
              />
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default FormEditBusinessUnit;
