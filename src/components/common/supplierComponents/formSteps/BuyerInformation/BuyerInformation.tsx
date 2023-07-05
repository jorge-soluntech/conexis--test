import { Button, Card, Form } from 'antd';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { ClearFields } from '@/components/common/clearFieldsFromForm/ClearFields';
import { CustomInput } from '@/components/common/formInput/Input';
import { FORM_FIELDS } from '@/consts/suppliers';
import locales from '@/locales/en/en.json';

import styles from './BuyerInformation.module.scss';
import useBuyerInformation from './useBuyerInformation';

const BuyerInformation = () => {
  const {
    suppliers: { stepThree },
  } = locales;

  const {
    handleContinue,
    form,
    onBack,
    permissionedBuyers,
    errors,
    showError,
    setShowError,
    onFinishFailed,
  } = useBuyerInformation();

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
        <ClearFields title={stepThree.title} form={form} />
        <CustomInput
          type="multiSelect"
          label={stepThree.AssignedBuyersLabel}
          errorMsg={stepThree.AssignedBuyersError}
          placeholder={stepThree.AssignedBuyersPlaceHolder}
          name={FORM_FIELDS.stepThree.mandatories.associated_buyers}
          numberOfColumns={2}
          options={permissionedBuyers}
        />
        <div className={styles.container_button}>
          <Button
            size="large"
            type="default"
            htmlType="submit"
            onClick={onBack}
          >
            {stepThree.backButton}
          </Button>
          <Button size="large" type="primary" htmlType="submit">
            {stepThree.continueButton}
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default BuyerInformation;
