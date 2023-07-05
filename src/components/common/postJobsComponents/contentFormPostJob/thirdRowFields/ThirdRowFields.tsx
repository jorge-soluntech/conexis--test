import { Col, Form, InputNumber, Row, Select } from 'antd';
import type { FC } from 'react';

import { setValuePositionType } from '@/application/postJobsSlice/postJobsSlice';
import { gutters, postJobsUI } from '@/consts';
import locales from '@/locales/en/en.json';

import { useAppDispatch } from '../../../../hooks/storeHooks';
import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import useFormPostJob from '../../useFormPostJob/useFormPostJob';

const NumberPositionsTypeFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
  form,
  validatorFields,
}) => {
  const {
    postNewJob: { formCreate },
  } = locales;
  const { GUTTERS } = gutters;
  const { configItem } = useFormPostJob();
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    form?.setFieldsValue({ type_of_position: value });
    dispatch(setValuePositionType(value));
  };

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item
          label={formCreate.labelNumberPositions}
          name={name}
          {...configItem(
            formCreate.textErrorNumberPositions,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'number' as const,
            validatorFields
          )}
        >
          <InputNumber
            maxLength={16}
            placeholder={formCreate.placeholderNumberPositions}
            size="large"
            precision={0}
            min={1}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item
          label={formCreate.labelPositionType}
          name={secondName}
          {...configItem(
            formCreate.textErrorPositionType,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'string' as const,
            validatorFields
          )}
        >
          <Select
            optionFilterProp="children"
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderPositionType}
            onChange={handleChange}
            options={postJobsUI.POSITION_TYPE_OPTIONS}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default NumberPositionsTypeFields;
