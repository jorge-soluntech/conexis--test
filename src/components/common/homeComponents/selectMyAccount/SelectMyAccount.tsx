import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useContext, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { resetRole } from '@/application/roleSlice/roleSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';

import styles from './selectMyAccount.module.scss';

const SelectMyAccount: FC = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { logout } = useContext(AuthContext);
  const { showSettingsItem } = useAppSelector((state) => state.role);

  const [showMyAccount, setShowMyAccount] = useState(false);
  const items: MenuProps['items'] = [
    {
      label: 'Settings',
      key: '0',
      onClick: () =>
        router.push(`/home/settings`, undefined, {
          shallow: true,
        }),
      style: { display: showSettingsItem ? 'flex' : 'none' },
    },
    {
      type: 'divider',
      style: {
        height: 1,
        display: showSettingsItem ? 'flex' : 'none',
        background: '#C1C6CD',
      },
    },
    {
      label: 'Log out',
      key: '1',
      onClick: () => {
        dispatch(resetRole());
        logout();
      },
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      trigger={['hover']}
      className={styles.navbar__items_account}
      overlayClassName={styles.overlay_account}
      placement="bottom"
      onOpenChange={(open) => setShowMyAccount(open)}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          My account
          <span
            role="img"
            aria-label="down"
            className={styles.navbar__items_account_icon}
          >
            <Image
              src="/assets/icons/arrow_down.svg"
              alt="arrow"
              width={8.58}
              height={5}
              className={showMyAccount ? styles.icon_up : styles.icon_down}
            />
          </span>
        </Space>
      </a>
    </Dropdown>
  );
};

export default SelectMyAccount;
