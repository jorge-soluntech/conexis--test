import type { DatePickerProps } from 'antd';
import { Divider, Form, Typography } from 'antd';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  createNewJob,
  resetValuesFormPostJob,
} from '@/application/postJobsSlice/postJobsSlice';
import useFileUpload from '@/components/hooks/useAttachments/useFileUpload';
import useValidateFields from '@/components/hooks/useValidateFields';
import { postJobsUI, urls } from '@/consts';
import { customFormatDate } from '@/consts/forms_general';
import locales from '@/locales/en/en.json';
import scrollToRef from '@/utils/scrollToRef';

import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';
import AlertMessage from '../../alertComponent/AlertMessage';
import ActionsPostJob from './actionsPostJob/ActionsPostJob';
import AddressRowFields from './addressRowFields/AddressRowFields';
import BUnitsGLCodesFields from './bUnitsGLCodesFields/BUnitsGLCodesFields';
import CityZipFields from './cityZipFields/CityZipFields';
import styles from './contentFormPostJob.module.scss';
import CostCenterSuppliersFields from './costCenterSuppliersFields/CostCenterSuppliersFields';
import CountryStateFields from './countryStateFields/CountryStateFields';
import DatesRowFields from './datesRowFields/DatesRowFields';
import FieldApprovers from './fieldApprovers/FieldApprovers';
import FieldHiringManager from './fieldHiringManager/FieldHiringManager';
import JobAttachment from './jobAttachment/JobAttachment';
import SalaryRangeFields from './salaryRangeFields/SalaryRangeFields';
import JobTitleSkillFields from './secondRowFields/SecondRowFields';
import SummaryCommentsFields from './summaryCommentsFields/SummaryCommentsFields';
import NumberPositionsTypeFields from './thirdRowFields/ThirdRowFields';
import WorkShiftsRowFields from './workShiftsRowFields/WorkShiftsRowFields';

const { Title } = Typography;

const fieldsMandatories = postJobsUI.FORM_FIELDS.mandatory;
const fieldsOptionals = postJobsUI.FORM_FIELDS.optionals;

const customFormat: DatePickerProps['format'] = (value) =>
  value?.format(customFormatDate);

const {
  postNewJob: { formCreate },
} = locales;

