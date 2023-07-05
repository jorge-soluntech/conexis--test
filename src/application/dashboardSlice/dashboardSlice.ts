import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { roles } from '@/consts';
import RequestService from '@/infrastructure/services';
import resource from '@/infrastructure/services/JobsResource';
import locale from '@/locales/en/en.json';

const {
  consts: { catchError },
} = locale;

// Define a type for the slice state
type DashboardState = {
  currentUserRole: string | null;
  currentUserRoleName: string | null;
  loadingDataMetrics: boolean;
  titleDashboardMSP: string;
  jobsToApprove: number;
  error: unknown;
};

export const updateUserLogged = createAsyncThunk(
  'utils/loggedUser',
  async (idLogged: any, { rejectWithValue }): Promise<any> => {
    try {
      await RequestService.updateLoggedBuyerOrSupplier({
        dataBody: idLogged,
      });
      return true;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const getJobsPendingApprove = createAsyncThunk(
  'get/jobsApproval',
  async (_, { rejectWithValue }): Promise<any> => {
    try {
      const result = await resource.pendingApproval();
      return result.data.length;
    } catch (error: any) {
      return rejectWithValue(error?.message ?? catchError);
    }
  }
);

const initialState: DashboardState = {
  /** The current role of user logged Buyer or Supplier */
  currentUserRole: '',
  currentUserRoleName: '',
  loadingDataMetrics: false,
  titleDashboardMSP: 'Conexis',
  jobsToApprove: 0,
  error: '',
};

export const dashboardSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentUserRole: (state, action: PayloadAction<string>) => {
      localStorage.setItem(roles.KEY_ROLE_LOCALSTORAGE, action.payload);
      state.currentUserRole = action.payload;
    },
    setCurrentUserRoleName: (state, action: PayloadAction<string | null>) => {
      state.currentUserRoleName = action.payload;
    },
    setLoadingDataMetrics: (state, action: PayloadAction<boolean>) => {
      state.loadingDataMetrics = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserLogged.fulfilled, (state) => ({ ...state }))
      .addCase(updateUserLogged.rejected, (state) => ({ ...state }))
      .addCase(getJobsPendingApprove.fulfilled, (state, action) => {
        state.jobsToApprove = action.payload;
      })
      .addCase(getJobsPendingApprove.rejected, (state, action) => {
        // TODO:pending validation how the error will be displayed to the user
        state.error = action.payload;
      });
  },
});

export const {
  setCurrentUserRole,
  setCurrentUserRoleName,
  setLoadingDataMetrics,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
