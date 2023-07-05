import { Button, Col, Form, Input, Row } from 'antd';
import type { RuleObject } from 'antd/es/form';
import { useRouter } from 'next/router';
import type { RuleType } from 'rc-field-form/lib/interface';
import type { FC } from 'react';
import { useContext, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  createCandidate,
  setModalWarningEmail,
  setPage,
  setValuesCandidate,
} from '@/application/candidatesSlice/candidatesSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useValidateFields from '@/components/hooks/useValidateFields';
import { urls, workers } from '@/consts';
import locales from '@/locales/en/en.json';
import isValidEmail from '@/utils/isValidEmail';

import ErrorAlert from '../../alertComponent/AlertMessage';
import SelectWorkerStatus from '../selectWorkerStatus/SelectWorkerStatus';
import styles from './formCandidatesCreate.module.scss';

type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

/**
 * Returns the FormCandidatesCreate component
 *
 * @returns The FormCandidatesCreate component
 */

const FormCandidatesCreate: FC = () => {
  const { valuesFormCreate, loading } = useAppSelector(
    (state) => state.candidates
  );
  const { idTenant } = useContext(AuthContext);
  const {
    validatorEmptyAllFields,
    messageError,
    showError,
    activateErrorAlert,
    checkEmptyEmailField,
  } = useValidateFields();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [form] = Form.useForm();
  const [statusEmail, setStatusEmail] = useState<{
    validateStatus?: ValidateStatus;
  }>({ validateStatus: '' });

  const { candidates } = locales;

  const [firstName, lastName, workerStatus] = workers.FORM_FIELDS.mandatories;
  const [email] = workers.FORM_FIELDS.optionals;

  const emailValidationRules = [
    {
      type: 'email' as RuleType | undefined,
      validator: async (_: RuleObject, value: string) => {
        if (value) {
          if (isValidEmail(value)) {
            setStatusEmail({ validateStatus: 'error' });
            activateErrorAlert(true, candidates.create.textErrorValidEmail);
            return Promise.reject();
          }
          return Promise.resolve();
        }
        return Promise.resolve();
      },
    },
  ];

  const configItem = (textError: string) => ({
    className: styles.label,
    rules: [
      {
        type: 'object' as const,
        required: true,
        validator: (_: RuleObject, value: string) => {
          const emptyAllMandatories = Object.values(
            form.getFieldsValue(workers.FORM_FIELDS.mandatories)
          );
          return validatorEmptyAllFields(value, textError, emptyAllMandatories);
        },
      },
    ],
  });

  const onStatusChange = (value: string) =>
    form.setFieldsValue({ worker_status: value });

  const onFinish = async (values: any) => {
    setStatusEmail({ validateStatus: '' });

    const valuesFormToSend = {
      ...values,
      id_tenant: idTenant,
      email: checkEmptyEmailField(values.email),
    };

    if (!valuesFormToSend.email) {
      dispatch(setValuesCandidate(valuesFormToSend));
      dispatch(setModalWarningEmail(true));
      activateErrorAlert(false);
      return;
    }

    const response = await dispatch(
      createCandidate({
        router,
        body: valuesFormToSend,
      })
    );

    if (response.payload.message === 'User already exists') {
      activateErrorAlert(true, candidates.create.textErrorUsedEmail);
      return;
    }

    if (
      response.payload.message?.[0] === candidates.create.textErrorValidEmail
    ) {
      setStatusEmail({ validateStatus: 'error' });
      activateErrorAlert(true, candidates.create.textErrorValidEmail);
      return;
    }

    if (
      response.payload.message ===
      candidates.create.textErrorAlreadyInTalentPool
    ) {
      setStatusEmail({ validateStatus: 'error' });
      activateErrorAlert(true, candidates.create.textErrorAlreadyInTalentPool);
      return;
    }

    if (response.payload.errors?.[0] === 'error sending email') {
      router.push(urls.URL_SUCCESS_NO_SENT_EMAIL_CANDIDATE);
      return;
    }

    if (
      response.payload.message === candidates.create.titleSuccessAddedTalentPool
    ) {
      router.push({
        pathname: urls.URL_CREATE_CANDIDATE,
        query: { success: workers.ROUTES_SUCCESS.emailSent, isTalent: true },
      });
      return;
    }

    if (response.payload.statusCode === 201) {
      dispatch(setPage(1));
      router.push({
        pathname: urls.URL_CREATE_CANDIDATE,
        query: { success: workers.ROUTES_SUCCESS.emailSent },
      });
    }
  };

  return (
    <>
      {showError && (
        <ErrorAlert
          afterClose={() => activateErrorAlert(false)}
          message={messageError}
        />
      )}

      <Form
        name="basic"
        initialValues={valuesFormCreate}
        onFinish={onFinish}
        layout="vertical"
        validateTrigger="onSubmit"
        form={form}
      >
        <Row className={styles.row} gutter={[24, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              label={candidates.create.labelName}
              name={firstName}
              {...configItem(candidates.create.textErrorName)}
            >
              <Input
                placeholder={candidates.create.placeholderInputNames}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={candidates.create.labelLastName}
              name={lastName}
              {...configItem(candidates.create.textErrorLastName)}
            >
              <Input
                placeholder={candidates.create.placeholderInputNames}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col span={24}>
            <Form.Item
              label={candidates.create.labelEmail}
              name={email}
              className={styles.label}
              validateStatus={statusEmail.validateStatus}
              rules={emailValidationRules}
            >
              <Input
                placeholder={candidates.create.placeholderEmail}
                size="large"
              />
            </Form.Item>
            <p>{candidates.create.textNoteEmail}</p>
          </Col>
        </Row>

        <Row className={styles.row}>
          <Col span={24}>
            <Form.Item
              label={candidates.create.labelStatus}
              name={workerStatus}
              {...configItem(candidates.create.textErrorWorkerStatus)}
            >
              <SelectWorkerStatus
                onStatusChange={onStatusChange}
                isSelectCreate={true}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit}
            loading={loading}
          >
            {candidates.create.titleButtonSubmit}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormCandidatesCreate;
