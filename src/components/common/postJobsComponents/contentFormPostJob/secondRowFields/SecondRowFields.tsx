import { Col, Form, Input, Row, Select } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { gutters, postJobsUI } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import useFormPostJob from '../../useFormPostJob/useFormPostJob';

const JobTitleSkillFields: FC<IPostNewJobs.PropsFields> = ({
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

  const handleChange = (value: string[]) =>
    form?.setFieldsValue({ skill_category: value });

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item
          label={formCreate.labelJobTitle}
          name={name}
          {...configItem(
            formCreate.textErrorJobTitle,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'string' as const,
            validatorFields
          )}
        >
          <Input placeholder={formCreate.placeholderJobTitle} size="large" />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelSkill} name={secondName}>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderSkill}
            onChange={handleChange}
            options={postJobsUI.SKILL_CATEGORY_OPTIONS}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default JobTitleSkillFields;
