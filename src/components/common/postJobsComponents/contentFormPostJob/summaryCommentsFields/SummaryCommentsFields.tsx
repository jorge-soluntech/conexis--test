import { Col, Form, Input, Row } from 'antd';
import type { FC } from 'react';
import React from 'react';

import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const { TextArea } = Input;

const SummaryCommentsFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
}) => {
  const {
    postNewJob: { formCreate },
  } = locales;

  return (
    <Row className={className} gutter={[24, 10]}>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelJobSummary} name={name}>
          <TextArea rows={4} placeholder={formCreate.placeholderComments} />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelComments} name={secondName}>
          <TextArea rows={4} placeholder={formCreate.placeholderComments} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default SummaryCommentsFields;
