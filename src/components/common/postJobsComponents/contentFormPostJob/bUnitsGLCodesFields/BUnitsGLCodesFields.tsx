import { Col, Form, Row, Select } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import { gutters } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const {
  postNewJob: { formCreate },
} = locales;

const BUnitsGLCodesFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
  form,
}) => {
  const { GUTTERS } = gutters;
  const { businessUnitsByBuyer, glCodesByBuyer } = useAppSelector(
    (state) => state.postJobs
  );

  const handleChangeBUnits = (value: string[]) =>
    form?.setFieldsValue({ business_unit_id: value });

  const handleChangeGLCodes = (value: string[]) =>
    form?.setFieldsValue({ gl_code_id: value });

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelBUnits} name={name}>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderBUnits}
            onChange={handleChangeBUnits}
            options={businessUnitsByBuyer}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelGLCode} name={secondName}>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderGLCode}
            onChange={handleChangeGLCodes}
            options={glCodesByBuyer}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default BUnitsGLCodesFields;
