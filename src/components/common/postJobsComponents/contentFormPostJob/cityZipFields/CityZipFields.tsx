import { Col, Form, Input, Row } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { gutters } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const CityZipFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
}) => {
  const {
    postNewJob: { formCreate },
  } = locales;
  const { GUTTERS } = gutters;

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelCity} name={name}>
          <Input placeholder={formCreate.placeholderCity} size="large" />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelZip} name={secondName}>
          <Input placeholder={formCreate.placeholderZip} size="large" />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default CityZipFields;
