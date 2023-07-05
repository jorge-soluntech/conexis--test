/* eslint-disable array-callback-return */
import { LeftOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { CSSProperties, FC } from 'react';
import { useEffect } from 'react';

import {
  Alert,
  Button,
  Card,
  Col,
  Content,
  Form,
  Input as InputAsd,
  Row,
  Select,
  Typography,
} from '@/components/designSystem';
import { userCretaeUI } from '@/consts';
import { EMAIL_VALIDATION_REGEX } from '@/consts/forms_general';

import styles from './formUserUpdate.module.scss';
import { getFieldValues, tagRender } from './helpers';
import type { IFormUserUpdate } from './IFormUserUpdate';

const { Title } = Typography;

export const gridStyle: CSSProperties = {
  width: '100%',
  textAlign: 'center',
  alignContent: 'center',
  boxShadow: 'none',
  padding: '10px',
};

/**
 * Returns the form update component
 *
 * @param
 * @returns The form to update user data
 */
const FormUserUpdate: FC<IFormUserUpdate.IProps> = ({
  userInfo,
  userRole,
  possibleBuyers,
  roles,
  showError,
  showBuyer,
  isLoading,
  messageError,
  successResult,
  onSubmit,
  onSelectRole,
  setShowError,
  setMessageError,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue(getFieldValues(userInfo));
    }
  }, [userInfo]);

  useEffect(() => {
    if (
      [
        'Supplier Administrator',
        'Account Manager',
        'Supplier Finance',
      ].includes(userRole)
    ) {
      form.setFieldValue('buyer', userInfo.legacy_permissioned_buyers);
    } else if (
      [
        'MSP Administrator',
        'Program Manager',
        'Program Representative',
        'MSP Finance',
        'Super Administrator',
        'Product Support',
      ].includes(userRole)
    ) {
      form.setFieldValue(
        'buyer',
        userInfo.legacy_permissioned_buyers
          ? userInfo.legacy_permissioned_buyers
          : undefined
      );
    }
  }, [userRole, userInfo]);

  return (
    <>
      <Content>
        <div className={`${styles.form_container}`}>
          <Row>
            <Col>
              <div
                style={{
                  cursor: 'pointer',
                  color: '#888E95',
                  width: 'fit-content',
                  fontSize: '16px',
                }}
                onClick={() => {
                  router.push('/home/users', undefined, {
                    shallow: true,
                  });
                }}
              >
                <LeftOutlined />
                &nbsp; Users
              </div>
            </Col>
          </Row>

          <Title
            style={{ marginBottom: '1.2rem', marginTop: '2rem', fontSize: 32 }}
            level={2}
          >
            {userCretaeUI.USER_CREATION_TEXT.title_form_user_edition}
          </Title>

          {successResult ? (
            <Card style={{ paddingTop: '0rem' }} className={styles.form_create}>
              <Card.Grid hoverable={false} style={gridStyle}>
                <div
                  style={{ marginTop: '55px' }}
                  className={`${styles.alertSuccess}`}
                >
                  sucess
                </div>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <span className={styles.text}>
                  User has been
                  <br /> successfully submitted.
                </span>
              </Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                <Button
                  style={{
                    fontSize: 16, // width <= MOBILE_BREAKPOINT ? 700 : 400,
                  }}
                  type="default"
                  size="large"
                  htmlType="submit"
                  onClick={() => {
                    router.push('/home/users', undefined, {
                      shallow: true,
                    });
                  }}
                >
                  Go back to users
                </Button>
                <div style={{ height: '50px' }} />
              </Card.Grid>
            </Card>
          ) : (
            <Card>
              <div className={styles.form_user_create}>
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

                <Form
                  form={form}
                  name="register"
                  onFinish={onSubmit}
                  scrollToFirstError
                >
                  <Row>
                    <Col span={24}>
                      <div>
                        <Form.Item
                          className={styles.labelRequired}
                          name="typeUser"
                          validateTrigger="onSubmit"
                          label="Select type of user"
                          rules={[
                            {
                              required: true,
                              validator: async (_, value) => {
                                if (!value) {
                                  setMessageError(
                                    'All fields are required. Please make sure all fields are filled before submitting the form.'
                                  );
                                  setShowError(true);
                                  return Promise.reject();
                                }
                                return Promise.resolve();
                              },
                            },
                          ]}
                        >
                          <Select
                            className={`${
                              styles.select_user_create
                            } ${'dummyClassCreateFormForBorder'}`}
                            style={{ width: '100%', borderRight: 'white' }}
                            size="large"
                            onSelect={onSelectRole}
                            placeholder="Select type of user here"
                            suffixIcon={' '}
                            maxTagCount="responsive"
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option: any) =>
                              (option?.value ?? '')
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            options={roles}
                          />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                  {showBuyer && (
                    <Row>
                      <Col span={24}>
                        <div>
                          <Form.Item
                            className={styles.labelRequired}
                            name="buyer"
                            validateTrigger="onSubmit"
                            label="Select buyers"
                            rules={[
                              {
                                required: true,
                                validator: async (_, value) => {
                                  if (!value) {
                                    setMessageError(
                                      'All fields are required. Please make sure all fields are filled before submitting the form.'
                                    );
                                    setShowError(true);
                                    return Promise.reject();
                                  }
                                  if (value.length === 0) {
                                    setMessageError(
                                      'All fields are required. Please make sure all fields are filled before submitting the form.'
                                    );
                                    setShowError(true);
                                    return Promise.reject();
                                  }
                                  return Promise.resolve();
                                },
                              },
                            ]}
                          >
                            <Select
                              mode="multiple"
                              size="large"
                              maxTagCount="responsive"
                              placeholder="Select buyers here"
                              // suffixIcon={' '}
                              className={`${
                                styles.select_user_create_multiple
                              } ${'dummyClassCreateFormForBorder'}`}
                              tagRender={tagRender}
                              style={{ width: '100%' }}
                              showSearch
                              optionFilterProp="children"
                              filterOption={(input, option: any) =>
                                (option?.label ?? '')
                                  .toLowerCase()
                                  .includes(input.toLowerCase())
                              }
                              filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '')
                                  .toLowerCase()
                                  .localeCompare(
                                    (optionB?.label ?? '').toLowerCase()
                                  )
                              }
                              options={possibleBuyers}
                            />
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                  )}
                  <>
                    <Row>
                      <Col lg={8} sm={24} xs={24} md={8}>
                        <div>
                          <Form.Item
                            className={`${styles.labelRequired} ${styles.smallInputs}`}
                            validateTrigger="onSubmit"
                            name="firstName"
                            label="First name"
                            rules={[
                              {
                                required: true,
                                validator: async (_, value) => {
                                  if (!value) {
                                    setMessageError(
                                      'All fields are required. Please make sure all fields are filled before submitting the form.'
                                    );
                                    setShowError(true);
                                    return Promise.reject();
                                  }
                                  return Promise.resolve();
                                },
                              },
                            ]}
                          >
                            <InputAsd
                              className={styles.inputLabel}
                              size="large"
                              type="text"
                              placeholder="Enter first name here"
                            />
                          </Form.Item>
                        </div>
                      </Col>
                      <Col lg={8} sm={24} xs={24} md={8}>
                        <div>
                          <Form.Item
                            className={`${styles.labelRequired} ${styles.smallInputs}`}
                            name="lastName"
                            validateTrigger="onSubmit"
                            label="Last name"
                            rules={[
                              {
                                required: true,
                                validator: async (_, value) => {
                                  if (!value) {
                                    setMessageError(
                                      'All fields are required. Please make sure all fields are filled before submitting the form.'
                                    );
                                    setShowError(true);
                                    return Promise.reject();
                                  }
                                  return Promise.resolve();
                                },
                              },
                            ]}
                          >
                            <InputAsd
                              className={styles.inputLabel}
                              size="large"
                              type="text"
                              placeholder="Enter last name here"
                            />
                          </Form.Item>
                        </div>
                      </Col>
                      <Col lg={8} sm={24} xs={24} md={8}>
                        <div>
                          <Form.Item
                            className={styles.labelRequired}
                            name="email"
                            label="Email"
                            validateTrigger="onSubmit"
                            rules={[
                              {
                                required: true,
                                type: 'email',
                                validator: async (_, value) => {
                                  /// ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/  optional permissive regex based on html5 standarts
                                  if (EMAIL_VALIDATION_REGEX.test(value)) {
                                    return Promise.resolve();
                                  }
                                  if (
                                    !form.getFieldValue('buyer') ||
                                    form.getFieldValue('buyer').length === 0 ||
                                    !form.getFieldValue('firstName') ||
                                    !form.getFieldValue('lastName')
                                  ) {
                                    return Promise.reject();
                                  }
                                  setMessageError(
                                    'Please enter a valid email address.'
                                  );
                                  setShowError(true);
                                  return Promise.reject();
                                },
                              },
                            ]}
                          >
                            <InputAsd
                              className={styles.inputLabel}
                              size="large"
                              placeholder="example@email.com"
                            />
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                  </>

                  <div style={{ marginTop: '24px' }}>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      loading={isLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
              <div style={{ height: '4px' }} />
            </Card>
          )}
        </div>
      </Content>
    </>
  );
};

export default FormUserUpdate;
