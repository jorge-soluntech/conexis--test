import { Button, Checkbox, Col, Form, Input, Row, TimePicker } from 'antd';
import type { RuleObject } from 'antd/es/form';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext } from 'react';

import { AuthContext } from '@/application/authContext';
import { createWorkShift } from '@/application/workShiftsSlice/workShiftsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useValidateFields from '@/components/hooks/useValidateFields';
import { urls, workShiftsUI } from '@/consts';
import locales from '@/locales/en/en.json';
import sorterWeekDays from '@/utils/sorterWeekDays';

import ErrorAlert from '../../alertComponent/AlertMessage';
import styles from './formWorkShiftsCreate.module.scss';

/**
 * Returns the FormWorkShiftsCreate component
 *
 * @returns The FormWorkShiftsCreate component
 */

const FormWorkShiftsCreate: FC = () => {
  const { valuesFormCreate } = useAppSelector((state) => state.workShifts);
  const { idTenant, dataUser } = useContext(AuthContext);
  const {
    validatorEmptyAllFields,
    messageError,
    showError,
    activateErrorAlert,
  } = useValidateFields();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [form] = Form.useForm();

  const { workShifts } = locales;

  const [workShiftDescription, startTime, endTime] =
    workShiftsUI.FORM_FIELDS.mandatories;
  const [workDays] = workShiftsUI.FORM_FIELDS.optionals;

  const configItem = (textError: string) => ({
    className: styles.label,
    rules: [
      {
        type: 'object' as const,
        required: true,
        validator: (_: RuleObject, value: string) => {
          const emptyAllMandatories = Object.values(
            form.getFieldsValue(workShiftsUI.FORM_FIELDS.mandatories)
          );
          return validatorEmptyAllFields(value, textError, emptyAllMandatories);
        },
      },
    ],
  });

  const onFinish = async (values: any) => {
    const response = await dispatch(
      createWorkShift({
        router,
        body: {
          ...values,
          start_time: values.start_time.format('hh:mm a'),
          end_time: values.end_time.format('hh:mm a'),
          word_days: sorterWeekDays(values.work_days),
          buyer_id: dataUser.logged_buyer,
          id_tenant: idTenant,
        },
      })
    );

    if (response.payload) {
      router.push(urls.URL_SUCCESS_CREATE_WSHIFTS, undefined, {
        shallow: true,
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
        <Row className={styles.row}>
          <Col span={24}>
            <Form.Item
              label={workShifts.create.labelName}
              name={workShiftDescription}
              {...configItem(workShifts.create.textErrorName)}
            >
              <Input
                placeholder={workShifts.create.placeholderName}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row className={styles.row} gutter={[24, 10]}>
          <Col xs={24} lg={12}>
            <Form.Item
              label={workShifts.create.labelStartTime}
              name={startTime}
              {...configItem(workShifts.create.textErrorDate)}
            >
              <TimePicker format="hh:mm a" use12Hours />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label={workShifts.create.labelEndTime}
              name={endTime}
              {...configItem(workShifts.create.textErrorDate)}
            >
              <TimePicker format="hh:mm a" use12Hours />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label={workShifts.create.labelDays}
          name={workDays}
          className={styles.label}
        >
          <Checkbox.Group>
            <Row className={styles.row} gutter={[24, 16]}>
              {workShifts.create.days.map((day, index) => (
                <Col className={styles.col_item} key={index}>
                  <Checkbox value={day}>{day}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.submit}>
            {workShifts.create.titleButtonSubmit}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormWorkShiftsCreate;
