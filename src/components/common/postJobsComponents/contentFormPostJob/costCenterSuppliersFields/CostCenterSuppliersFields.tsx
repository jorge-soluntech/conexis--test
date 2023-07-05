import { Col, Form, Row, Select } from 'antd';
import type { FC } from 'react';
import React from 'react';

import TagRender from '@/components/common/TagRender/TagRender';
import { useAppSelector } from '@/components/hooks/storeHooks';
import { gutters } from '@/consts';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const {
  postNewJob: { formCreate },
} = locales;

const CostCenterSuppliersFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
}) => {
  const { GUTTERS } = gutters;
  const { costCentersByBuyer, suppliersByBuyer } = useAppSelector(
    (state) => state.postJobs
  );

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelCostCenters} name={name}>
          <Select
            mode="multiple"
            options={costCentersByBuyer}
            size="large"
            tagRender={TagRender}
            showArrow
            maxTagCount="responsive"
            allowClear
            style={{ height: 'fit-content' }}
            placeholder={formCreate.placeholderCostCenter}
            filterOption={(input, option: any) =>
              (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              ((optionA?.label as string) ?? '')
                .toLowerCase()
                .localeCompare(((optionB?.label as string) ?? '').toLowerCase())
            }
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelSupplierList} name={secondName}>
          <Select
            mode="multiple"
            options={suppliersByBuyer}
            size="large"
            tagRender={TagRender}
            maxTagCount="responsive"
            showArrow
            allowClear
            style={{ height: 'fit-content' }}
            placeholder={formCreate.placeholderSupplierList}
            filterOption={(input, option: any) =>
              (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
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

export default CostCenterSuppliersFields;
