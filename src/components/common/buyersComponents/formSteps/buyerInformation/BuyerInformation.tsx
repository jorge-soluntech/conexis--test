/* eslint-disable prefer-promise-reject-errors */
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import dayjs from 'dayjs';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { SMALL_TABLET_BREAKPOINT } from '@/consts/login_ui';
import { BOOLEAN_SELECT_OPTIONS } from '@/consts/selects';
import locales from '@/locales/en/en.json';
import phoneFormatter from '@/utils/phoneFormatter';

import WontBeAbleEdit from '../wontBeAbleEdit/WontBeAbleEdit';
import styles from './BuyerInformation.module.scss';
import useBuyerInformationForm from './useBuyerInformationForm';

const {
  buyers: { firstStep },
} = locales;

/**
 * BuyerInformation component renders a form for creating/editing buyer information.
 *
 * @remarks This component receives the formType props to determine whether the form is for creating or editing buyer information.
 * formType is used to disable the currency and workWeekDefinition fields since they are the only ones that are not editable
 *
 * @param  formType - The type of the form ('create' or 'edit')
 * @returns The BuyerInformation form
 */

const BuyerInformation = ({ formType = 'create' }: { formType?: string }) => {
  const { width = 0 } = useWindowDimensions();

  const {
    form,
    errors,
    phoneError,
    showError,
    setShowError,
    clearOwnerFields,
    handleContinue,
    onFinishFailed,
    optionsAccountOwner,
    validateField,
    isLoading,
    handleSelfServeChange,
  } = useBuyerInformationForm(formType);

  return (
    <>
      <Card className={styles.form_create}>
        <div>
          {showError && (
            <AlertMessage
              message={errors[0] as string}
              afterClose={() => setShowError(false)}
            />
          )}
          <Form
            form={form}
            scrollToFirstError
            name="buyerInformation"
            onFinish={handleContinue}
            onFinishFailed={onFinishFailed}
          >
            <div className={styles.form_subtitle_container}>
              <div className={styles.form_small_title}>Buyer information</div>
              <button
                className={styles.form_clear_fields}
                type="button"
                onClick={clearOwnerFields}
              >
                Clear fields
              </button>
            </div>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  className={styles.label}
                  name="clientCompanyName"
                  validateTrigger="onSubmit"
                  label="Client company name"
                  rules={[
                    {
                      required: true,
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'required',
                          'The client company name field is mandatory. Please make sure to fill it out before submitting the form.'
                        ),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter company name here"
                  />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  className={styles.label}
                  validateTrigger="onSubmit"
                  name="legalNameForInvoicing"
                  label="Legal name for invoicing"
                  rules={[
                    {
                      required: true,
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'required',
                          'The legal name for invoicing field is mandatory. Please make sure to fill it out before submitting the form.'
                        ),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter legal name here"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  className={styles.label}
                  name="streetAddressLine1"
                  label="Client mailing address"
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter mailing address here"
                  />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  name="country"
                  label="Country"
                  className={styles.label}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter country here"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item name="city" label="City" className={styles.label}>
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter city here"
                  />
                </Form.Item>
              </Col>
              <Col lg={6} sm={12} xs={12} md={6}>
                <Form.Item
                  name="provinceRegion"
                  label="State"
                  style={{
                    marginRight: width < SMALL_TABLET_BREAKPOINT ? '15px' : '0',
                  }}
                  className={styles.label}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter state here"
                  />
                </Form.Item>
              </Col>
              <Col lg={6} sm={12} xs={12} md={6}>
                <Form.Item
                  name="postalCode"
                  label="Zip code"
                  className={styles.label}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter zip code here"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24} sm={24} xs={24} md={24}>
                <Form.Item
                  name="primaryContactName"
                  label="Client contact name"
                  className={styles.label}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter client contact name here"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  name="primaryContactEmail"
                  label="Client contact email"
                  validateTrigger="onSubmit"
                  className={styles.label}
                  required={false}
                  rules={[
                    {
                      type: 'email',
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'email',
                          'Client contact email should be a valid email address.'
                        ),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter client contact email here"
                  />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  validateTrigger="onSubmit"
                  name="primaryContactPhone"
                  label="Client contact phone"
                  className={styles.label}
                  required={false}
                  rules={[
                    {
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'phone',
                          'Client contact phone should be a valid phone number.'
                        ),
                    },
                  ]}
                >
                  <InputNumber
                    maxLength={14}
                    controls={false}
                    bordered={false}
                    formatter={phoneFormatter}
                    className={`${phoneError ? 'input_number_error' : ''}`}
                    placeholder="Enter client contact phone here"
                    parser={(value: any) => value.replace(/\D/g, '')}
                    onChange={(value) =>
                      form.setFieldValue(
                        'primaryContactPhone',
                        value?.toString() ?? null
                      )
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  name="accountsPayableContactName"
                  label="Accounts payable contact name"
                  className={styles.label}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter accounts payable contact name here"
                  />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  name="accountsPayableContactEmail"
                  label="Accounts payable contact email"
                  validateTrigger="onSubmit"
                  className={styles.label}
                  required={false}
                  rules={[
                    {
                      type: 'email',
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'email',
                          'Accounts payable contact email should be a valid email address.'
                        ),
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="text"
                    placeholder="Enter accounts payable contact email here"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  name="accountOwnerId"
                  label="Account owner"
                  className={styles.label}
                >
                  <Select
                    className={`${
                      styles.select_user_create
                    } ${'dummyClassCreateFormForBorder'}`}
                    size="large"
                    placeholder="Select account owner here"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    options={optionsAccountOwner}
                  />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  name="workWeekDefinition"
                  label="Work week definition"
                  className={styles.label}
                  rules={[
                    {
                      required: true,
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'required',
                          'The work week definition field is mandatory. Please make sure to fill it out before submitting the form.'
                        ),
                    },
                  ]}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    disabled={formType !== 'create'}
                    placeholder="Select work week definition here"
                    className={`${
                      styles.select_user_create
                    } ${'dummyClassCreateFormForBorder'}`}
                    options={[
                      {
                        label: 'M-S',
                        value: 'M-S',
                      },
                      {
                        label: 'S-S',
                        value: 'S-S',
                      },
                    ]}
                  />
                </Form.Item>
                {formType === 'create' && <WontBeAbleEdit />}
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  name="currency"
                  label="Currency"
                  className={styles.label}
                  rules={[
                    {
                      required: true,
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'required',
                          'The currency field is mandatory. Please make sure to fill it out before submitting the form.'
                        ),
                    },
                  ]}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    disabled={formType !== 'create'}
                    placeholder="Select currency here"
                    className={`${
                      styles.select_user_create
                    } ${'dummyClassCreateFormForBorder'}`}
                    options={[
                      {
                        label: 'CAD',
                        value: 'CAD',
                      },
                      {
                        label: 'USD',
                        value: 'USD',
                      },
                      {
                        label: 'AUD',
                        value: 'AUD',
                      },
                    ]}
                  />
                </Form.Item>
                {formType === 'create' && <WontBeAbleEdit />}
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  name="paymentTerms"
                  label="Payment terms"
                  className={styles.label}
                >
                  <Select
                    className={`${
                      styles.select_user_create
                    } ${'dummyClassCreateFormForBorder'}`}
                    size="large"
                    placeholder="Select payment terms here"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    options={[
                      {
                        label: 'Net 7',
                        value: 'Net 7',
                      },
                      {
                        label: 'Net 15',
                        value: 'Net 15',
                      },
                      {
                        label: 'Net 30',
                        value: 'Net 30',
                      },
                      {
                        label: 'Net 45',
                        value: 'Net 45',
                      },
                      {
                        label: 'Net 60',
                        value: 'Net 60',
                      },
                      {
                        label: 'Free Form',
                        value: 'Free Form',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  className={styles.label}
                  name="contractExpiryDate"
                  label="Contract expiry date"
                  rules={[
                    {
                      required: true,
                      validator: async (_, value) =>
                        validateField(
                          value,
                          'required',
                          'The contract expiry date field is mandatory. Please make sure to fill it out before submitting the form.'
                        ),
                    },
                  ]}
                >
                  <DatePicker
                    placeholder={dayjs().format('DD MMM YYYY')}
                    format={(value) => `${dayjs(value).format('DD MMM YYYY')}`}
                  />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  help={false}
                  name="isSelfServed"
                  label={firstStep.SelfServe}
                  className={styles.label}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    disabled={formType !== 'create'}
                    placeholder={firstStep.SelfServePlaceholder}
                    className={styles.select_user_create}
                    options={BOOLEAN_SELECT_OPTIONS}
                    onChange={handleSelfServeChange}
                  />
                </Form.Item>
                {formType === 'create' && <WontBeAbleEdit />}
              </Col>
            </Row>

            <div className={styles.continue_button}>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default BuyerInformation;
