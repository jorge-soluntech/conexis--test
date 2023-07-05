import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TABLET_BREAKPOINT } from '@/consts/login_ui';

// Define a type for the slice state
type UiState = {
  showSuccessReset: boolean;
  widthCollapseSider: number;
  collapseSider: boolean | undefined;
  classNameSider: string | undefined;
};

const wSizeSider = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  if (window.innerWidth >= TABLET_BREAKPOINT) {
    return 'sider_activated';
  }

  return '';
};

const initialState: UiState = {
  /** The state of reset alert in auth pages */
  showSuccessReset: false,
  widthCollapseSider: 364,
  /** The state of collapse sidebar */
  collapseSider: undefined,
  /** The className of sidebar */
  classNameSider: wSizeSider(),
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setShowSuccessReset: (state) => {
      state.showSuccessReset = !state.showSuccessReset;
    },
    setCollapseSider: (state, action: PayloadAction<boolean>) => {
      state.collapseSider = action.payload;
    },
    setClassNameSider: (state, action: PayloadAction<string>) => {
      state.classNameSider = action.payload;
    },
    closeSider: (state) => {
      state.collapseSider = true;
      state.classNameSider = '';
    },
  },
});

export const {
  setShowSuccessReset,
  setCollapseSider,
  setClassNameSider,
  closeSider,
} = uiSlice.actions;

export default uiSlice.reducer;
