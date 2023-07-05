import { Col, DatePicker, Form, Row } from 'antd';
import type { FC } from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import { gutters, postJobsUI } from '@/consts';
import { formatDate } from '@/consts/forms_general';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import useFormPostJob from '../../useFormPostJob/useFormPostJob';

const {
  postNewJob: { formCreate },
} = locales;

const DatesRowFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
  form,
  validatorFields,
}) => {
  const { GUTTERS } = gutters;
  const { configItem } = useFormPostJob();
  const { isPermanentJob } = useAppSelector((state) => state.postJobs);

  const lgPermanentJobColStyles: number = isPermanentJob ? 24 : 12;

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} lg={lgPermanentJobColStyles}>
        <Form.Item
          label={formCreate.labelPlannedStartDate}
          name={name}
          {...configItem(
            formCreate.textErrorPlannedStartDate,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'date' as const,
            validatorFields
          )}
        >
          <DatePicker format={formatDate} />
        </Form.Item>
      </Col>
      {!isPermanentJob && (
        <Col xs={24} lg={12}>
          <Form.Item
            label={formCreate.labelPlannedEndDate}
            name={secondName}
            {...configItem(
              formCreate.textErrorPlannedEndDate,
              postJobsUI.FORM_FIELDS.mandatory,
              form,
              'date' as const,
              validatorFields
            )}
          >
            <DatePicker format={formatDate} />
          </Form.Item>
        </Col>
      )}
    </Row>
  );
};

export default DatesRowFields;
