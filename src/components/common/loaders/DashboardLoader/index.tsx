import { Col, Layout, Row, Skeleton, Space } from 'antd';
import Image from 'next/image';
import { useLayoutEffect, useMemo } from 'react';

import { setLoadingDataMetrics } from '@/application/dashboardSlice/dashboardSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { homeUI } from '@/consts';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/breakpoints';

import { PAGE_LOADING_TIME_IN_MILLISECONDS } from '../constants';
import type { DashBoardLoaderProps } from '../types';
import ActionItemCardLoader from './ActionItemCardLoader';
import CardTopLoader from './CardTopLoader';
import styles from './DashboardLoader.module.scss';
import MetricCardLoader from './MetricCardLoader/MetricCardLoader';

const { Content } = Layout;

const DashboardLoader = ({ children }: DashBoardLoaderProps) => {
  const dispatch = useAppDispatch();

  const { width = 0 } = useWindowDimensions();
  const { classNameSider } = useAppSelector((state) => state.ui);
  const { showMetrics } = useAppSelector((state) => state.role);
  const { loadingDataMetrics } = useAppSelector((state) => state.dashboard);
  const isLoading = useMemo(() => loadingDataMetrics, [loadingDataMetrics]);

  useLayoutEffect(() => {
    const showSkeleton = () => {
      dispatch(setLoadingDataMetrics(true));

      const timer = setTimeout(() => {
        dispatch(setLoadingDataMetrics(false));
      }, PAGE_LOADING_TIME_IN_MILLISECONDS);

      return () => {
        clearTimeout(timer);
      };
    };

    showSkeleton();
  }, [setLoadingDataMetrics]);

  return !isLoading ? (
    <>{children}</>
  ) : (
    <>
      <Content>
        <div
          id="container_dashboard_loader"
          className={styles.container_dashboard_loader}
          style={{
            paddingLeft: classNameSider === 'sider_activated' ? 48 : 100,
          }}
        >
          {width >= MOBILE_BREAKPOINT && (
            <div className={styles.container_dashboard_loader}>
              <Image
                src={'/assets/images/mask_conexis.svg'}
                layout="fill"
                alt="mask"
                priority
              />
            </div>
          )}
          <Space direction="vertical">
            <Skeleton
              active
              loading={isLoading}
              title={{ width: 81, style: { margin: 0 } }}
              paragraph={{ rows: 0, style: { margin: 0 } }}
            />
            <Skeleton
              active
              loading={isLoading}
              title={{ width: 319, style: { marginBottom: 0, height: 30 } }}
              paragraph={{ rows: 0, style: { margin: 0 } }}
            />
            <Skeleton
              active
              loading={isLoading}
              title={{ width: 190, style: { height: 16 } }}
              paragraph={{ rows: 0, style: { margin: 0 } }}
            />
          </Space>

          <Row
            gutter={[16, 16]}
            className={styles.container_cards}
            justify="start"
          >
            {homeUI.ITEMS_DETAILS.map((item: any, index: number) => (
              <Col className={styles.col_item} key={item.key} xs={12} sm={6}>
                <ActionItemCardLoader
                  key={index}
                  {...{ color: item.color, isLoading }}
                />
              </Col>
            ))}
          </Row>
        </div>

        <div
          className={styles.container_metrics}
          style={{
            paddingLeft: classNameSider === 'sider_activated' ? 48 : 100,
          }}
        >
          {showMetrics && (
            <>
              <h3 className={styles.metrics_title}>Metrics</h3>
              <Row gutter={[20, 20]} align="top">
                <Col xs={24} sm={12} md={12} lg={8} className={styles.col}>
                  <MetricCardLoader {...{ isLoading }} />
                  <div style={{ marginTop: 20 }}>
                    <MetricCardLoader {...{ isLoading }} />
                  </div>
                  {width >= 576 && width <= TABLET_BREAKPOINT ? (
                    <div style={{ marginTop: 20 }}>
                      <MetricCardLoader {...{ isLoading }} />
                    </div>
                  ) : null}
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} className={styles.col}>
                  <CardTopLoader {...{ isLoading }} />
                </Col>
                <Col xs={24} sm={0} md={0} lg={8} className={styles.col}>
                  <MetricCardLoader {...{ isLoading }} />
                </Col>
              </Row>
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default DashboardLoader;
