import { Button, Card, Form, Row } from 'antd';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { ClearFields } from '@/components/common/clearFieldsFromForm/ClearFields';
import { CustomInput } from '@/components/common/formInput/Input';
import {
  DIVERSITY_CERTIFICATIONS,
  FORM_FIELDS,
  GEOGRAPHIC_COVERAGE,
  NON_RESIDENT_SUPPLIER,
  SUPPLIER_STATUS,
  WORK_CATEGORIES_COVERED,
} from '@/consts/suppliers';
import locales from '@/locales/en/en.json';

import type { ActionsProps } from '../../suppliersForm/SupplierForm';
import styles from './SupplierInformation.module.scss';
import useSupplierInformation from './useSupplierInformation';

/**
 * SupplierInformation component renders a form for creating/editing supplier information.
 *
 * @remarks This component receives the formType props to determine whether the form is for creating or editing buyer information.
 * formType is used to disable the currency and workWeekDefinition fields since they are the only ones that are not editable
 *
 * @param  formType - The type of the form ('create' or 'edit')
 * @returns The SupplierInformation form
 */

const SupplierInformation = ({ action }: ActionsProps) => {
  const { suppliers } = locales;
  const { stepOne } = suppliers;

  const {
    form,
    errors,
    showError,
    setShowError,
    handleContinue,
    onFinishFailed,
  } = useSupplierInformation({ action });

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
            name="supplierInformation"
            onFinish={handleContinue}
            onFinishFailed={onFinishFailed}
          >
            <ClearFields form={form} title={stepOne.title} />
            <Row className={styles.row}>
              <CustomInput
                required
                label={stepOne.SupplierCompanyName}
                errorMsg={stepOne.SupplierCompanyNameError}
                placeholder={stepOne.SupplierCompanyNamePlaceholder}
                name={FORM_FIELDS.stepOne.mandatories.supplier_company_name}
              />
              <CustomInput
                required
                label={stepOne.legalNameForInvoicing}
                errorMsg={stepOne.legalNameForInvoicingError}
                placeholder={stepOne.legalNameForInvoicingPlaceholder}
                name={FORM_FIELDS.stepOne.mandatories.legal_name_for_invoicing}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                label={stepOne.supplierContactName}
                placeholder={stepOne.supplierContactNamePlaceholder}
                name={FORM_FIELDS.stepOne.optionals.primary_contact_name}
              />
              <CustomInput
                label={stepOne.supplierCode}
                placeholder={stepOne.supplierCodePlaceholder}
                name={FORM_FIELDS.stepOne.optionals.supplier_code}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                type="email"
                label={stepOne.supplierContactEmail}
                errorMsg={stepOne.supplierContactEmailError}
                placeholder={stepOne.supplierContactEmailPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.primary_contact_email}
              />
              <CustomInput
                label={stepOne.supplierMailingAddress}
                placeholder={stepOne.supplierMailingAddressPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.street_address_line1}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                type="phone"
                label={stepOne.supplierContactPhone}
                errorMsg={stepOne.supplierContactPhoneError}
                placeholder={stepOne.supplierContactPhonePlaceholder}
                name={FORM_FIELDS.stepOne.optionals.primary_contact_phone}
              />
              <CustomInput
                type="date"
                label={stepOne.contractExpirationDate}
                placeholder={stepOne.contractExpirationDatePlaceholder}
                name={FORM_FIELDS.stepOne.optionals.agreement_expiry_date}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                label={stepOne.country}
                placeholder={stepOne.countryPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.country}
              />
              <CustomInput
                label={stepOne.state}
                placeholder={stepOne.statePlaceholder}
                name={FORM_FIELDS.stepOne.optionals.province_region}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                label={stepOne.city}
                placeholder={stepOne.cityPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.city}
              />
              <CustomInput
                label={stepOne.zipCode}
                placeholder={stepOne.zipCodePlaceholder}
                name={FORM_FIELDS.stepOne.optionals.postal_code}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                label={stepOne.taxIdNumber}
                placeholder={stepOne.taxIdNumberPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.tax_id}
              />
              <CustomInput
                type="select"
                label={stepOne.geographicCoverage}
                placeholder={stepOne.geographicCoveragePlaceholder}
                errorMsg={stepOne.workCategoriesCoveredError}
                name={FORM_FIELDS.stepOne.optionals.geographic_coverage}
                options={GEOGRAPHIC_COVERAGE}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                type="select"
                label={stepOne.workCategoriesCovered}
                placeholder={stepOne.geographicCoveragePlaceholder}
                errorMsg={stepOne.workCategoriesCoveredError}
                name={FORM_FIELDS.stepOne.mandatories.work_categories_covered}
                options={WORK_CATEGORIES_COVERED}
                required
              />
              <CustomInput
                label={stepOne.dunBradstreetNumber}
                placeholder={stepOne.dunBradstreetNumberPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.dunn_and_bradstreet_number}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                type="select"
                label={stepOne.supplierStatus}
                placeholder={stepOne.supplierStatusPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.supplier_status}
                options={SUPPLIER_STATUS}
              />
              <CustomInput
                type="select"
                label={stepOne.nonResidentSupplier}
                placeholder={stepOne.nonResidentSupplierPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.is_non_resident_supplier}
                options={NON_RESIDENT_SUPPLIER}
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                type="select"
                label={stepOne.diversityCertifications}
                placeholder={stepOne.diversityCertificationsPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.diversity_certifications}
                options={DIVERSITY_CERTIFICATIONS}
                numberOfColumns={2}
                aditionalInfo={
                  <div className={styles.info_text}>
                    {stepOne.diversityCertificationsInfo}
                  </div>
                }
              />
            </Row>
            <Row className={styles.row}>
              <CustomInput
                type="textArea"
                label={stepOne.comments}
                placeholder={stepOne.commentsPlaceholder}
                name={FORM_FIELDS.stepOne.optionals.comments}
                options={NON_RESIDENT_SUPPLIER}
                numberOfColumns={2}
              />
            </Row>
            <div className={styles.continue_button}>
              <Button size="large" type="primary" htmlType="submit">
                {stepOne.continueButton}
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default SupplierInformation;
