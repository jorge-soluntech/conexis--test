/* eslint-disable no-nested-ternary */
import { Alert } from 'antd';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { BUYERS_TABLE_TEXT } from '@/consts';
import { DASHBOARDTYPES } from '@/consts/permissions';

import Header from '../tableComponents/header/Header';
import styles from './buyerComponent.module.scss';
import type { IBuyerComponent } from './IBuyerComponent';
import TableBuyers from './tableBuyer/TableBuyer';

const BuyerComponent: FC<IBuyerComponent.IProps> = ({
  loading,
  dataTable,
  showError,
  setShowError,
  messageError,
}) => {
  return (
    <>
      <div className={styles.buyers}>
        <Header
          type={DASHBOARDTYPES.buyer}
          titleForm={BUYERS_TABLE_TEXT.title_buyers_table}
          hasSearchInput={false}
          subTitleForm={BUYERS_TABLE_TEXT.sub_title_buyers_table}
        />
        {showError && (
          <Alert
            message={messageError}
            className="alert_red"
            type="error"
            showIcon
            closable
            afterClose={() => setShowError(false)}
            icon={
              <Image
                src="/assets/icons/alert_error.svg"
                alt="logo_conexis"
                width={24}
                height={24}
              />
            }
          />
        )}
        <TableBuyers
          loading={loading}
          dataTable={dataTable}
          setShowError={setShowError}
          dashboard={DASHBOARDTYPES.buyer}
        />
      </div>
    </>
  );
};

export default BuyerComponent;
