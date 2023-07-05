import { Col, Form, Input, Row } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { gutters } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const AddressRowFields: FC<IPostNewJobs.PropsFields> = ({
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
        <Form.Item label={formCreate.labelAddressLine1} name={name}>
          <Input
            placeholder={formCreate.placeholderAddressLine1}
            size="large"
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelAddressLine2} name={secondName}>
          <Input
            placeholder={formCreate.placeholderAddressLine2}
            size="large"
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default AddressRowFields;
