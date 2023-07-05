import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input as InputAsd,
  InputNumber,
  Row,
} from 'antd';
import type { FC, MouseEventHandler } from 'react';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { INPUT_NUMBER_PARSER_REGEX } from '@/consts/forms_general';
import { SMALL_TABLET_BREAKPOINT } from '@/consts/login_ui';
import locales from '@/locales/en/en.json';
import phoneFormatter from '@/utils/phoneFormatter';

import styles from './businessUnitCreateForm.module.scss';
import type { IBusinessUnitCreateForm } from './IBusinessUnitCreateForm';

/**
 * A component that contains the form to create businessUnits.
 *
 * @param create - The boolean that defines if the businessUnit is being created or not
 * @param showError - The boolean of showing error for  form
 * @param messageError - The string of message error for  form
 * @param setShowError - The function for set showing errors of  form
 * @param onSubmit - The function of title form on submit
 * @param clearInformationFields - The function for clear information fields of  form
 * @param clearOwnerFields - The function for clear owner fields of  form
 * @param phoneError - The boolean of phone error of  form
 * @param emailValidationRules - The array of rules for email of  form
 * @param phoneValidationRules - The array of rules for phone of  form
 * @param numberValidationRules - The array of rules for number of  form
 * @param form - The form intance antd form
 * @param loading - The loading awaiting the response when submiting the form
 * @returns A component with the form to create businessUnits.
 */
const BusinessUnitForm: FC<IBusinessUnitCreateForm.IProps> = ({
  create,
  showError,
  messageError,
  setShowError,
  onSubmit,
  clearInformationFields,
  clearOwnerFields,
  phoneError,
  emailValidationRules,
  phoneValidationRules,
  numberValidationRules,
  form,
  loading,
}) => {
  const { width = 0 } = useWindowDimensions();
  const { TextArea } = InputAsd;

  const { businessUnits } = locales;
  const { formsCommon } = locales;

  const clearItemsButton = (
    clearFunction: MouseEventHandler<HTMLButtonElement>,
    size: 'small' | 'large'
  ) => {
    if (size === 'small') {
      return (
        <>
          <div className={styles.form_subtitle_container}>
            <button
              className={styles.form_clear_fields}
              type="button"
              onClick={clearFunction}
            >
              {formsCommon.clearFields}
            </button>
          </div>
        </>
      );
    }
    return (
      <button
        className={styles.form_clear_fields}
        type="button"
        onClick={clearFunction}
      >
        {formsCommon.clearFields}
      </button>
    );
  };

  return (
    <Card className={styles.form_create}>
      {showError && (
        <AlertMessage
          message={messageError}
          afterClose={() => setShowError(false)}
        />
      )}
      <div>
        <Form
          form={form}
          name="register"
          onFinish={onSubmit}
          scrollToFirstError
        >
          <div className={styles.form_subtitle_container}>
            <div className={styles.form_small_title}>
              {businessUnits.create.businessUnitInformation}
            </div>
            {width > SMALL_TABLET_BREAKPOINT &&
              clearItemsButton(clearInformationFields, 'large')}
          </div>
          {create && (
            <Row>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  className={`${styles.label} ${styles.smallInputs}`}
                  validateTrigger="onSubmit"
                  name="businessUnitNumber"
                  label={businessUnits.create.inputs.number}
                  rules={numberValidationRules}
                >
                  <InputAsd
                    className={styles.inputLabel}
                    size="large"
                    type="text"
                    placeholder={businessUnits.create.inputs.numberPlaceholder}
                  />
                </Form.Item>

                <div className={`${styles.info}`}>
                  {formsCommon.editFieldAlert}
                </div>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  className={`${styles.labelRequired}`}
                  name="location"
                  validateTrigger="onSubmit"
                  label={businessUnits.create.inputs.name}
                >
                  <InputAsd
                    className={styles.inputLabel}
                    size="large"
                    type="text"
                    placeholder={businessUnits.create.inputs.namePlaceholder}
                  />
                </Form.Item>
                <div className={`${styles.info}`}>
                  {formsCommon.editFieldAlert}
                </div>
              </Col>
            </Row>
          )}
          <Row style={{ marginTop: '-8px' }}>
            <Col lg={12} sm={24} xs={24} md={12}>
              <Form.Item
                className={`${styles.labelRequired} ${styles.smallInputs}`}
                name="address"
                label={businessUnits.create.inputs.address}
                validateTrigger="onSubmit"
              >
                <TextArea
                  autoSize={{ minRows: 1, maxRows: 6 }}
                  size="large"
                  placeholder={businessUnits.create.inputs.addressPlaceholder}
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24} md={12}>
              <Form.Item
                className={`${styles.labelRequired}`}
                name="primaryPhone"
                validateTrigger="onSubmit"
                label={businessUnits.create.inputs.phone}
                rules={phoneValidationRules}
              >
                <InputNumber
                  size="large"
                  className={`${styles.inputLabel} ${
                    phoneError ? styles.inputNumberError : ''
                  }`}
                  maxLength={14}
                  controls={false}
                  bordered={false}
                  formatter={phoneFormatter}
                  parser={(value: any) =>
                    value.replace(INPUT_NUMBER_PARSER_REGEX, '')
                  }
                  placeholder={businessUnits.create.inputs.phonePlaceholder}
                />
              </Form.Item>
            </Col>
          </Row>
          {width < SMALL_TABLET_BREAKPOINT &&
            clearItemsButton(clearInformationFields, 'small')}

          <Divider style={{ backgroundColor: '#DBDDE0' }} />

          <div className={styles.form_subtitle_container}>
            <div className={styles.form_small_title}>
              {businessUnits.create.businessUnitOwner}
            </div>
            {width > SMALL_TABLET_BREAKPOINT &&
              clearItemsButton(clearOwnerFields, 'large')}
          </div>
          <Row>
            <Col lg={8} sm={24} xs={24} md={8}>
              <Form.Item
                className={`${styles.label} ${styles.smallInputs}`}
                validateTrigger="onSubmit"
                name="firstName"
                label={businessUnits.create.inputs.firstName}
              >
                <InputAsd
                  className={styles.inputLabel}
                  size="large"
                  type="text"
                  placeholder={businessUnits.create.inputs.firstNamePlaceholder}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24} xs={24} md={8}>
              <Form.Item
                className={`${styles.labelRequired} ${styles.smallInputs}`}
                name="lastName"
                validateTrigger="onSubmit"
                label={businessUnits.create.inputs.lastName}
              >
                <InputAsd
                  className={styles.inputLabel}
                  size="large"
                  type="text"
                  placeholder={businessUnits.create.inputs.lastNamePlaceholder}
                />
              </Form.Item>
            </Col>
            <Col lg={8} sm={24} xs={24} md={8}>
              <Form.Item
                className={styles.labelRequired}
                name="primaryEmail"
                label={businessUnits.create.inputs.primaryEmail}
                validateTrigger="onSubmit"
                rules={emailValidationRules}
              >
                <InputAsd
                  className={styles.inputLabel}
                  size="large"
                  placeholder={
                    businessUnits.create.inputs.primaryEmailPlaceholder
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          {width < SMALL_TABLET_BREAKPOINT &&
            clearItemsButton(clearOwnerFields, 'small')}
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.submit}
            loading={loading}
          >
            {formsCommon.submit}
          </Button>
        </Form>
      </div>
    </Card>
  );
};

export default BusinessUnitForm;
