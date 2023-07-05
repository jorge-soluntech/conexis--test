import { Col, Form, Row, Select } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { gutters } from '@/consts';
import locales from '@/locales/en/en.json';

import {
  readProvinces,
  setClearProvinces,
} from '../../../../../application/postJobsSlice/postJobsSlice';
import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';

const CountryStateFields: FC<IPostNewJobs.PropsFields> = ({
  className,
  name,
  secondName,
  form,
}) => {
  const {
    postNewJob: { formCreate },
  } = locales;
  const { GUTTERS } = gutters;
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { listCountries, listProvinces } = useAppSelector(
    (state) => state.postJobs
  );

  const handleChangeCountry = (value: string) => {
    if (!value) {
      dispatch(setClearProvinces());
      form?.setFieldsValue({ country_id: value });
      return;
    }

    dispatch(readProvinces({ router, idCountry: value }));
  };

  const handleChangeState = (value: string[]) =>
    form?.setFieldsValue({ province_region_id: value });

  return (
    <Row className={className} gutter={GUTTERS.formField}>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelCountry} name={name}>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderCountry}
            onChange={handleChangeCountry}
            options={listCountries}
            showSearch
            filterOption={(input, option: any) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item label={formCreate.labelState} name={secondName}>
          <Select
            allowClear
            style={{ width: '100%' }}
            placeholder={formCreate.placeholderState}
            onChange={handleChangeState}
            options={listProvinces}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default CountryStateFields;
