/* eslint-disable array-callback-return */

import { Alert, Button, Card, Col, Form, Input, Row } from 'antd';
import Image from 'next/image';

import styles from './TaxInformation.module.scss';
import useTaxInformationForm from './useTaxInformationForm';

/**
 * TaxInformation component displays a form to input tax information.
 * This component uses useTaxInformationForm hook to manage form data and validation.
 *
 * @returns the tax information form - step 2
 */

const TaxInformation = () => {
  const {
    form,
    onChange,
    showError,
    setShowError,
    messageError,
    clearOwnerFields,
    handleContinue,
    onFinishFailed,
    isWithinRange,
    onBack,
  } = useTaxInformationForm();

  return (
    <>
      <Card className={styles.form_create}>
        <div>
          {showError && (
            <Alert
              showIcon
              closable
              type="error"
              className="alert_red"
              message={messageError}
              style={{ marginBottom: '1rem' }}
              afterClose={() => setShowError(false)}
              icon={
                <Image
                  width={24}
                  height={24}
                  alt="logo_conexis"
                  src="/assets/icons/alert_error.svg"
                />
              }
            />
          )}
          <Form
            form={form}
            scrollToFirstError
            name="taxInformation"
            onFinish={handleContinue}
            onFinishFailed={onFinishFailed}
          >
            <div className={styles.form_subtitle_container}>
              <div className={styles.form_small_title}>Tax information</div>
              <button
                className={styles.form_clear_fields}
                type="button"
                onClick={clearOwnerFields}
              >
                Clear fields
              </button>
            </div>
            <Row>
              <Col lg={24} sm={24} xs={24} md={24}>
                <Form.Item
                  name="vatAmount"
                  label="VAT/Federal"
                  className={styles.label}
                  validateTrigger={'onSubmit'}
                  required={false}
                  rules={[
                    {
                      validator: async (_, value) => {
                        if (value && !isWithinRange(value)) {
                          return Promise.reject();
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="number"
                    placeholder="Enter VAT/federal here"
                    onChange={(e) => onChange(e.target.value, 'vatAmount')}
                  />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} xs={24} md={24}>
                <Form.Item
                  name="salesTaxAmount"
                  className={styles.label}
                  label="Provincial/State sales tax"
                  validateTrigger={'onSubmit'}
                  required={false}
                  rules={[
                    {
                      validator: async (_, value) => {
                        if (value && !isWithinRange(value)) {
                          return Promise.reject();
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="number"
                    placeholder="Enter provincial/state sales tax here"
                    onChange={(e) => onChange(e.target.value, 'salesTaxAmount')}
                  />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24} xs={24} md={24}>
                <Form.Item
                  name="otherTaxAmount"
                  label="Other"
                  className={styles.label}
                  validateTrigger={'onSubmit'}
                  required={false}
                  rules={[
                    {
                      validator: async (_, value) => {
                        if (value && !isWithinRange(value)) {
                          return Promise.reject();
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="number"
                    placeholder="Enter other here"
                    onChange={(e) => onChange(e.target.value, 'otherTaxAmount')}
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className={styles.continue_button}>
              <Button type="default" onClick={onBack}>
                Back
              </Button>
              <Button size="large" type="primary" htmlType="submit">
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default TaxInformation;