const ContentFormPostJob = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    valuesFormPostJob,
    selectedWorkShifts,
    isPermanentJob,
    valueSubmitStatus,
  } = useAppSelector((state) => state.postJobs);

  const refContainer = useRef<HTMLDivElement>(null);
  const {
    messageError,
    showError,
    activateErrorAlert,
    validatorEmptyAllFields,
  } = useValidateFields();

  const { dataUser } = useContext(AuthContext);
  const { updateFileAdded } = useFileUpload();

  const onFinishFailed = () => scrollToRef(refContainer);

  const onFinish = async (values: any) => {
    const fileUploaded = form.getFieldValue('job_description_attachment');
    const supplierList = form.getFieldValue('supplier_distribution_list_ids');
    const costCenterList = form.getFieldValue('cost_centers_ids');
    const workShiftsList = selectedWorkShifts.filter(
      (workKey: string | undefined) => workKey
    );

    if (fileUploaded) {
      await updateFileAdded(fileUploaded);
    }

    const valuesFormToSend = {
      ...values,
      planned_start_date: customFormat(values.planned_start_date),
      planned_end_date: customFormat(values.planned_end_date),
      work_shifts_ids: workShiftsList?.length > 0 ? workShiftsList : null,
      job_description_attachment: fileUploaded ? fileUploaded.path : null,
      save_status: valueSubmitStatus,
      supplier_distribution_list_ids: supplierList || null,
      cost_centers_ids: costCenterList || null,
    };

    const response = await dispatch(
      createNewJob({
        router,
        body: valuesFormToSend,
      })
    );

    if (response.payload.statusCode === 400) {
      activateErrorAlert(
        true,
        Array.isArray(response.payload?.message)
          ? response.payload?.message?.[0]
          : response.payload?.message
      );
      scrollToRef(refContainer);
      return;
    }

    if (response.payload.statusCode === 201) {
      router.push({
        pathname: urls.URL_POST_JOB,
        query: { success: valueSubmitStatus },
      });
      dispatch(resetValuesFormPostJob());
    }
  };

  return (
    <div ref={refContainer}>
      {showError && (
        <AlertMessage
          afterClose={() => activateErrorAlert(false)}
          message={messageError}
        />
      )}
      <Form
        name="content-form-post-job"
        initialValues={valuesFormPostJob}
        onFinish={onFinish}
        layout="vertical"
        validateTrigger="onSubmit"
        form={form}
        onFinishFailed={onFinishFailed}
      >
        <Title level={5} className={styles.title}>
          {formCreate.titleInformation}
        </Title>
        {!dataUser?.bypass_job_approval && (
          <FieldApprovers
            className={styles.row}
            name={fieldsMandatories[0] ?? ''}
            form={form}
            validatorFields={validatorEmptyAllFields}
          />
        )}
        <JobTitleSkillFields
          className={styles.row}
          name={fieldsMandatories[1] ?? ''}
          secondName={fieldsOptionals[0] ?? ''}
          form={form}
          validatorFields={validatorEmptyAllFields}
        />
        <NumberPositionsTypeFields
          className={styles.row}
          name={fieldsMandatories[2] ?? ''}
          secondName={fieldsMandatories[3] ?? ''}
          form={form}
          validatorFields={validatorEmptyAllFields}
        />
        {!isPermanentJob ? (
          <WorkShiftsRowFields
            className={styles.row}
            name={fieldsMandatories[7] ?? ''}
            secondName={fieldsOptionals[1] ?? ''}
            form={form}
            validatorFields={validatorEmptyAllFields}
          />
        ) : (
          <SalaryRangeFields
            className={styles.row}
            name={fieldsMandatories[8] ?? ''}
            secondName={fieldsMandatories[9] ?? ''}
            form={form}
            validatorFields={validatorEmptyAllFields}
          />
        )}
        <FieldHiringManager
          className={styles.row}
          name={fieldsMandatories[4] ?? ''}
          form={form}
          validatorFields={validatorEmptyAllFields}
        />
        <DatesRowFields
          className={styles.row}
          name={fieldsMandatories[5] ?? ''}
          secondName={fieldsMandatories[6] ?? ''}
          form={form}
          validatorFields={validatorEmptyAllFields}
        />
        <JobAttachment
          className={styles.row}
          name={fieldsOptionals[2] ?? ''}
          form={form}
        />
        <SummaryCommentsFields
          className={styles.row}
          name={fieldsOptionals[3] ?? ''}
          secondName={fieldsOptionals[4] ?? ''}
        />
        <Divider className={styles.divider_form} />
        <Title level={5} className={styles.title}>
          {formCreate.titleLocation}
        </Title>
        <AddressRowFields
          className={styles.row}
          name={fieldsOptionals[5] ?? ''}
          secondName={fieldsOptionals[6] ?? ''}
        />
        <CountryStateFields
          className={styles.row}
          name={fieldsOptionals[7] ?? ''}
          secondName={fieldsOptionals[8] ?? ''}
        />
        <CityZipFields
          className={styles.row}
          name={fieldsOptionals[9] ?? ''}
          secondName={fieldsOptionals[10] ?? ''}
        />
        <Divider className={styles.divider_form} />
        <Title level={5} className={styles.title}>
          {formCreate.titleAdditional}
        </Title>
        <BUnitsGLCodesFields
          className={styles.row}
          name={fieldsOptionals[11] ?? ''}
          secondName={fieldsOptionals[12] ?? ''}
        />
        <CostCenterSuppliersFields
          className={styles.row}
          name={fieldsOptionals[13] ?? ''}
          secondName={fieldsOptionals[14] ?? ''}
        />
        <ActionsPostJob form={form} />
      </Form>
    </div>
  );
};

export default ContentFormPostJob;
