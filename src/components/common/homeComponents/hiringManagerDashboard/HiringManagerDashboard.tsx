import { Col, Layout, Row, Space } from 'antd';
import Image from 'next/image';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useItemsRequiringAttention from '@/components/hooks/useItemsRequiringAttention';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { homeUI } from '@/consts/index';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/login_ui';
import { str } from '@/utils';

import CardItem from '../cardItem/CardItem';
import useQuantityItemsDashboard from '../useQuantityItemsDashboard';
import styles from './hiringManagerDashboard.module.scss';

const { Content } = Layout;

const HiringManagerDashboard = () => {
  const { dataUser = { logged_buyer_client_company_name: '' } } =
    useContext(AuthContext);
  const { width = 0 } = useWindowDimensions();
  const { quantityMap } = useQuantityItemsDashboard();
  const { handleCardItemClick } = useItemsRequiringAttention();

  const { classNameSider } = useAppSelector((state) => state.ui);

  const nameCompany = str.capitalizeString(
    dataUser!.logged_buyer_client_company_name
  );

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
    return homeUI.ITEMS_DETAILS_ADMIN.map((item: any, index: number) => (
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
            data-testid="test-welcome"
          >
            {memoizedCards}
          </Row>
        </div>
      </Content>
    </>
  );
};

export default HiringManagerDashboard;
