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
  Typography,
} from 'antd';
import type { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { GLCodesServices } from '@/infrastructure/services/GLCodesServices';
import locales from '@/locales/en/en.json';

import styles from './formGlCodesCreate.module.scss';
import type { IFormGlCodeCreate } from './IFormGlCodesCreate';

const { Title } = Typography;

const { Content } = Layout;

/**
 * A form that is used to create a gl code.
 *
 * @param titleForm - The string of title form
 * @returns The form of gl codes
 */

const FormGlCodesCreate: FC<IFormGlCodeCreate.IProps> = ({ titleForm }) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [showError, setShowError] = useState<boolean>(false);
  const [successResult, setSuccessResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { dataUser } = useContext(AuthContext);
  const { glCodes } = locales;

  const [messageError, setMessageError] = useState<string>(
    glCodes.create.defaultErrorMessage
  );

  const glCodesServices = new GLCodesServices(router);

  const onSubmit = async (data: IFormGlCodeCreate.IFormValues) => {
    setLoading(true);
    const dataForm = {
      id_tenant: undefined,
      gl_code: data.gl_code,
      description: data.description,
    };

    await glCodesServices
      .createGlCode(dataForm)
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const gridStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    alignContent: 'center',
    boxShadow: 'none',
    padding: '10px',
  };

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
                  router.push('/home/gl-codes', undefined, {
                    shallow: true,
                  });
                }}
              >
                <LeftOutlined />
                &nbsp; GL codes
              </div>
            </Col>
          </Row>

          <div className={styles.form_subtitle}>
            {dataUser ? dataUser.logged_buyer_client_company_name : ''}
          </div>
          <Title
            style={{ marginBottom: '1.2rem', marginTop: '0rem', fontSize: 32 }}
            level={2}
          >
            {titleForm}
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
                  Your GL code has been
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
                    router.push('/home/gl-codes', undefined, {
                      shallow: true,
                    });
                  }}
                >
                  {glCodes.create.buttonBack}
                </Button>
                <div style={{ height: '50px' }} />
              </Card.Grid>
            </Card>
          ) : (
            <Card style={{ paddingTop: '0rem' }} className={styles.form_create}>
              <div>
                {showError && (
                  <Alert
                    style={{ marginBottom: '1rem' }}
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
                    <Col
                      lg={24}
                      sm={24}
                      xs={24}
                      style={{ paddingBottom: '10px' }}
                    >
                      <div>
                        <Form.Item
                          className={`${styles.labelRequired}`}
                          name="gl_code"
                          validateTrigger="onSubmit"
                          label="GL code"
                          rules={[
                            {
                              required: true,
                              validator: async (_, value) => {
                                if (
                                  !form.getFieldValue('gl_code') &&
                                  !form.getFieldValue('description')
                                ) {
                                  setMessageError(
                                    'The fields are mandatory. Please make sure to fill it out before submitting the form.'
                                  );
                                  setShowError(true);
                                  return Promise.reject();
                                }
                                if (!value) {
                                  setMessageError(
                                    'The GL code field is mandatory. Please make sure to fill it out before submitting the form.'
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
                            size="large"
                            type="text"
                            placeholder="Enter GL code here"
                          />
                        </Form.Item>
                        <div style={{ padding: 0, lineHeight: '16px' }}>
                          <div className={`${styles.infoIcon}`}>.</div>
                          <div className={`${styles.infoText}`}>
                            You won’t be able to edit this field later on.
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={24} sm={24} xs={24}>
                      <div>
                        <Form.Item
                          className={`${styles.labelRequired}`}
                          name="description"
                          validateTrigger="onSubmit"
                          label="Description"
                          rules={[
                            {
                              required: true,
                              validator: async (_, value) => {
                                if (
                                  !form.getFieldValue('gl_code') &&
                                  !form.getFieldValue('description')
                                ) {
                                  setMessageError(
                                    'The fields are mandatory. Please make sure to fill it out before submitting the form.'
                                  );
                                  setShowError(true);
                                  return Promise.reject();
                                }
                                if (!value) {
                                  setMessageError(
                                    'The description field is mandatory. Please make sure to fill it out before submitting the form.'
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
                            size="large"
                            type="text"
                            placeholder="Enter description here"
                          />
                        </Form.Item>
                        <div style={{ padding: 0, lineHeight: '16px' }}>
                          <div className={`${styles.infoIcon}`}>.</div>
                          <div className={`${styles.infoText}`}>
                            You won’t be able to edit this field later on.
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div style={{ marginTop: '24px' }}>
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      loading={loading}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Card>
          )}
        </div>
      </Content>
    </>
  );
};

export default FormGlCodesCreate;
