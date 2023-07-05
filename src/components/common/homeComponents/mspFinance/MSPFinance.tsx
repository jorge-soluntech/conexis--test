import { Col, Layout, Modal, Row, Space } from 'antd';
import Image from 'next/image';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { homeUI } from '@/consts/index';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/login_ui';

import CardItem from '../cardItem/CardItem';
import CardMetrics from '../cardMetrics/CardMetrics';
import CardTop from '../cardTop/CardTop';
import styles from './mspFinance.module.scss';

const { Content } = Layout;

const MSPFinance = () => {
  const { dataUser } = useContext(AuthContext);

  const { width = 0 } = useWindowDimensions();

  const { classNameSider } = useAppSelector((state) => state.ui);
  const { titleDashboardMSP } = useAppSelector((state) => state.dashboard);
  const { showMetrics } = useAppSelector((state) => state.role);

  const [modalOpen, setModalOpen] = useState(false);

  const [checkedState, setCheckedState] = useState<
    { status: boolean; color: string }[]
  >(
    homeUI.ITEMS_DETAILS_FINANCE.map((data: any) => {
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
            color: homeUI.ITEMS_DETAILS_FINANCE[position]?.color,
          };
        }
        return {
          status: false,
          color: homeUI.ITEMS_DETAILS_FINANCE[index]?.color,
        };
      }
    );
    setCheckedState(updatedCheckedState);
  };

  const styleHeightCards = (index: number) => {
    if (index !== 0) {
      return {
        height: checkedState[index]!.status ? 94 : 85,
        alignItems: 'center',
        transition: 'none',
      };
    }
    return {
      height: checkedState[index]!.status ? 113 : 85,
      alignItems: 'center',
      transition: 'none',
    };
  };

  const memoizedCards = useMemo(() => {
    return homeUI.ITEMS_DETAILS_FINANCE.map((item: any, index: number) => (
      <Col className={styles.col_item} key={item.key} xs={12} sm={6}>
        <CardItem
          color={
            width >= TABLET_BREAKPOINT ? checkedState[index]!.color : item.color
          }
          quantity={16}
          title={item.label}
          status={
            width >= TABLET_BREAKPOINT ? checkedState[index]!.status : false
          }
          onHover={optionHovered}
          style={
            width >= TABLET_BREAKPOINT
              ? styleHeightCards(index)
              : { height: 75, alignItems: 'center' }
          }
          onClick={() => setModalOpen(true)}
          index={index}
        />
      </Col>
    ));
  }, [optionHovered]);

  return (
    <>
      <Modal
        title="Modal cards"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        zIndex={2000}
      >
        <p>Temporary empty modal...</p>
      </Modal>
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
                    title="Client invoices past due"
                    value={40}
                    onClick={() => setModalOpen(true)}
                  />
                  <div style={{ marginTop: 20 }}>
                    <CardMetrics
                      title="Total past due client invoices"
                      value={'345.8 M'}
                      onClick={() => setModalOpen(true)}
                    />
                  </div>
                  {width >= 576 && width <= TABLET_BREAKPOINT ? (
                    <>
                      <div style={{ marginTop: 20 }}>
                        <CardMetrics
                          title="Total past due supplier invoices"
                          value={'293'}
                          onClick={() => setModalOpen(true)}
                        />
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <CardMetrics
                          title="Sum of past due supplier invoices"
                          value={'293'}
                          onClick={() => setModalOpen(true)}
                        />
                      </div>
                    </>
                  ) : null}
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} className={styles.col}>
                  <CardTop
                    title="Top supplier spend YTD"
                    onClick={() => setModalOpen(true)}
                    list={homeUI.ITEMS_TOP_SUPPLIER}
                  />
                </Col>
                <Col xs={24} sm={0} md={0} lg={8} className={styles.col}>
                  <CardMetrics
                    title="Total past due supplier invoices"
                    value={'293'}
                    onClick={() => setModalOpen(true)}
                  />
                  <div style={{ marginTop: 20 }}>
                    <CardMetrics
                      title="Sum of past due supplier invoices"
                      value={'293'}
                      onClick={() => setModalOpen(true)}
                    />
                  </div>
                </Col>
              </Row>
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default MSPFinance;
