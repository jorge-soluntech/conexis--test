import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

import { setCurrentUserRole } from '@/application/dashboardSlice/dashboardSlice';
import { homeUI, levels, loginUI, roles, urls } from '@/consts';

import { useAppDispatch, useAppSelector } from './storeHooks';
import useItemsSider from './useItemsSider';

const initialValueLevel = '';

/**
 * useLoggedAsUserRole.ts
 * * This hook returns the functions to redirect to dashboard
 * * and save "logged as" at localstorage
 */

const useLoggedAsUserRole = () => {
  const dispatch = useAppDispatch();
  const { userLevel } = useAppSelector((state) => state.role);
  const router = useRouter();
  const { mainList, otherItemsList } = useItemsSider();

  const { buyer, supplier } = roles.LOGGED_AS;

  const isSidebarListFilled = useMemo(
    () => mainList.length > 0 && otherItemsList.length > 0,
    [mainList, otherItemsList]
  );

  const isPathOnList = (list: any[]): boolean =>
    list.some((link) => router.pathname.includes(link.key));

  const validatedLists = [
    isPathOnList(otherItemsList),
    isPathOnList(mainList),
    isPathOnList(loginUI.ITEMS_LINKS_NAVBAR),
    isPathOnList(loginUI.LINKS_ERRORS),
    isPathOnList(homeUI.ITEMS_DETAILS),
    isPathOnList(homeUI.ITEMS_DETAILS_PROGRAM_REPRESENTATIVE),
    isPathOnList(homeUI.ITEMS_DETAILS_ADMIN),
    isPathOnList(homeUI.ITEMS_DETAILS_DELEGATE),
    isPathOnList(homeUI.ITEMS_DETAILS_APPROVER),
  ] as boolean[];

  const redirectNoPermissions = useCallback(() => {
    const isRedirectedToDashboard = validatedLists.every((value) => !value);

    if (isRedirectedToDashboard) router.push(urls.URL_DASHBOARD);
  }, [mainList, otherItemsList]);

  const changeCurrentUserRoleSelect = (state: boolean) => {
    if (state) {
      dispatch(setCurrentUserRole(buyer));
    } else {
      dispatch(setCurrentUserRole(supplier));
    }
  };

  const saveStorageLoggedAs = useCallback(() => {
    const currentUserRole = localStorage.getItem(
      roles.KEY_ROLE_LOCALSTORAGE
    ) as string;
    if (userLevel === initialValueLevel) {
      dispatch(setCurrentUserRole(currentUserRole));
      return;
    }
    if (currentUserRole && userLevel === levels.msp) {
      dispatch(setCurrentUserRole(currentUserRole));
      return;
    }
    changeCurrentUserRoleSelect(true);
  }, [userLevel]);

  return {
    saveStorageLoggedAs,
    redirectNoPermissions,
    changeCurrentUserRoleSelect,
    isSidebarListFilled,
  };
};

export default useLoggedAsUserRole;
