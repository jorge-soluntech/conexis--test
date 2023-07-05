/* eslint-disable array-callback-return */

import { LeftOutlined } from '@ant-design/icons';
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input as InputAsd,
  Layout,
  Row,
  Select,
  Typography,
} from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { EMAIL_VALIDATION_REGEX } from '@/consts/forms_general';

import styles from './formUser.module.scss';
import type { IFormUser } from './IFormUser';
import useFormUser from './useFormUser';

const { Title } = Typography;

const { Content } = Layout;

/**
 * Returns the Form component
 *
 * @param titleForm - The string of title form
 * @param showError - The boolean of showing error for  form
 * @param messageError - The string of message error for  form
 * @param setShowError - The function for set showing errors of  form
 * @param onSubmit - The function of title form on submit
 * @param setMessageError - The function for set message errors of  form
 * @param onSelectRole - The function when select a role of  form
 * @param roles - The string array of roles for  form
 * @param showSupplier - The boolean for showing supplier section of  form
 * @param onSelectSupplier - The function when select suppliers of  form
 * @param possibleSupplier - The string array of suppliers of  form
 * @param showBuyer - The boolean for showing buyer section of  form
 * @param multipleBuyer - The boolean for titles related to buyers of the form
 * @param tagRender - The JSX.Element of tag to render in the form
 * @param onSelectBuyer - The function to execute when select a buyer of the form
 * @param possibleBuyers - The string array of buyers for the form
 * @param showUserData - The boolean to show user data section of the form
 * @returns The form of user module
 */

const FormUser: FC<IFormUser.IProps> = ({
  titleForm,
  showError,
  messageError,
  setShowError,
  onSubmit,
  setMessageError,
  onSelectRole,
  roles,
  showSupplier,
  onSelectSupplier,
  possibleSupplier,
  showBuyer,
  multipleBuyer,
  tagRender,
  onSelectBuyer,
  possibleBuyers,
  showUserData,
  isLoading,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();
  useFormUser(form, onSelectBuyer, possibleBuyers);
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
            {titleForm}
          </Title>
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
                          onSelect={onSelectRole}
                          style={{ width: '100%', borderRight: 'white' }}
                          size="large"
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
                {showSupplier && (
                  <Row>
                    <Col span={24}>
                      <div>
                        <Form.Item
                          className={styles.labelRequired}
                          name="supplier"
                          validateTrigger="onSubmit"
                          label="Select supplier"
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
                            placeholder="Please input your supplier"
                            suffixIcon={' '}
                            maxTagCount="responsive"
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
                            onSelect={onSelectSupplier}
                            options={possibleSupplier}
                          />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                )}
                {showBuyer && (
                  <Row>
                    <Col span={24}>
                      <div>
                        <Form.Item
                          className={styles.labelRequired}
                          name="buyer"
                          validateTrigger="onSubmit"
                          label={
                            multipleBuyer ? 'Select buyers' : 'Select buyer'
                          }
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
                          {multipleBuyer === true ? (
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
                                ((optionA?.label as string) ?? '')
                                  .toLowerCase()
                                  .localeCompare(
                                    (
                                      (optionB?.label as string) ?? ''
                                    ).toLowerCase()
                                  )
                              }
                              onSelect={onSelectBuyer}
                              options={possibleBuyers}
                            />
                          ) : (
                            <Select
                              className={`${
                                styles.select_user_create
                              } ${'dummyClassCreateFormForBorder'}`}
                              style={{ width: '100%', borderRight: 'white' }}
                              size="large"
                              placeholder="Select buyer here"
                              suffixIcon={' '}
                              maxTagCount="responsive"
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
                              onSelect={onSelectBuyer}
                              options={possibleBuyers}
                            />
                          )}
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                )}

                {showUserData && (
                  <>
                    <Row gutter={[16, 0]}>
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
                )}

                <div style={{ marginTop: '24px' }}>
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    disabled={!showUserData}
                    loading={isLoading}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
            <div style={{ height: '4px' }} />
          </Card>
        </div>
      </Content>
    </>
  );
};

export default FormUser;
