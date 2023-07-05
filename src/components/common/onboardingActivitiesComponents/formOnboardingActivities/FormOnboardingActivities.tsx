import { Button, Col, Form, Input, Row } from 'antd';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  createBuyerOnboardingItem,
  readOnboardingItems,
} from '@/application/onboardingSlice/onboardingSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { onboardingUI, urls } from '@/consts';
import locales from '@/locales/en/en.json';

import styles from './formOnboardingActivities.module.scss';

const FormOnboardingActivities = () => {
  const { valueItems } = useAppSelector((state) => state.onboarding);
  const { idTenant } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { dataUser = { logged_buyer: '' } } = useContext(AuthContext);
  const [isLoading, setLoading] = useState<boolean>(false);

  const form = useRef<any>(null);

  const { onboardingActivities } = locales;

  useEffect(() => {
    dispatch(readOnboardingItems(router));
  }, [router, dataUser?.logged_buyer]);

  useEffect(() => {
    form.current?.resetFields();
  }, [valueItems]);

  const onFinish = async (values: any) => {
    setLoading(true);
    const response = await dispatch(
      createBuyerOnboardingItem({
        router,
        body: { ...values, id_tenant: idTenant },
      })
    );
    if (response.payload) {
      router.push(urls.URL_SUCCESS_ONBOARDING, undefined, {
        shallow: true,
      });
      setLoading(false);
    }
  };

  const renderInputs = () => {
    return onboardingUI.dataInputs?.map((data, index) => (
      <Col xs={24} sm={24} md={12} lg={12} key={index}>
        <Form.Item label={data.title} name={data.id} className={styles.label}>
          <Input
            placeholder={onboardingActivities.placeholderInputs}
            size="large"
          />
        </Form.Item>
      </Col>
    ));
  };

  return (
    <Form
      name="basic"
      initialValues={valueItems}
      onFinish={onFinish}
      layout="vertical"
      ref={form}
    >
      <Row className={styles.row} gutter={[24, 20]}>
        {renderInputs()}
      </Row>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: 24 }}
          loading={isLoading}
        >
          {onboardingActivities.titleButtonSubmit}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormOnboardingActivities;
