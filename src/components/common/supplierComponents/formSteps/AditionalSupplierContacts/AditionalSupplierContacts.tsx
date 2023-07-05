import { Button, Card, Form, Row } from 'antd';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { ClearFields } from '@/components/common/clearFieldsFromForm/ClearFields';
import { CustomInput } from '@/components/common/formInput/Input';
import { FORM_FIELDS } from '@/consts/suppliers';
import locales from '@/locales/en/en.json';

import styles from './AditionalSupplierContacts.module.scss';
import useAditionalSupplierContacts from './useAditionalSupplierContacts';

const {
  suppliers: { stepTwo },
} = locales;
const AditionalSupplierContacts = () => {
  const {
    handleContinue,
    form,
    onFinishFailed,
    errors,
    showError,
    setShowError,
    onBack,
  } = useAditionalSupplierContacts();

  return (
    <Card className={styles.form_create}>
      {showError && (
        <AlertMessage
          message={errors[0] as string}
          afterClose={() => setShowError(false)}
        />
      )}
      <Form
        form={form}
        scrollToFirstError
        onFinish={handleContinue}
        onFinishFailed={onFinishFailed}
      >
        <ClearFields title={stepTwo.title} form={form} />
        <Row className={styles.row}>
          <CustomInput
            label={stepTwo.supplierContactName2}
            placeholder={stepTwo.supplierContactNamePlaceholder}
            name={FORM_FIELDS.stepTwo.optionals.secondary_contact_name}
          />
          <CustomInput
            type="email"
            label={stepTwo.supplierContactEmail2}
            errorMsg={stepTwo.supplierContactEmail2Error}
            placeholder={stepTwo.supplierContactEmailPlaceholder}
            name={FORM_FIELDS.stepTwo.optionals.secondary_contact_email}
          />
        </Row>
        <Row className={styles.row}>
          <CustomInput
            label={stepTwo.supplierContactName3}
            placeholder={stepTwo.supplierContactNamePlaceholder}
            name={FORM_FIELDS.stepTwo.optionals.tertiary_contact_name}
          />
          <CustomInput
            type="email"
            label={stepTwo.supplierContactEmail3}
            errorMsg={stepTwo.supplierContactEmail3Error}
            placeholder={stepTwo.supplierContactEmailPlaceholder}
            name={FORM_FIELDS.stepTwo.optionals.tertiary_contact_email}
          />
        </Row>
        <Row className={styles.row}>
          <CustomInput
            label={stepTwo.AccountsReceivableContactLabel}
            placeholder={stepTwo.AccountsReceivableContactPlaceHolder}
            name={
              FORM_FIELDS.stepTwo.optionals.accounts_receivable_contact_name
            }
          />
          <CustomInput
            type="email"
            label={stepTwo.AccountsReceivableContactEmailLabel}
            errorMsg={stepTwo.AccountsReceivableContactEmailError}
            placeholder={stepTwo.AccountsReceivableContactEmailPlaceHolder}
            name={
              FORM_FIELDS.stepTwo.optionals.accounts_receivable_contact_email
            }
          />
        </Row>
        <div className={styles.container_button}>
          <Button
            size="large"
            type="default"
            htmlType="submit"
            onClick={onBack}
          >
            {stepTwo.backButton}
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            {stepTwo.continueButton}
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AditionalSupplierContacts;
