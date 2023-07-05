import { Divider, Layout, Menu, Row, Select } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { BaseSelectRef } from 'rc-select';
import type { FC } from 'react';
import { createRef, useContext, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  setCurrentUserRoleName,
  updateUserLogged,
} from '@/application/dashboardSlice/dashboardSlice';
import { resetRole } from '@/application/roleSlice/roleSlice';
import { closeSider, setCollapseSider } from '@/application/uiSlice/uiSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useDisplayItemsNavbar from '@/components/hooks/useDisplayItemsNavbar';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { icons, roles } from '@/consts';
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '@/consts/login_ui';
import { USER_ROLES } from '@/consts/roleUsers';
import locales from '@/locales/en/en.json';
import { str } from '@/utils';

import SwitchToggle from '../homeComponents/switchToggle/SwitchToggle';
import LogoSider from '../logo/logoSider/logoSider';
import type { ISidebar } from './ISidebar';
import MenuMyAccountMobile from './menuMyAccountMobile/MenuMyAccountMobile';
import styles from './sidebar.module.scss';

const { Sider } = Layout;

/**
 * Returns sidebar component with items.
 *
 * @param mainList - The main list of the sidebar
 * @param otherItemsList - The list of other items
 * @returns The sidebar component
 */

const Sidebar: FC<ISidebar.IProps> = ({ mainList = [], otherItemsList }) => {
  const router = useRouter();

  const { width = 0 } = useWindowDimensions();

  const { logout, dataUser, fechtDataUser, user } = useContext(AuthContext);

  const dispatch = useAppDispatch();

  const { displayByRole } = useDisplayItemsNavbar();

  const {
    collapseSider = width <= TABLET_BREAKPOINT,
    classNameSider,
    widthCollapseSider,
  } = useAppSelector((state) => state.ui);

  const {
    currentUserRole = typeof window !== 'undefined'
      ? window.localStorage.getItem('current_user_role')
      : 'buyer',
  } = useAppSelector((state) => state.dashboard);

  const {
    showSelectBuyerOrSupplier,
    showMainListItemsSider,
    showListOtherActionsSider,
    showSwitchBuyerOrSupplier,
    showSelectNameSideBar,
  } = useAppSelector((state) => state.role);

  const defautlSelect = (val: string) => ({ value: val, label: val });
  const selectRef = createRef<BaseSelectRef>();

  const [isFixed, setIsFixed] = useState(false);
  const [showOtherActions, setShowOtherActions] = useState(false);
  const [valueSelect, setValueSelect] = useState({ value: '', label: '' });
  const [permissionedBuyers, setPermissionedBuyers] = useState(undefined);
  const [permissionedSuppliers, setPermissionedSuppliers] = useState(undefined);
  const [isSelectSearching, setIsSelectSearchig] = useState(false);

  const { sidebar } = locales;

  useEffect(() => {
    if (!dataUser) {
      return;
    }

    if (currentUserRole === roles.LOGGED_AS.buyer) {
      dispatch(
        setCurrentUserRoleName(dataUser?.logged_buyer_client_company_name)
      );
      setValueSelect(
        dataUser.logged_buyer !== null
          ? {
              value: dataUser.logged_buyer,
              label: dataUser.logged_buyer_client_company_name,
            }
          : defautlSelect(sidebar.selectLoggedAs.labelSelectBuyer)
      );
    } else {
      const nameSupplier = dataUser.permissioned_suppliers?.find(
        (element: any) => element.supplier === dataUser.supplier
      );
      dispatch(
        setCurrentUserRoleName(dataUser?.supplier_supplier_company_name)
      );
      setValueSelect(
        dataUser.supplier !== null
          ? {
              value: dataUser.supplier,
              label: nameSupplier?.supplierName
                ? nameSupplier?.supplierName
                : dataUser.supplier,
            }
          : defautlSelect(sidebar.selectLoggedAs.labelSelectSupplier)
      );
    }
  }, [currentUserRole, dataUser]);

  useEffect(() => {
    if (dataUser) {
      setPermissionedBuyers(
        dataUser.permissioned_buyers !== null
          ? dataUser.permissioned_buyers.map((data: any) => ({
              value: data.buyer,
              label: data.buyerName,
            }))
          : undefined
      );
    }
  }, [dataUser]);

  useEffect(() => {
    if (dataUser) {
      setPermissionedSuppliers(
        dataUser.permissioned_suppliers !== null
          ? dataUser.permissioned_suppliers?.map((data: any) => ({
              value: data.supplier,
              label: data.supplierName,
            }))
          : undefined
      );
    }
  }, [dataUser]);

  useEffect(() => {
    const showScrollBody = () => {
      if (collapseSider) {
        document.body.style.overflow = 'unset';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };
    if (width === 0 || width >= MOBILE_BREAKPOINT) {
      document.body.style.overflow = '';
      return;
    }
    showScrollBody();
  }, [width, collapseSider]);

  const handleChange = async (_value: string, opt: any) => {
    setIsSelectSearchig(false);
    setValueSelect({ value: opt.value, label: opt.label });
    const res = await dispatch(
      updateUserLogged(
        currentUserRole === 'buyer'
          ? { logged_buyer: opt.value }
          : { supplier: opt.value }
      )
    );

    if (res.payload) {
      fechtDataUser();
    }

    // TODO: this is just a temp fix. We should have a single search input, instead on a new one in each page.
    // Needs to me remove when all index pages are using the generic index page component
    const searchInput = document.querySelector(
      '[placeholder="Search by"]'
    ) as HTMLInputElement | null;

    if (searchInput != null) {
      searchInput.value = '';
    }
  };

  const setClassnameSider = () => {
    if (isFixed) {
      return styles.sider_fixed_activated;
    }

    if (classNameSider === 'sider_fixed_hovered') {
      return styles.sider_fixed_hovered;
    }

    if (classNameSider === 'sider_activated') {
      return styles.sider_activated;
    }

    return '';
  };

  const changeCurrentItem = (item: string) => {
    if (item === 'logout') {
      dispatch(resetRole());
      logout();
      return;
    }

    if (width <= TABLET_BREAKPOINT) {
      dispatch(closeSider());
    }

    router.push(`${item}`);
  };

  const handleClickLogo = () => {
    if (router.pathname === '/dashboard') {
      router.reload();
    }

    router.push('/dashboard');
  };

  const renderIconClose = () => (
    <div
      style={{ marginLeft: 'auto', cursor: 'pointer' }}
      onClick={() => dispatch(closeSider())}
    >
      <Image
        src={'/assets/icons/arrow_left.svg'}
        width={12}
        height={10}
        alt="close"
      />
    </div>
  );

  const selectedMainItem = useMemo(() => {
    const res = mainList.filter((item) =>
      router.pathname.includes(item.key)
    ) as any;

    return res;
  }, [mainList, router]);

  const selectedOtherItem = useMemo(() => {
    const res = otherItemsList.filter((item) =>
      router.pathname.includes(item.key)
    ) as any;

    return res;
  }, [otherItemsList, router]);

  const marginTopDivider = useMemo(() => {
    if (!showSelectNameSideBar) {
      return 54;
    }
    if (width >= MOBILE_BREAKPOINT && showSelectBuyerOrSupplier) {
      return 68;
    }
    return 68;
  }, [showSelectNameSideBar, showSelectBuyerOrSupplier, width]);

  return (
    <Sider
      trigger={null}
      title={undefined}
      className={setClassnameSider()}
      collapsible
      collapsed={collapseSider}
      breakpoint="xl"
      collapsedWidth={0}
      width={width <= MOBILE_BREAKPOINT ? '100%' : widthCollapseSider}
      onBreakpoint={(broken) => setIsFixed(broken)}
      theme="light"
      onMouseEnter={() => dispatch(setCollapseSider(false))}
      onMouseLeave={() =>
        classNameSider !== 'sider_activated'
          ? dispatch(setCollapseSider(true))
          : null
      }
    >
      <div className={styles.sider_container}>
        <Row className={styles.sider_header}>
          <div onClick={() => handleClickLogo()} style={{ cursor: 'pointer' }}>
            <LogoSider
              colorTitle={'#000000'}
              src={icons.LOGO_CONEXIS}
              heightLogo={48.41}
            />
          </div>
          {renderIconClose()}
        </Row>
        {showSwitchBuyerOrSupplier &&
          width <= TABLET_BREAKPOINT &&
          user?.role === USER_ROLES.MspFinance && (
            <Row className={styles.sider_switch}>
              <SwitchToggle />
            </Row>
          )}
        {showSwitchBuyerOrSupplier &&
          width <= MOBILE_BREAKPOINT &&
          user?.role !== USER_ROLES.MspFinance && (
            <Row className={styles.sider_switch}>
              <SwitchToggle />
            </Row>
          )}

        {showSelectNameSideBar && (
          <Row
            className={styles.sider_dropdown}
            style={{ display: showSelectBuyerOrSupplier ? '' : 'none' }}
          >
            <label>Please select a {currentUserRole}</label>
            <div
              className={
                isSelectSearching ? undefined : styles.prefix_icon_wrapper
              }
              style={{
                display: isSelectSearching ? 'none' : 'flex',
                width:
                  str.getInitials(valueSelect.label) !== 'SAS' && 'SAB'
                    ? 'auto'
                    : 25,
              }}
            >
              {str.getInitials(valueSelect.label) !== 'SAS' && 'SAB' && (
                <div>{str.getInitials(valueSelect.label)}</div>
              )}
            </div>
            <Select
              ref={selectRef}
              showSearch
              value={isSelectSearching ? '' : valueSelect.value}
              style={{ width: '100%' }}
              onChange={handleChange}
              onFocus={() => setIsSelectSearchig(true)}
              onBlur={() => setIsSelectSearchig(false)}
              onSelect={() => selectRef.current?.blur()}
              className={styles.sider_select}
              popupClassName={styles.menu_select}
              getPopupContainer={(triggerNode) => triggerNode.parentElement}
              filterOption={(input, option) =>
                (option?.label.toLowerCase() ?? '').includes(
                  input.toLowerCase()
                )
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              suffixIcon={
                <Image
                  src={icons.ARROW_SELECT}
                  width={10}
                  height={5.77}
                  alt="arrow"
                />
              }
              size="large"
              options={
                currentUserRole === 'buyer'
                  ? permissionedBuyers
                  : permissionedSuppliers
              }
            />
          </Row>
        )}

        {showMainListItemsSider && (
          <>
            <Divider
              style={{
                marginBottom: 8,
                marginTop: marginTopDivider,
              }}
            />
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={selectedMainItem[0]?.key}
              items={mainList.map(
                (item): ISidebar.IMenuList => ({ ...item, title: null })
              )}
              onClick={({ key }) => changeCurrentItem(key)}
              inlineIndent={42}
              selectedKeys={selectedMainItem[0]?.key}
              className={styles.menu_sider}
            />
          </>
        )}

        {showListOtherActionsSider && (
          <>
            <Divider style={{ marginTop: 8, marginBottom: 0 }} />
            <Row className={styles.sider_other_actions}>
              <div>OTHER ACTIONS</div>
              <div onClick={() => setShowOtherActions((state) => !state)}>
                <Image
                  src={icons.OTHER_ACTIONS}
                  alt="logo"
                  width={10}
                  height={12}
                  className={
                    showOtherActions ? styles.icon_up : styles.icon_down
                  }
                />
              </div>
            </Row>
          </>
        )}

        {showOtherActions && (
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={selectedOtherItem[0]?.key}
            items={otherItemsList.map(
              (item): ISidebar.IMenuList => ({ ...item, title: null } as any)
            )}
            onClick={({ key }) => changeCurrentItem(key)}
            inlineIndent={42}
            selectedKeys={selectedOtherItem[0]?.key}
            className={`${styles.menu_sider} ${styles.menu_other_actions}`}
          />
        )}

        {width <= TABLET_BREAKPOINT && !displayByRole && (
          <>
            <Divider style={{ marginBottom: 8, marginTop: 0 }} />
            <MenuMyAccountMobile changeCurrentItem={changeCurrentItem} />
            {width <= MOBILE_BREAKPOINT && (
              <Divider
                style={{ marginBottom: 0, marginTop: 18, paddingBottom: 165 }}
              />
            )}
          </>
        )}

        {width <= MOBILE_BREAKPOINT && displayByRole && (
          <>
            <Divider
              style={{ marginBottom: 8, marginTop: showOtherActions ? 0 : 8 }}
            />
            <MenuMyAccountMobile changeCurrentItem={changeCurrentItem} />
            {width <= MOBILE_BREAKPOINT && (
              <Divider
                style={{ marginBottom: 0, marginTop: 18, paddingBottom: 165 }}
              />
            )}
          </>
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;
