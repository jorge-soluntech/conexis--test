import { Menu } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

import { useAppSelector } from '@/components/hooks/storeHooks';
import { loginUI } from '@/consts';

import type { IMenuMyAccount } from './IMenuMyAccountMobile';
import styles from './menuMyAccountMobile.module.scss';

/**
 * Returns menu my account and tutorial item for the mobile resolution
 *
 * @param changeCurrentItem - The method when an option is clicked
 * @returns Menu mobile my account
 */

const MenuMyAccountMobile: FC<IMenuMyAccount.IProps> = ({
  changeCurrentItem,
}) => {
  const router = useRouter();

  const { showSettingsItem, showTutorialslink } = useAppSelector(
    (state) => state.role
  );

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[router.pathname]}
      items={
        loginUI.ITEMS_SIDER_ACCOUNT.map((item, index) => {
          if (index === 0) {
            return {
              ...item,
              style: { display: showTutorialslink ? 'flex' : 'none' },
              title: null,
            };
          }
          if (index === 1) {
            return {
              ...item,
              style: { display: showSettingsItem ? 'flex' : 'none' },
              title: null,
            };
          }
          return { ...item, title: null };
        }) as any
      }
      onClick={({ key }) => changeCurrentItem(key)}
      inlineIndent={42}
      selectedKeys={[router.pathname]}
      className={`${styles.menu_sider} ${styles.menu_account}`}
      style={{ paddingBottom: 0 }}
    />
  );
};

export default MenuMyAccountMobile;
