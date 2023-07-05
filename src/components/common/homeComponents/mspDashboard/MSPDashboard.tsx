import { Col, Layout, Row, Space } from 'antd';
import Image from 'next/image';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useItemsRequiringAttention from '@/components/hooks/useItemsRequiringAttention';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { homeUI } from '@/consts/index';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/login_ui';

import CardItem from '../cardItem/CardItem';
import CardMetrics from '../cardMetrics/CardMetrics';
import CardTop from '../cardTop/CardTop';
import useQuantityItemsDashboard from '../useQuantityItemsDashboard';
import styles from './mspDashboard.module.scss';

const { Content } = Layout;

const MSPDashboard = () => {
  const { dataUser } = useContext(AuthContext);
  const { width = 0 } = useWindowDimensions();
  const { quantityMap } = useQuantityItemsDashboard();
  const { handleCardItemClick } = useItemsRequiringAttention();

  const { classNameSider } = useAppSelector((state) => state.ui);
  const { titleDashboardMSP } = useAppSelector((state) => state.dashboard);
  const { showMetrics } = useAppSelector((state) => state.role);

  const [checkedState, setCheckedState] = useState<
    { status: boolean; color: string }[]
  >(
    homeUI.ITEMS_DETAILS.map((data: any) => {
      return { status: data.active, color: data.color };
    })
  );

  useEffect(() => {
    if (localStorage.getItem('current_user_role')) {
      return;
    }
    localStorage.setItem('current_user_role', 'buyer');
  }, []);

  const optionHovered = (position: number) => {
    const updatedCheckedState: any = checkedState.map(
      (_item: any, index: number) => {
        if (index === position) {
          return { status: true, color: '#DD7812' };
        }
        if (index === 0) {
          return {
            status: false,
            color: homeUI.ITEMS_DETAILS[position]?.color,
          };
        }
        return { status: false, color: homeUI.ITEMS_DETAILS[index]?.color };
      }
    );
    setCheckedState(updatedCheckedState);
  };

  const memoizedCards = useMemo(() => {
    return homeUI.ITEMS_DETAILS.map((item: any, index: number) => (
      <Col className={styles.col_item} key={item.key} xs={12} sm={6}>
        <CardItem
          color={
            width >= TABLET_BREAKPOINT ? checkedState[index]!.color : item.color
          }
          title={item.label}
          quantity={quantityMap[item.key] || 0}
          status={
            width >= TABLET_BREAKPOINT ? checkedState[index]!.status : false
          }
          onHover={optionHovered}
          style={
            width >= TABLET_BREAKPOINT
              ? { height: checkedState[index]!.status ? 94 : 75 }
              : { height: 75, alignItems: 'center' }
          }
          onClick={() => handleCardItemClick(item.url)}
          index={index}
        />
      </Col>
    ));
  }, [optionHovered]);

  return (
    <>
      <Content>
        <div
          className={styles.container_contrax}
          style={{
            paddingLeft: classNameSider === 'sider_activated' ? 48 : 100,
          }}
        >
          {width >= MOBILE_BREAKPOINT && (
            <div className={styles.container_contrax_mask}>
              <Image
                src={'/assets/images/mask_conexis.svg'}
                layout="fill"
                alt="mask"
                priority
              />
            </div>
          )}
          <Space direction="vertical" className={styles.container_info}>
            <h3 className={styles.container_info_title}>{titleDashboardMSP}</h3>
            <h1 className={styles.container_info_name}>
              Welcome back, {dataUser?.full_name}!
            </h1>
            <p>Items requiring attention</p>
          </Space>
          <Row
            gutter={[16, 16]}
            className={styles.container_cards}
            justify="start"
          >
            {memoizedCards}
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
                  <CardMetrics
                    title="Total active contracts"
                    value={40}
                    onClick={handleCardItemClick}
                  />
                  <div style={{ marginTop: 20 }}>
                    <CardMetrics
                      title="Total spend YTD"
                      value={'345.8 M'}
                      onClick={handleCardItemClick}
                    />
                  </div>
                  {width >= 576 && width <= TABLET_BREAKPOINT ? (
                    <div style={{ marginTop: 20 }}>
                      <CardMetrics
                        title="Total open jobs"
                        value={'293'}
                        onClick={handleCardItemClick}
                      />
                    </div>
                  ) : null}
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} className={styles.col}>
                  <CardTop
                    title="Top supplier spend YTD"
                    onClick={handleCardItemClick}
                    list={homeUI.ITEMS_TOP_SUPPLIER}
                  />
                </Col>
                <Col xs={24} sm={0} md={0} lg={8} className={styles.col}>
                  <CardMetrics
                    title="Total open jobs"
                    value={'293'}
                    onClick={handleCardItemClick}
                  />
                </Col>
              </Row>
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default MSPDashboard;
