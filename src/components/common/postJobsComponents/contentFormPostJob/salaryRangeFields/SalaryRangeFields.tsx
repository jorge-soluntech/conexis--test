import { Col, Form, InputNumber, Row } from 'antd';
import type { FC } from 'react';
import React from 'react';

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

const SalaryRangeFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
  form,
  validatorFields,
}) => {
  const { GUTTERS } = gutters;
  const { configItem } = useFormPostJob();

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item
          label={formCreate.labelSalaryLow}
          name={name}
          {...configItem(
            formCreate.textErrorSalaryLow,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'number' as const,
            validatorFields
          )}
        >
          <InputNumber
            placeholder={formCreate.placeholderSalaryLow}
            formatter={(value) => currencyFormatterNumber(value)}
            parser={(value) => currencyParserNumber(value)}
            size="large"
            precision={2}
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item
          label={formCreate.labelSalaryHigh}
          name={secondName}
          {...configItem(
            formCreate.textErrorSalaryHigh,
            postJobsUI.FORM_FIELDS.mandatory,
            form,
            'number' as const,
            validatorFields
          )}
        >
          <InputNumber
            placeholder={formCreate.placeholderSalaryHigh}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            size="large"
            precision={2}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default SalaryRangeFields;
