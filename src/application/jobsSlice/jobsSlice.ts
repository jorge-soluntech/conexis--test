import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import type { NextRouter } from 'next/router';

import { shortDateFormat } from '@/consts/forms_general';
import { JobsServices } from '@/infrastructure/services/JobsServices';
import locales from '@/locales/en/en.json';

import type { IJobs } from './IJobsState';

const {
  consts: { emptyLabel },
} = locales;

const initialState: IJobs.IState = {
  allJobs: [],
  selectedJobId: '',
  isModalFillJob: false,
  isModalCancelJob: false,
  isModalDuplicateJob: false,
  isIndividual: false,
  isModalOpenJob: false,
  isModalDelete: false,
  isModalOnHoldJob: false,
};

export const getAllJobs = createAsyncThunk(
  'get/allJobs',
  async (
    data: { router: NextRouter; currentUserRole: string },
    { rejectWithValue }
  ): Promise<any> => {
    const jobsServices = new JobsServices(data.router);
    try {
      const response = await jobsServices.getAllJobs(data.currentUserRole);
      return response.data.map((item: any) => ({
        key: item.id,
        jobId: item.job_id,
        jobTitle: item.job_title,
        typeOfPosition: item.type_of_position,
        status: item.status,
        numberOfPositions: item.number_of_positions,
        filledPositions: item.filled_positions,
        submissionsCount: item.submissions_count,
        postedOn: item?.posted_on
          ? dayjs(item.posted_on).format(shortDateFormat)
          : emptyLabel,
        plannedStartDate: dayjs(item.planned_start_date).format(
          shortDateFormat
        ),
        plannedEndDate: item?.planned_end_date
          ? dayjs(item.planned_end_date).format(shortDateFormat)
          : null,
        businessUnit: item.business_unit?.business_unit_number || null,
      }));
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setModalFillJob: (state, action: PayloadAction<boolean>) => {
      state.isModalFillJob = action.payload;
    },
    setModalCancelJob: (state, action: PayloadAction<boolean>) => {
      state.isModalCancelJob = action.payload;
    },
    setModalDuplicateJob: (state, action: PayloadAction<boolean>) => {
      state.isModalDuplicateJob = action.payload;
    },
    setModalOpenJob: (state, action: PayloadAction<boolean>) => {
      state.isModalOpenJob = action.payload;
    },
    setModalDelete: (
      state,
      action: PayloadAction<{
        isIndividual: boolean | undefined;
        isModalOpened: boolean;
      }>
    ) => {
      state.isIndividual = action.payload.isIndividual;
      state.isModalDelete = action.payload.isModalOpened;
    },
    setCloseModals: (state) => {
      state.isModalDelete = false;
    },
    setModalOnHoldJob: (state, action: PayloadAction<boolean>) => {
      state.isModalOnHoldJob = action.payload;
    },
    setSelectedJobId: (state, action: PayloadAction<string>) => {
      state.selectedJobId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.allJobs = action.payload;
      })
      .addCase(getAllJobs.rejected, (state) => ({ ...state }));
  },
});

export const {
  setModalFillJob,
  setModalCancelJob,
  setModalDuplicateJob,
  setSelectedJobId,
  setModalOpenJob,
  setModalDelete,
  setCloseModals,
  setModalOnHoldJob,
} = jobsSlice.actions;

export default jobsSlice.reducer;
