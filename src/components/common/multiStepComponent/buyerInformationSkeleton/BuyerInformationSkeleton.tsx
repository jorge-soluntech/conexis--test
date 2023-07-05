import { Card, Col, Form, Row, Skeleton } from 'antd';

import styles from './BuyerInformationSkeleton.module.scss';

/**
 * Shows a skeleton loader for the buyer information step.
 *
 * @returns Skeleton loader
 */
const SkeletonLoader = () => {
  const SkeletonInput = () => (
    <Skeleton.Input active size="large" className={styles.skeleton} />
  );
  return (
    <>
      <Card className={styles.form_create}>
        <div>
          <Form>
            <div className={styles.form_subtitle_container}>
              <div className={styles.form_small_title}>Buyer information</div>
            </div>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item className={styles.label} label="Client company name">
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  className={styles.label}
                  label="Legal name for invoicing"
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  className={styles.label}
                  label="Client mailing address"
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item label="Country" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item label="City" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={6} sm={12} xs={12} md={6}>
                <Form.Item label="State" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={6} sm={12} xs={12} md={6}>
                <Form.Item label="Zip code" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24} sm={24} xs={24} md={24}>
                <Form.Item label="Client contact name" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  label="Client contact email"
                  className={styles.label}
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  label="Client contact phone"
                  className={styles.label}
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  label="Accounts payable contact name"
                  className={styles.label}
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  label="Accounts payable contact email"
                  className={styles.label}
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item label="Account owner" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item
                  label="Work week definition"
                  className={styles.label}
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item label="Currency" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24} md={12}>
                <Form.Item label="Payment terms" className={styles.label}>
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <Col lg={24} sm={24} xs={24} md={24}>
                <Form.Item
                  className={styles.label}
                  label="Contract expiry date"
                >
                  <SkeletonInput />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Card>
    </>
  );
};

export default SkeletonLoader;
