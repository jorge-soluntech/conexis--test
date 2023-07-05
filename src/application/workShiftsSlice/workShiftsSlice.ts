import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NextRouter } from 'next/router';

import { shortDayNames } from '@/consts/shortDayNames';
import { WorkShiftsService } from '@/infrastructure/services/WorkShiftsServices';
import locales from '@/locales/en/en.json';
import downloadFile from '@/utils/downloadFile';

import type { IWorkShifts } from './IWorkShiftsState';

const activeValue = 'Active';
const inactiveValue = 'Inactive';
const {
  workShifts: { errorDeactivated },
} = locales;

export const createWorkShift = createAsyncThunk(
  'create/workShifts',
  async (
    dataCreate: { router: NextRouter; body: IWorkShifts.IState },
    { rejectWithValue }
  ): Promise<any> => {
    const workShift = new WorkShiftsService(dataCreate.router);
    try {
      await workShift.createWorkShifts(dataCreate.body);
      return true;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const getAllWorkShift = createAsyncThunk(
  'get/workShifts',
  async (
    dataCreate: { router: NextRouter; id: string },
    { rejectWithValue }
  ): Promise<any> => {
    const workShift = new WorkShiftsService(dataCreate.router);
    try {
      const response = await workShift.getAllWorkShifts(dataCreate.id);
      return response.data.map(
        ({
          id,
          work_shift_description,
          start_time,
          end_time,
          work_days,
          status,
        }: any) => ({
          key: id,
          workShiftDescription: work_shift_description,
          startTime: start_time,
          endTime: end_time,
          workDays: work_days
            .map((day: string) => shortDayNames[day])
            .join(', '),
          status: status === activeValue,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const toggleStatusWorkShift = createAsyncThunk(
  'status/workShifts',
  async (
    dataUpdate: { router: NextRouter; id: string; status: boolean },
    { rejectWithValue }
  ): Promise<any> => {
    const workShift = new WorkShiftsService(dataUpdate.router);
    try {
      const response = await workShift.updateWorkShifts(dataUpdate.id, {
        status: dataUpdate.status === true ? activeValue : inactiveValue,
      });
      return { status: response.status, id: dataUpdate.id };
    } catch (error: any) {
      return rejectWithValue(false);
    }
  }
);

export const exportWorkShifts = createAsyncThunk(
  'export/workShifts',
  async (
    dataExport: { router: NextRouter; type: string },
    { rejectWithValue }
  ): Promise<any> => {
    const workShift = new WorkShiftsService(dataExport.router);
    try {
      const response = await workShift.exportWorkShifts(dataExport.type);
      downloadFile('workShifts', dataExport.type, response);
      return true;
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

const initialState = {
  errorWorkShifts: '' as string,
  showErrorWorkShifts: false as boolean,
  allWorkShifts: [] as IWorkShifts.IAllWorkShifts[],
  valuesFormCreate: {
    work_shift_description: null,
    start_time: null,
    end_time: null,
    work_days: [],
    id_tenant: 9,
    buyer_id: '',
  } as IWorkShifts.IState,
};

export const workShiftSlice = createSlice({
  name: 'workShifts',
  initialState,
  reducers: {
    setValuesWorkShift: (state, action: PayloadAction<IWorkShifts.IState>) => {
      state.valuesFormCreate = action.payload;
    },
    setErrorWorkShifts: (state, action: PayloadAction<boolean>) => {
      state.showErrorWorkShifts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWorkShift.fulfilled, (state) => ({ ...state }))
      .addCase(createWorkShift.rejected, (state) => ({ ...state }))
      .addCase(getAllWorkShift.fulfilled, (state, action) => {
        state.allWorkShifts = action.payload;
      })
      .addCase(getAllWorkShift.rejected, (state) => ({ ...state }))
      .addCase(toggleStatusWorkShift.fulfilled, (state, action) => {
        const toggledWorkShiftId = action.payload.id;
        const allWorkShifts = state.allWorkShifts.map((workShift) => {
          if (workShift.key === toggledWorkShiftId) {
            return {
              ...workShift,
              status: !workShift.status,
            };
          }
          return workShift;
        });
        state.allWorkShifts = allWorkShifts;
      })
      .addCase(toggleStatusWorkShift.rejected, (state) => {
        state.errorWorkShifts = errorDeactivated;
        state.showErrorWorkShifts = true;
      })
      .addCase(exportWorkShifts.fulfilled, (state) => ({ ...state }))
      .addCase(exportWorkShifts.rejected, (state) => ({ ...state }));
  },
});

export const { setValuesWorkShift, setErrorWorkShifts } =
  workShiftSlice.actions;

export default workShiftSlice.reducer;
