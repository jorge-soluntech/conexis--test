import { Col, Form, InputNumber, Row, Select } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { setSelectedWorkShifts } from '@/application/postJobsSlice/postJobsSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { gutters, postJobsUI } from '@/consts';
import locales from '@/locales/en/en.json';
import {
  currencyFormatterNumber,
  currencyParserNumber,
} from '@/utils/currencyFormat';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import useFormPostJob from '../../useFormPostJob/useFormPostJob';

const {
  postNewJob: { formCreate },
} = locales;

const WorkShiftsRowFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  form,
  validatorFields,
}) => {
  const { GUTTERS } = gutters;
  const { configItem } = useFormPostJob();
  const dispatch = useAppDispatch();

  const { workShiftsByBuyer, selectedWorkShifts } = useAppSelector(
    (state) => state.postJobs
  );

  const handleChange = (value: string, index: number) => {
    if (selectedWorkShifts.length === 0) {
      dispatch(setSelectedWorkShifts([value]));
      return;
    }

    const mappedList = selectedWorkShifts.map(
      (data: any, indexFilter: number) => {
        if (indexFilter === index) {
          return value;
        }
        return data;
      }
    );
    dispatch(setSelectedWorkShifts(mappedList));
  };

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={6}>
        <Form.Item
          label={formCreate.labelTargetRate}
          name={name}
          {...configItem(
            formCreate.textErrorTargetRate,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'number' as const,
            validatorFields
          )}
        >
          <InputNumber
            placeholder={formCreate.placeholderTargetRate}
            formatter={(value) => currencyFormatterNumber(value)}
            parser={(value) => currencyParserNumber(value)}
            size="large"
            precision={2}
          />
        </Form.Item>
      </Col>
      {formCreate.workShiftsSelects.map((data, index) => (
        <Col xs={24} md={6} key={index}>
          <Form.Item label={data.label}>
            <Select
              allowClear
              style={{ width: '100%' }}
              placeholder={formCreate.placeholderWorkShifts}
              onChange={(value) => handleChange(value, index)}
              options={workShiftsByBuyer}
            />
          </Form.Item>
        </Col>
      ))}
    </Row>
  );
};

export default WorkShiftsRowFields;
