import { Col, Form, Row, Select } from 'antd';
import type { FC } from 'react';
import React from 'react';

import TagRender from '@/components/common/TagRender/TagRender';
import { useAppSelector } from '@/components/hooks/storeHooks';
import { gutters, postJobsUI } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import useFormPostJob from '../../useFormPostJob/useFormPostJob';

const FieldApprovers: FC<IPostNewJobs.PropsFields> = ({
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

  const { possibleApprovers } = useAppSelector((state) => state.postJobs);

  const handleChange = (value: string[]) => {
    if (value.length === 0) {
      form?.setFieldsValue({ approvers_ids: undefined });
      return;
    }
    form?.setFieldsValue({ approvers_ids: value });
  };

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col span={24}>
        <Form.Item
          label={formCreate.labelApprovers}
          name={name}
          {...configItem(
            formCreate.textErrorApprovers,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'object' as const,
            validatorFields
          )}
        >
          <Select
            mode="multiple"
            options={possibleApprovers}
            size="large"
            tagRender={TagRender}
            maxTagCount="responsive"
            showArrow
            allowClear
            style={{ height: 'fit-content' }}
            placeholder={formCreate.placeholderApprovers}
            onChange={handleChange}
            filterOption={(input, option: any) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              ((optionA?.label as string) ?? '')
                .toLowerCase()
                .localeCompare(((optionB?.label as string) ?? '').toLowerCase())
            }
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default FieldApprovers;
