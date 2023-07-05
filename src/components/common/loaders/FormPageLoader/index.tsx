import { Card, Col, Row, Skeleton, Steps } from '@/components/designSystem';

import type { FormLoaderProps } from '../types';
import styles from './FormPageLoader.module.scss';
import SkeletonFormDetailsHeader from './SkeletonFormDetailsHeader';
import SkeletonInput from './SkeletonInput';

const stepItems = [0, 1, 2, 3].map((item) => ({
  title: (
    <>
      <Skeleton
        key={item}
        active
        title={{ width: 50, style: { margin: 0 } }}
        paragraph={{ width: 80, rows: 1, style: { margin: '4px 0 0 0' } }}
      />
    </>
  ),
}));

type FormPageData<P> = P & {
  loadingFormData: boolean;
  isLoading: boolean;
};

const FormPageLoader = <P,>({
  children,
  useGetData,
  optionalHookArgs = {},
  withFormSteps = false,
  hasFormDetailsHeader = false,
}: FormLoaderProps<P>) => {
  const data = useGetData({ ...optionalHookArgs }) as FormPageData<P>;
  const childData: Omit<P, 'loadingFormData'> = data;
  const isLoading = data.loadingFormData || data.isLoading;

  return !isLoading ? (
    <>{typeof children === 'function' ? children(childData) : children}</>
  ) : (
    <div className={styles.formPageLoaderContainer}>
      <Skeleton
        active
        loading={isLoading}
        paragraph={{ rows: 0, style: { margin: 0 } }}
        className={styles.formPageContainerTitle}
        title={{ width: 200, style: { marginTop: 45, height: 20 } }}
      />
      <Skeleton
        active
        loading={isLoading}
        paragraph={{ rows: 0, style: { margin: 0 } }}
        className={styles.formPageContainerTitle}
        title={{ width: 285, style: { marginTop: 0, height: 40 } }}
      />
      {withFormSteps && (
        <Steps
          current={0}
          responsive={false}
          items={stepItems}
          className={styles.steps}
        />
      )}
      {hasFormDetailsHeader && <SkeletonFormDetailsHeader />}
      <Card className={styles.card} bodyStyle={{ padding: '24px' }}>
        <div className={styles.formPageLoader}>
          <div className={styles.formHeaderContainer}>
            <Skeleton
              active
              loading={isLoading}
              className={styles.formSmallTitle}
              title={{ width: 200, style: { margin: 0 } }}
              paragraph={{ rows: 0, style: { margin: 0 } }}
            />
            <Skeleton
              active
              loading={isLoading}
              className={styles.formClearFields}
              title={{ width: 80, style: { margin: 0 } }}
              paragraph={{ rows: 0, style: { margin: 0 } }}
            />
          </div>
          <Row className={styles.row}>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
            <Col lg={6} sm={12} xs={12} md={6}>
              <SkeletonInput />
            </Col>
            <Col lg={6} sm={12} xs={12} md={6}>
              <SkeletonInput />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col>
              <SkeletonInput />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
            <Col lg={12} sm={24} xs={24} md={12}>
              <SkeletonInput />
            </Col>
          </Row>
          <div className={styles.buttonContainer}>
            <Skeleton.Button active className={styles.continueButton} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormPageLoader;
