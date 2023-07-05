import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NextRouter } from 'next/router';

import type { ITableCandidates } from '@/components/common/candidatesComponents/tableCandidates/ITableCandidates';
import { roles } from '@/consts';
import { CandidatesService } from '@/infrastructure/services/CandidatesServices';

import { readOnboardingItems } from '../onboardingSlice/onboardingSlice';
import type { ICandidates } from './ICandidatesState';

export const readCandidates = createAsyncThunk(
  'read/candidates',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const candidate = new CandidatesService(dataRead.router);
    try {
      const response = await candidate.getCandidates(
        localStorage.getItem(roles.KEY_ROLE_LOCALSTORAGE)
      );
      return {
        totalRecords: response.data.total_records,
        listData: response.data?.workers.map(
          ({ id, full_name, email, worker_status }: any) => {
            return {
              key: id,
              fullName: full_name,
              email,
              workerStatus: worker_status,
            };
          }
        ),
      };
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const createCandidate = createAsyncThunk(
  'create/candidate',
  async (
    dataCreate: { router: NextRouter; body: ICandidates.IState },
    { rejectWithValue }
  ): Promise<any> => {
    const objWorker = new CandidatesService(dataCreate.router);
    try {
      const response = await objWorker.createCandidate(
        dataCreate.body,
        localStorage.getItem(roles.KEY_ROLE_LOCALSTORAGE)
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateWorkerStatus = createAsyncThunk(
  'update/candidate',
  async (
    dataCreate: {
      router: NextRouter;
      body: ICandidates.IUpdateCandidate;
      idCandidate: string;
    },
    { rejectWithValue, dispatch }
  ): Promise<any> => {
    const objWorker = new CandidatesService(dataCreate.router);
    try {
      const response = await objWorker.updateCandidate(
        dataCreate.body,
        dataCreate.idCandidate
      );
      dispatch(readCandidates({ router: dataCreate.router }));
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  valuesFormCreate: {
    id_tenant: 9,
    first_name: null,
    last_name: null,
    email: null,
    worker_status: null,
  } as ICandidates.IState,
  page: 1,
  errorCandidates: '' as string,
  showErrorCandidates: false as boolean,
  allCandidates: [] as ICandidates.IAllCandidates[],
  loading: false,
  openModal: false,
  confirmLoading: false,
  infoCandidate: {} as ICandidates.IAllCandidates,
  totalRecords: 0,
  filters: {
    status: [],
  } as ITableCandidates.Filter,
  isModalWarningEmail: false,
};

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setValuesCandidate: (state, action: PayloadAction<ICandidates.IState>) => {
      state.valuesFormCreate = action.payload;
    },
    setErrorCandidates: (state, action: PayloadAction<boolean>) => {
      state.showErrorCandidates = action.payload;
    },
    showModal: (state, action: PayloadAction<ICandidates.IAllCandidates>) => {
      state.openModal = true;
      state.infoCandidate = action.payload;
    },
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    clearInfoCandidate: (state) => {
      state.infoCandidate = {} as ICandidates.IAllCandidates;
    },
    setConfirmLoading: (state, action: PayloadAction<boolean>) => {
      state.confirmLoading = action.payload;
    },
    setFilters: (state, action: PayloadAction<any>) => {
      state.filters.status = action.payload ? action.payload : [];
    },
    setModalWarningEmail: (state, action: PayloadAction<boolean>) => {
      state.isModalWarningEmail = action.payload;
    },
    resetValuesFormCandidates: (state) => {
      state.valuesFormCreate = initialState.valuesFormCreate;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCandidate.fulfilled, (state) => ({ ...state }))
      .addCase(createCandidate.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createCandidate.pending, (state, _action) => {
        if (state.loading === false) state.loading = true;
      })
      .addCase(readCandidates.pending, (state, _action) => {
        if (state.loading === false) state.loading = true;
      })
      .addCase(readCandidates.fulfilled, (state, action) => {
        state.totalRecords = action.payload.totalRecords;
        state.allCandidates = action.payload.listData;
        state.loading = false;
      })
      .addCase(readOnboardingItems.rejected, (state) => ({ ...state }))
      .addCase(updateWorkerStatus.fulfilled, (state, _action) => {
        state.openModal = false;
        state.confirmLoading = false;
      })
      .addCase(updateWorkerStatus.rejected, (state) => ({ ...state }))
      .addCase(updateWorkerStatus.pending, (state, _action) => {
        if (state.confirmLoading === false) state.confirmLoading = true;
      });
  },
});

export const {
  setValuesCandidate,
  setPage,
  setErrorCandidates,
  showModal,
  setOpenModal,
  setConfirmLoading,
  setFilters,
  setModalWarningEmail,
  resetValuesFormCandidates,
  clearInfoCandidate,
} = candidateSlice.actions;

export default candidateSlice.reducer;
