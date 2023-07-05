import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { levels } from '@/consts';

// Define a type for the slice state
type RoleState = {
  /** show the select buyers or supplier on the sidebar */
  showSelectBuyerOrSupplier: boolean;
  /** show the toggle buyers or supplier on the navbar */
  showSwitchBuyerOrSupplier: boolean;
  /** show the main list of items on the sidebar */
  showMainListItemsSider: boolean;
  /** show the list of other actions on the sidebar */
  showListOtherActionsSider: boolean;
  /** show the link "tutorials" on the navbar */
  showTutorialslink: boolean;
  /** show the item "settings" on the my account dropdown */
  showSettingsItem: boolean;
  /** show the button "Post a job" on the navbar */
  showPostJobButton: boolean;
  /** show the Metrics section */
  showMetrics: boolean;
  /** show the dashboard section */
  showDashboard: boolean;
  /** show the select name on the side bar */
  showSelectNameSideBar: boolean;
  /** show the level of the user */
  userLevel: string;
};

const initialState: RoleState = {
  showSelectBuyerOrSupplier: true,
  showSwitchBuyerOrSupplier: true,
  showMainListItemsSider: true,
  showListOtherActionsSider: true,
  showTutorialslink: true,
  showSettingsItem: true,
  showPostJobButton: true,
  showMetrics: true,
  showDashboard: true,
  showSelectNameSideBar: true,
  userLevel: '',
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    permissionsByRole: (state, action: PayloadAction<string>) => {
      const SELECT_ROLE: any = {
        'MSP Administrator': () => {
          state.userLevel = levels.msp;
        },
        'Program Manager': () => {
          state.userLevel = levels.msp;
        },
        'MSP Finance': () => {
          state.showPostJobButton = false;
          state.userLevel = levels.msp;
        },
        'Program Representative': () => {
          state.userLevel = levels.msp;
        },
        'Buyer Administrator': () => {
          state.showMetrics = false;
          state.showSelectBuyerOrSupplier = false;
          state.showSwitchBuyerOrSupplier = false;
          state.userLevel = levels.buyer;
        },
        'Hiring Manager': () => {
          state.showMetrics = false;
          state.showSelectBuyerOrSupplier = false;
          state.showSwitchBuyerOrSupplier = false;
          state.userLevel = levels.buyer;
        },
        'Buyer Finance': () => {
          state.showPostJobButton = false;
          state.showSelectBuyerOrSupplier = false;
          state.showSwitchBuyerOrSupplier = false;
          state.userLevel = levels.buyer;
        },
        Delegate: () => {
          state.showSwitchBuyerOrSupplier = false;
          state.showMetrics = false;
          state.showListOtherActionsSider = false;
          state.showSelectNameSideBar = false;
          state.userLevel = levels.buyer;
        },
        Approver: () => {
          state.showPostJobButton = false;
          state.showSelectBuyerOrSupplier = false;
          state.showSwitchBuyerOrSupplier = false;
          state.showListOtherActionsSider = false;
          state.showMetrics = false;
          state.userLevel = levels.buyer;
        },
        Recruiter: () => {
          state.showSelectBuyerOrSupplier = false;
          state.showSwitchBuyerOrSupplier = false;
          state.showMetrics = false;
          state.userLevel = levels.buyer;
        },
        'Supplier Administrator': () => {
          state.showSwitchBuyerOrSupplier = false;
          state.showPostJobButton = false;
          state.userLevel = levels.supplier;
        },
        'Account Manager': () => {
          state.showSwitchBuyerOrSupplier = false;
          state.showPostJobButton = false;
          state.showMetrics = false;
          state.userLevel = levels.supplier;
        },
        'Supplier Finance': () => {
          state.showSwitchBuyerOrSupplier = false;
          state.showPostJobButton = false;
          state.showMetrics = false;
          state.showListOtherActionsSider = false;
          state.userLevel = levels.supplier;
        },
        default: () => {
          state.showSelectBuyerOrSupplier = false;
          state.showSwitchBuyerOrSupplier = false;
          state.showMainListItemsSider = false;
          state.showListOtherActionsSider = false;
          state.showTutorialslink = false;
          state.showSettingsItem = false;
          state.showPostJobButton = false;
          state.showMetrics = false;
          state.showDashboard = false;
          state.userLevel = '';
        },
      };

      return SELECT_ROLE[action.payload]
        ? SELECT_ROLE[action.payload]()
        : SELECT_ROLE.default();
    },
    resetRole: () => initialState,
    hidePostJobButtonForMSP: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        state.showPostJobButton = false;
        return;
      }
      state.showPostJobButton = true;
    },
  },
});

export const { permissionsByRole, resetRole, hidePostJobButtonForMSP } =
  roleSlice.actions;

export default roleSlice.reducer;
