import { Col, Layout, Modal, Row, Space } from 'antd';
import Image from 'next/image';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { homeUI } from '@/consts/index';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/login_ui';
import { str } from '@/utils';

import CardItem from '../cardItem/CardItem';
import CardMetrics from '../cardMetrics/CardMetrics';
import styles from './supplierAdministratorDashboard.module.scss';

const { Content } = Layout;

const SupplierAdministratorDashboard = () => {
  const { dataUser = { supplier_supplier_company_name: '' } } =
    useContext(AuthContext);

  const { width = 0 } = useWindowDimensions();

  const { classNameSider } = useAppSelector((state) => state.ui);
  const { showMetrics } = useAppSelector((state) => state.role);

  const nameCompany = str.capitalizeString(
    dataUser!.supplier_supplier_company_name
  );

  const [modalOpen, setModalOpen] = useState(false);

  const [checkedState, setCheckedState] = useState<
    { status: boolean; color: string }[]
  >(
    homeUI.ITEMS_DETAILS_SUPPLIER_ADMIN.map((data: any) => {
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
            color: homeUI.ITEMS_DETAILS_SUPPLIER_ADMIN[position]?.color,
          };
        }
        return {
          status: false,
          color: homeUI.ITEMS_DETAILS_SUPPLIER_ADMIN[index]?.color,
        };
      }
    );
    setCheckedState(updatedCheckedState);
  };

  const styleHeightCards = (index: number) => {
    if (index !== 3) {
      return {
        height: 75,
        alignItems: 'center',
        transition: 'none',
      };
    }
    return {
      height: checkedState[index]!.status ? 88 : 75,
      alignItems: 'center',
      transition: 'none',
    };
  };

  const memoizedCards = useMemo(() => {
    return homeUI.ITEMS_DETAILS_SUPPLIER_ADMIN.map(
      (item: any, index: number) => (
        <Col className={styles.col_item} key={item.key} xs={12} sm={6}>
          <CardItem
            color={
              width >= TABLET_BREAKPOINT
                ? checkedState[index]!.color
                : item.color
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
      )
    );
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
            <h3 className={styles.container_info_title}>{nameCompany}</h3>
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
                    title="Total billings YTD"
                    value={293}
                    onClick={() => setModalOpen(true)}
                  />
                  {width >= 576 && width <= TABLET_BREAKPOINT ? (
                    <div style={{ marginTop: 20 }}>
                      <CardMetrics
                        title="Days to submit 1st proposal"
                        value={40}
                        onClick={() => setModalOpen(true)}
                      />
                    </div>
                  ) : null}
                  {width >= TABLET_BREAKPOINT ? (
                    <div style={{ marginTop: 20 }}>
                      <CardMetrics
                        title="Conversion rate"
                        value={'7 %'}
                        onClick={() => setModalOpen(true)}
                      />
                    </div>
                  ) : null}
                  {width <= 576 ? (
                    <div style={{ marginTop: 20 }}>
                      <CardMetrics
                        title="Active contracts"
                        value={293}
                        onClick={() => setModalOpen(true)}
                      />
                    </div>
                  ) : null}
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} className={styles.col}>
                  {width >= TABLET_BREAKPOINT ? (
                    <>
                      <CardMetrics
                        title="Active contracts"
                        value={293}
                        onClick={() => setModalOpen(true)}
                      />
                      <div style={{ marginTop: 20 }}>
                        <CardMetrics
                          title="Turnover rate"
                          value={'8%'}
                          onClick={() => setModalOpen(true)}
                        />
                      </div>
                    </>
                  ) : null}

                  {width >= 576 && width <= TABLET_BREAKPOINT ? (
                    <>
                      <CardMetrics
                        title="Active contracts"
                        value={293}
                        onClick={() => setModalOpen(true)}
                      />
                      <div style={{ marginTop: 20 }}>
                        <CardMetrics
                          title="Conversion rate"
                          value={'7%'}
                          onClick={() => setModalOpen(true)}
                        />
                      </div>
                    </>
                  ) : null}
                  {width <= 576 ? (
                    <>
                      <div>
                        <CardMetrics
                          title="Days to submit 1st proposal"
                          value={40}
                          onClick={() => setModalOpen(true)}
                        />
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <CardMetrics
                          title="Conversion rate"
                          value={'7%'}
                          onClick={() => setModalOpen(true)}
                        />
                      </div>
                    </>
                  ) : null}
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} className={styles.col}>
                  {width <= TABLET_BREAKPOINT ? (
                    <CardMetrics
                      title="Turnover rate"
                      value={'8%'}
                      onClick={() => setModalOpen(true)}
                    />
                  ) : (
                    <CardMetrics
                      title="Days to submit 1st proposal"
                      value={40}
                      onClick={() => setModalOpen(true)}
                    />
                  )}
                </Col>
              </Row>
            </>
          )}
        </div>
      </Content>
    </>
  );
};

export default SupplierAdministratorDashboard;
