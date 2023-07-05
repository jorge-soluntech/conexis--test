/* eslint-disable array-callback-return */

import { Button, Card, Col, Form, Row, Select } from 'antd';
import React from 'react';

import AlertMessage from '@/components/common/alertComponent/AlertMessage';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useValidateFields from '@/components/hooks/useValidateFields';
import { BOOLEAN_SELECT_OPTIONS } from '@/consts/selects';
import locales from '@/locales/en/en.json';

import styles from './ApprovalInformation.module.scss';
import useApprovalInformationForm from './useApprovalInformation';

const {
  buyers: { thirdStep },
} = locales;

/**
 * ApprovalInformation component displays a form to input approval information.
 * This component uses useApprovalInformationForm hook to manage form data and validation.
 *
 * @returns the approval information form - step 3
 *
 * @remarks
 * If the selected value for the field “self serve?” is “Yes”,
 * the following fields should be non-editable (the default value is sent to the backend):
 * bypassSubmissionApproval, accessToApplicantTracker and requireContractApproval
 */

const ApprovalInformation = () => {
  const { emptyFieldValidator, ruleValidator } = useValidateFields();
  const {
    dataBuyer: { isSelfServed = false, requireContractApproval },
  } = useAppSelector((state) => state.buyers);
  const {
    form,
    onBack,
    errors,
    showError,
    setShowError,
    handleContinue,
    onFinishFailed,
    approversForContractsList,
    handleContractApproverChange,
    handleRequireContractApprovalChange,
  } = useApprovalInformationForm();

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
            name="approvalInformation"
            onFinish={handleContinue}
            onFinishFailed={onFinishFailed}
          >
            <div className={styles.form_subtitle_container}>
              <div className={styles.form_small_title}>
                Approval information
              </div>
            </div>
            <Row className={styles.row}>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item
                  help={false}
                  initialValue={false}
                  name="bypassJobApproval"
                  label="Jobs require approval?"
                  className={styles.label}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    options={BOOLEAN_SELECT_OPTIONS}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item
                  help={false}
                  initialValue={false}
                  name="bypassSubmissionApproval"
                  label="Submissions require approval?"
                  className={styles.label}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    disabled={isSelfServed ?? false}
                    options={BOOLEAN_SELECT_OPTIONS}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item
                  help={false}
                  initialValue={false}
                  className={styles.label}
                  name="accessToApplicantTracker"
                  label={thirdStep.accessToApplicantTracker}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    disabled={isSelfServed ?? false}
                    options={BOOLEAN_SELECT_OPTIONS}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item
                  help={false}
                  initialValue={false}
                  name="requireContractApproval"
                  label={thirdStep.requireContractApproval}
                  className={styles.label}
                >
                  <Select
                    size="large"
                    maxTagCount="responsive"
                    optionFilterProp="children"
                    disabled={isSelfServed ?? false}
                    options={BOOLEAN_SELECT_OPTIONS}
                    onChange={handleRequireContractApprovalChange}
                  />
                </Form.Item>
              </Col>
            </Row>
            {requireContractApproval && (
              <Row className={styles.row}>
                <Col xs={24}>
                  <Form.Item
                    help={false}
                    className={styles.label}
                    name="contractApproverId"
                    label={thirdStep.contractApproverId}
                    rules={[
                      ruleValidator(
                        true,
                        'string',
                        emptyFieldValidator,
                        thirdStep.contractApproverIdError
                      ),
                    ]}
                  >
                    <Select
                      size="large"
                      optionLabelProp="label"
                      maxTagCount="responsive"
                      optionFilterProp="children"
                      options={approversForContractsList}
                      onChange={handleContractApproverChange}
                      placeholder={thirdStep.contractApproverIdPlaceholder}
                    />
                  </Form.Item>
                </Col>
              </Row>
            )}

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

export default ApprovalInformation;
