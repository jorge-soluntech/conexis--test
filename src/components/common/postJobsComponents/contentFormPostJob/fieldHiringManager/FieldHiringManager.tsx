import { Col, Form, Row, Select } from 'antd';
import type { FC } from 'react';
import React from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import { gutters, postJobsUI } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import useFormPostJob from '../../useFormPostJob/useFormPostJob';

const FieldHiringManager: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  form,
  validatorFields,
}) => {
  const {
    postNewJob: { formCreate },
  } = locales;
  const { GUTTERS } = gutters;
  const { configItem } = useFormPostJob();

  const { possibleHiringManagers } = useAppSelector((state) => state.postJobs);

  const handleChange = (value: string[]) =>
    form?.setFieldsValue({ primary_hiring_manager: value });

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col span={24}>
        <Form.Item
          label={formCreate.labelHiringManager}
          name={name}
          {...configItem(
            formCreate.textErrorHiringManager,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'string' as const,
            validatorFields
          )}
        >
          <Select
            showSearch
            optionFilterProp="children"
            allowClear
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderHiringManager}
            onChange={handleChange}
            options={possibleHiringManagers}
            filterOption={(input, option: any) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FieldHiringManager;
