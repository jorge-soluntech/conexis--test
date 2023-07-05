/**
 * // useItemsSider.ts
 * * This hook returns the list of item by user role
 */

import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { levels, loginUI, roles } from '@/consts';
import { iconApprovals } from '@/consts/iconsSider';
import { USER_ROLES } from '@/consts/roleUsers';

import type { ISidebar } from '../common/sidebar/ISidebar';
import { useAppSelector } from './storeHooks';

const useItemsSider = (): ISidebar.IProps => {
  const { userLevel } = useAppSelector((state) => state.role);
  const { currentUserRole } = useAppSelector((state) => state.dashboard);
  const { user, dataUser = { is_self_served: [] } } = useContext(AuthContext);

  const { supplier } = roles.LOGGED_AS;

  const [listItems, setListItems] = useState<ISidebar.IProps>({
    mainList: [],
    otherItemsList: [],
    myAccountListSider: loginUI.ITEMS_SIDER_ACCOUNT,
  });

  useEffect(() => {
    const SET_MAIN_LIST: any = {
      'MSP Administrator': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER,
          otherItemsList: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10].map(
            (id) => loginUI.ITEMS_SIDER_OTHERS[id]
          ) as [],
        })),
      'Program Manager': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER,
          otherItemsList: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10].map(
            (id) => loginUI.ITEMS_SIDER_OTHERS[id]
          ) as [],
        })),
      'MSP Finance': () =>
        setListItems((state) => ({
          ...state,
          mainList: [0, 3, 4, 5, 6].map((id) => loginUI.ITEMS_SIDER[id]) as [],
          otherItemsList: [4, 10].map(
            (id) => loginUI.ITEMS_SIDER_OTHERS[id]
          ) as [],
        })),
      'Program Representative': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER,
          otherItemsList: [0, 1, 2, 6, 9, 10].map(
            (id) => loginUI.ITEMS_SIDER_OTHERS[id]
          ) as [],
        })),
      'Buyer Administrator': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER,
          otherItemsList: [0, 2, 4, 5, 6, 7, 8, 9, 10].map((id) => {
            if (id === 2) {
              return {
                key: '/home/candidates',
                label: 'Self-sourced candidates',
              };
            }
            return loginUI.ITEMS_SIDER_OTHERS[id];
          }) as [],
        })),
      'Hiring Manager': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER,
          otherItemsList: [4].map((id) => loginUI.ITEMS_SIDER_OTHERS[id]) as [],
        })),
      'Buyer Finance': () =>
        setListItems((state) => ({
          ...state,
          mainList: [0, 3, 4, 5, 6].map((id) => loginUI.ITEMS_SIDER[id]) as [],
          otherItemsList: dataUser.is_self_served
            ? ([4, 10].map((id) => loginUI.ITEMS_SIDER_OTHERS[id]) as [])
            : ([4].map((id) => loginUI.ITEMS_SIDER_OTHERS[id]) as []),
        })),
      Delegate: () =>
        setListItems((state) => ({
          ...state,
          mainList: [0, 1, 2, 3, 4, 6].map(
            (id) => loginUI.ITEMS_SIDER[id]
          ) as [],
          otherItemsList: [],
        })),
      Approver: () =>
        setListItems((state) => ({
          ...state,
          mainList: [0, 1].map((id) => {
            if (id === 1) {
              return {
                key: '/home/approvals',
                label: 'Approvals',
                icon: iconApprovals,
              };
            }
            return loginUI.ITEMS_SIDER[id];
          }) as [],
          otherItemsList: [],
        })),
      Recruiter: () =>
        setListItems((state) => ({
          ...state,
          mainList: [0, 1, 2, 3, 4, 6].map(
            (id) => loginUI.ITEMS_SIDER[id]
          ) as [],
          otherItemsList: [
            {
              key: '/home/candidates',
              label: 'Self-sourced candidates',
            },
          ],
        })),
      'Supplier Administrator': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER as [],
          otherItemsList: [2, 4].map(
            (id) => loginUI.ITEMS_SIDER_OTHERS[id]
          ) as [],
        })),
      'Account Manager': () =>
        setListItems((state) => ({
          ...state,
          mainList: loginUI.ITEMS_SIDER as [],
          otherItemsList: [2].map((id) => loginUI.ITEMS_SIDER_OTHERS[id]) as [],
        })),
      'Supplier Finance': () =>
        setListItems((state) => ({
          ...state,
          mainList: [0, 3, 4, 5, 6].map((id) => loginUI.ITEMS_SIDER[id]) as [],
        })),
      default: () =>
        setListItems({
          mainList: [],
          otherItemsList: [],
          myAccountListSider: loginUI.ITEMS_SIDER_ACCOUNT,
        }),
    };

    if (userLevel === levels.msp && currentUserRole === supplier) {
      return SET_MAIN_LIST[USER_ROLES.SupplierAdministrator]();
    }

    if (user?.role && SET_MAIN_LIST[user?.role]) {
      return SET_MAIN_LIST[user!.role]();
    }

    return SET_MAIN_LIST.default();
  }, [user, userLevel, currentUserRole]);

  return listItems;
};

export default useItemsSider;
