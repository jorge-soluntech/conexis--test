import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';

import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { MOBILE_BREAKPOINT } from '@/consts/login_ui';
import { BusinessUnitServices } from '@/infrastructure/services/BusinessUnitsServices';
import phoneFormatter from '@/utils/phoneFormatter';

import type { IBUForm } from '../../create/IBUForm';
import styles from '../EditBusinessUnit.module.scss';
import type { IEditForm } from './IEditForm';

const EditForm: FC<IEditForm.IProps> = ({
  form,
  setSuccessResult,
  setShowError,
  setMessageError,
}) => {
  const router = useRouter();
  const { width = 0 } = useWindowDimensions();
  const businessUnitServices = new BusinessUnitServices(router);

  const [phoneError, setPhoneError] = useState<boolean>(false);

  const [businessUnitId] = useState<any>(router.query.businessUnitId);

  const clearOwnerFields = () => {
    form.setFieldsValue({
      firstName: null,
      lastName: null,
      primaryEmail: null,
    });
  };

  const clearInformationFields = () => {
    form.setFieldsValue({
      region: null,
      address: null,
      primaryPhone: null,
    });
  };

  const onSubmit = async (data: IBUForm.IFormValues) => {
    const dataForm: any = {
      region: data.region,
      first_name: data.firstName,
      last_name: data.lastName,
      address: data.address,
      location: data.location,
      primary_phone: data.primaryPhone,
      primary_email: data.primaryEmail ? data.primaryEmail : null,
    };
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
          setMessageError("There's been an error. Please try again later.");
          setShowError(true);
        }
      });
  };

  return (
    <Form
      form={form}
      scrollToFirstError
      onFinish={onSubmit}
      name="editBusinessUnit"
    >
      <div className={styles.form_subtitle_container}>
        <div className={styles.form_small_title}>Business unit owner</div>
        {width > MOBILE_BREAKPOINT && (
          <button
            className={styles.form_clear_fields}
            type="button"
            onClick={clearOwnerFields}
          >
            Clear fields
          </button>
        )}
      </div>
      <Row>
        <Col lg={8} sm={24} xs={24} md={8}>
          <Form.Item
            className={`${styles.label} ${styles.input_name}`}
            validateTrigger="onSubmit"
            name="firstName"
            label="First name"
          >
            <Input
              className={styles.inputLabel}
              size="large"
              type="text"
              placeholder="Enter first name here"
            />
          </Form.Item>
        </Col>
        <Col lg={8} sm={24} xs={24} md={8}>
          <Form.Item
            className={`${styles.labelRequired} ${styles.input_name}`}
            name="lastName"
            validateTrigger="onSubmit"
            label="Last name"
          >
            <Input
              className={styles.inputLabel}
              size="large"
              type="text"
              placeholder="Enter last name here"
            />
          </Form.Item>
        </Col>
        <Col lg={8} sm={24} xs={24} md={8}>
          <Form.Item
            className={styles.labelRequired}
            name="primaryEmail"
            label="Email (primary work or primary home)"
            validateTrigger="onSubmit"
            rules={[
              {
                type: 'email',
                validator: async (_, value) => {
                  if (value) {
                    if (
                      /^[a-zA-Z0-9]+([\w.'!#$%&*+\-/=?^`{|}~])*([a-zA-Z0-9])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/.test(
                        value
                      )
                    ) {
                      return Promise.resolve();
                    }
                    setMessageError('Please enter a valid email address.');
                    setShowError(true);
                    return Promise.reject();
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input
              className={styles.inputLabel}
              size="large"
              placeholder="example@email.com"
            />
          </Form.Item>
        </Col>
      </Row>
      {width < MOBILE_BREAKPOINT && (
        <>
          <div className={styles.form_subtitle_container}>
            <button
              className={styles.form_clear_fields}
              type="button"
              onClick={clearOwnerFields}
            >
              Clear fields
            </button>
          </div>
        </>
      )}
      <Divider style={{ backgroundColor: '#DBDDE0' }} />
      <div className={styles.form_subtitle_container}>
        <div className={styles.form_small_title}>Business unit information</div>
        {width > MOBILE_BREAKPOINT && (
          <button
            className={styles.form_clear_fields}
            type="button"
            onClick={clearInformationFields}
          >
            Clear fields
          </button>
        )}
      </div>
      <Row>
        <Col lg={8} sm={24} xs={24} md={24}>
          <Form.Item
            className={`${styles.label} ${styles.input_region}`}
            validateTrigger="onSubmit"
            name="region"
            label="Region"
          >
            <Select
              className={`${
                styles.select_user_create
              } ${'dummyClassCreateFormForBorder'}`}
              style={{ width: '100%', borderRight: 'white' }}
              size="large"
              placeholder="Enter region here"
              maxTagCount="responsive"
              optionFilterProp="children"
              options={[
                {
                  label: 'Central',
                  value: 'Central',
                },
                {
                  label: 'East',
                  value: 'East',
                },
                {
                  label: 'West',
                  value: 'West',
                },
                {
                  label: 'N/A',
                  value: 'N/A',
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col lg={8} sm={12} xs={24} md={12}>
          <Form.Item
            className={`${styles.labelRequired} ${styles.input_address}`}
            name="address"
            label="Address"
            validateTrigger="onSubmit"
          >
            <Input
              type="text"
              size="large"
              className={styles.inputLabel}
              placeholder="Enter address here"
            />
          </Form.Item>
        </Col>
        <Col lg={8} sm={12} xs={24} md={12}>
          <Form.Item
            help={false}
            name="primaryPhone"
            label="Phone number"
            validateTrigger="onSubmit"
            className={`${styles.labelRequired}`}
            required={false}
            rules={[
              {
                validator: async (_, value) => {
                  if (value && value.length < 10) {
                    setMessageError('Please enter a valid phone number.');
                    setShowError(true);
                    setPhoneError(true);
                    return Promise.reject();
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <InputNumber
              size="large"
              maxLength={14}
              controls={false}
              bordered={false}
              formatter={phoneFormatter}
              className={`${styles.inputLabel} ${
                phoneError ? styles.input_number_error : ''
              }`}
              placeholder="Enter phone number here"
              onChange={(value) =>
                form.setFieldValue('primaryPhone', value?.toString() || null)
              }
              parser={(value: any) => value.replace(/\D/g, '')}
            />
          </Form.Item>
        </Col>
      </Row>
      {width < MOBILE_BREAKPOINT && (
        <>
          <div className={styles.form_subtitle_container}>
            <button
              className={styles.form_clear_fields}
              type="button"
              onClick={clearInformationFields}
            >
              Clear fields
            </button>
          </div>
        </>
      )}

      <div style={{ marginTop: '24px' }}>
        <Button type="primary" size="large" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EditForm;
