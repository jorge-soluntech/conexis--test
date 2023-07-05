/**
 * // useDisplayItemsNavbar.ts
 * * This hook returns true or false to render some things in the navbar
 */

import { useRouter } from 'next/router';
import { useContext, useEffect, useMemo, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import {
  setClassNameSider,
  setCollapseSider,
} from '@/application/uiSlice/uiSlice';
import { homeUI, urls } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/breakpoints';

import { useAppDispatch, useAppSelector } from './storeHooks';
import useLoggedAsUserRole from './useLoggedAsUserRole';

const useDisplayItemsNavbar = () => {
  const { user } = useContext(AuthContext);
  const { classNameSider } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const [displayItems, setDisplayItems] = useState<any>({ display: 'none' });
  const router = useRouter();

  const { redirectNoPermissions, saveStorageLoggedAs, isSidebarListFilled } =
    useLoggedAsUserRole();

  useEffect(() => {
    if (isSidebarListFilled) redirectNoPermissions();
  }, [redirectNoPermissions, isSidebarListFilled]);

  useEffect(() => {
    saveStorageLoggedAs();
  }, []);

  useEffect(() => {
    const displayLeftItems = () => {
      if (classNameSider !== homeUI.STATE_SIDER.siderActivated) {
        setDisplayItems({
          display: 'flex',
        });
      } else {
        setDisplayItems({
          display: 'none',
        });
      }
    };
    displayLeftItems();
  }, [classNameSider]);

  const handleFocusMenu = (typeHandle: string) => {
    if (typeHandle === 'hover') {
      dispatch(setCollapseSider(false));
      dispatch(setClassNameSider(homeUI.STATE_SIDER.siderFixedHovered));
      return;
    }
    dispatch(setCollapseSider(false));
    dispatch(setClassNameSider(homeUI.STATE_SIDER.siderActivated));
  };

  const handleClickLogo = () => {
    if (router.pathname === urls.URL_DASHBOARD) {
      router.reload();
    }
    router.push(urls.URL_DASHBOARD);
  };

  const marginLeftSwitch = (width: number) => {
    if (
      classNameSider !== homeUI.STATE_SIDER.siderActivated &&
      width >= TABLET_BREAKPOINT
    ) {
      return 94.02;
    }
    if (width <= TABLET_BREAKPOINT) {
      return 16;
    }
    return 416;
  };

  const displayByRole = useMemo(() => {
    const STATE: any = {
      'MSP Finance': () => true,
      'Buyer Finance': () => true,
      Approver: () => true,
      Delegate: () => true,
      Recruiter: () => true,
      'Supplier Administrator': () => true,
      'Account Manager': () => true,
      'Supplier Finance': () => true,
    };

    return STATE[user!.role] ? STATE[user!.role] : false;
  }, [user?.role]);

  return {
    displayByRole,
    displayItems,
    handleFocusMenu,
    handleClickLogo,
    marginLeftSwitch,
  };
};

export default useDisplayItemsNavbar;
