import { Button, Space } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { setCollapseSider } from '@/application/uiSlice/uiSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { homeUI, urls } from '@/consts';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/login_ui';
import locales from '@/locales/en/en.json';

import useDisplayItemsNavbar from '../../hooks/useDisplayItemsNavbar';
import SelectMyAccount from '../homeComponents/selectMyAccount/SelectMyAccount';
import SwitchToggle from '../homeComponents/switchToggle/SwitchToggle';
import styles from './navbar.module.scss';

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { width = 0 } = useWindowDimensions();
  const { navbar } = locales;

  const {
    displayByRole,
    displayItems,
    handleFocusMenu,
    handleClickLogo,
    marginLeftSwitch,
  } = useDisplayItemsNavbar();

  const { classNameSider } = useAppSelector((state) => state.ui);
  const { showSwitchBuyerOrSupplier, showTutorialslink, showPostJobButton } =
    useAppSelector((state) => state.role);

  const handlePostJobs = () => router.push(urls.URL_POST_JOB);

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.navbar_menu}
        style={displayItems}
        onClick={() => handleFocusMenu('click')}
        onMouseEnter={() => handleFocusMenu('hover')}
        onMouseLeave={() =>
          classNameSider !== homeUI.STATE_SIDER.siderActivated
            ? dispatch(setCollapseSider(true))
            : null
        }
      >
        <Image
          src="/assets/icons/menu_hamburguer.svg"
          alt="menu"
          width={18}
          height={14}
        />
      </div>
      <div
        className={styles.navbar_logo}
        style={displayItems}
        onClick={() => handleClickLogo()}
      >
        <Image
          src="/assets/icons/logo_conexis.svg"
          alt="logo_conexis"
          width={63.67}
          height={48.41}
          priority
        />
      </div>
      <div
        style={{
          marginLeft: marginLeftSwitch(width),
          transition: 'all 0.1s linear',
        }}
      >
        {showSwitchBuyerOrSupplier &&
          width >= MOBILE_BREAKPOINT &&
          !displayByRole && <SwitchToggle />}
        {showSwitchBuyerOrSupplier &&
          width >= TABLET_BREAKPOINT &&
          displayByRole && <SwitchToggle />}
      </div>

      <Space size={35} className={styles.navbar__items}>
        {width >= TABLET_BREAKPOINT && !displayByRole && (
          <>
            <div
              className={styles.navbar__items_tutorials}
              style={{ display: showTutorialslink ? 'flex' : 'none' }}
              onClick={() =>
                router.push(urls.URL_TUTORIALS, undefined, {
                  shallow: true,
                })
              }
            >
              {navbar.linkTutorials}
            </div>
            <SelectMyAccount />
          </>
        )}

        {width >= MOBILE_BREAKPOINT && displayByRole && (
          <>
            <div
              className={styles.navbar__items_tutorials}
              style={{ display: showTutorialslink ? 'flex' : 'none' }}
              onClick={() =>
                router.push(urls.URL_TUTORIALS, undefined, {
                  shallow: true,
                })
              }
            >
              {navbar.linkTutorials}
            </div>
            <SelectMyAccount />
          </>
        )}

        {showPostJobButton && (
          <Button
            type="default"
            className={styles.post_jobs}
            onClick={handlePostJobs}
            icon={
              <span className={styles.icon_jobs} role="img">
                <Image
                  src="/assets/icons/jobs_green.svg"
                  alt="logo_conexis"
                  width={20}
                  height={20}
                />
              </span>
            }
          >
            {navbar.buttonPostJob}
          </Button>
        )}
        {displayByRole && width <= MOBILE_BREAKPOINT && !showPostJobButton && (
          <div style={{ marginRight: 10 }}>
            <SelectMyAccount />
          </div>
        )}
      </Space>
    </nav>
  );
};

export default Navbar;
