import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { SelectProps } from 'antd';
import type { NextRouter } from 'next/router';

import { postJobsUI } from '@/consts';
import { PostJobService } from '@/infrastructure/services/PostJobService';
import locales from '@/locales/en/en.json';

import type { IPostJobs } from './IPostJobsState';

const {
  postNewJob: { optionsPositionType },
} = locales;

const { OPTIONS_SAVE_STATUS } = postJobsUI;

export const createNewJob = createAsyncThunk(
  'create/job',
  async (
    dataCreate: { router: NextRouter; body: IPostJobs.IState },
    { rejectWithValue }
  ): Promise<IPostJobs.IState | any> => {
    const objJob = new PostJobService(dataCreate.router);
    try {
      const response = await objJob.createNewJob(dataCreate.body);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const readPossibleApprovers = createAsyncThunk(
  'read/approvers',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getPossibleApprovers();
      return response?.data.map(
        ({ id, full_name }: IPostJobs.ISelectOptions) => ({
          value: id,
          label: full_name,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readPossibleHiringManagers = createAsyncThunk(
  'read/hiringManagers',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getPossibleHiringManagers();
      return response?.data.map(
        ({ id, full_name }: IPostJobs.ISelectOptions) => ({
          value: id,
          label: full_name,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readWorkShiftsByBuyer = createAsyncThunk(
  'read/workShifts',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getWorkShiftsByBuyer();
      return response?.data.map(
        ({ id, work_shift_description }: IPostJobs.IWorkShiftsOptions) => ({
          value: id,
          label: work_shift_description,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readCountries = createAsyncThunk(
  'read/countries',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getCountries();
      return response?.data.map(
        ({ id, country_name }: IPostJobs.ICountriesOptions) => ({
          value: id,
          label: country_name,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readProvinces = createAsyncThunk(
  'read/provinces',
  async (
    dataRead: { router: NextRouter; idCountry: string },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getStatesProvinces(dataRead.idCountry);
      return response?.data.map(
        ({ id, state_or_province_name }: IPostJobs.IProvinceOptions) => ({
          value: id,
          label: state_or_province_name,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readBusinessUnitsByBuyer = createAsyncThunk(
  'read/businessUnits',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getBusinessUnitsByBuyer();
      return response?.data.map(
        ({ id, business_unit_number }: IPostJobs.IBusinessUnitsOptions) => ({
          value: id,
          label: business_unit_number,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readGlCodesByBuyer = createAsyncThunk(
  'read/glCodes',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getGlCodesByBuyer();
      return response?.data.map(
        ({ id, gl_code_description }: IPostJobs.IGlCodesOptions) => ({
          value: id,
          label: gl_code_description,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readCostCentersByBuyer = createAsyncThunk(
  'read/costCenters',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getCostCentersByBuyer();
      return response?.data.map(
        ({ id, cost_center_name }: IPostJobs.ICostCenterOptions) => ({
          value: id,
          label: cost_center_name,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

export const readSuppliersByBuyer = createAsyncThunk(
  'read/suppliers',
  async (
    dataRead: { router: NextRouter },
    { rejectWithValue }
  ): Promise<any> => {
    const objJob = new PostJobService(dataRead.router);
    try {
      const response = await objJob.getAllSuppliers();
      return response?.data?.suppliers.map(
        ({ id, supplier_company_name }: IPostJobs.ISuppliersOptions) => ({
          value: id,
          label: supplier_company_name,
        })
      );
    } catch (error) {
      return rejectWithValue(false);
    }
  }
);

const initialState: IPostJobs.IInitialState = {
  valuesFormPostJob: {
    save_status: '',
    job_title: null,
    number_of_positions: null,
    type_of_position: optionsPositionType.temporary,
    primary_hiring_manager: null,
    planned_start_date: null,
    business_unit_id: null,
    gl_code_id: null,
    cost_centers_ids: undefined,
    supplier_distribution_list_ids: undefined,
    skill_category: null,
    job_description_attachment: null,
    job_description: null,
    job_comments: null,
    work_shifts_ids: [undefined, undefined, undefined],
    street_address_line1: null,
    street_address_line2: null,
    country_id: null,
    province_region_id: null,
    city: null,
    postal_code: null,
    approvers_ids: undefined,
    planned_end_date: null,
    target_rate: null,
  } as IPostJobs.IState,
  loading: {
    loadingSave: false,
    loadingSend: false,
  },
  loadingDataForm: false,
  isPermanentJob: false,
  possibleApprovers: [] as SelectProps['options'],
  possibleHiringManagers: [] as SelectProps['options'],
  workShiftsByBuyer: [] as SelectProps['options'],
  selectedWorkShifts: [undefined, undefined, undefined],
  listCountries: [] as SelectProps['options'],
  listProvinces: [] as SelectProps['options'],
  businessUnitsByBuyer: [] as SelectProps['options'],
  glCodesByBuyer: [] as SelectProps['options'],
  costCentersByBuyer: [] as SelectProps['options'],
  suppliersByBuyer: [] as SelectProps['options'],
  valueSubmitStatus: null,
};

export const postJobSlice = createSlice({
  name: 'postJob',
  initialState,
  reducers: {
    setValuesFormPostJob: (state, action: PayloadAction<IPostJobs.IState>) => {
      state.valuesFormPostJob = action.payload;
    },
    resetValuesFormPostJob: (state) => {
      state.valuesFormPostJob = initialState.valuesFormPostJob;
    },
    setSelectedWorkShifts: (state, action: PayloadAction<any>) => {
      state.selectedWorkShifts = action.payload;
    },
    setClearProvinces: (state) => {
      state.listProvinces = [];
    },
    setValuePositionType: (state, action: PayloadAction<string>) => {
      if (action.payload !== optionsPositionType.temporary) {
        state.isPermanentJob = true;
        return;
      }
      state.isPermanentJob = false;
    },
    setValueSubmitStatus: (state, action: PayloadAction<string>) => {
      state.valueSubmitStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewJob.pending, (state) => {
        // While the createNewJob request is pending update loading state to be true but only if is initially false.
        if (state.valueSubmitStatus === OPTIONS_SAVE_STATUS.isSentNow) {
          state.loading.loadingSend = true;
          return;
        }
        state.loading.loadingSave = true;
      })
      .addCase(createNewJob.fulfilled, (state) => {
        state.loading.loadingSave = false;
        state.loading.loadingSend = false;
      })
      .addCase(createNewJob.rejected, (state) => {
        state.loading.loadingSave = false;
        state.loading.loadingSend = false;
      })
      .addCase(readPossibleApprovers.fulfilled, (state, action) => {
        state.possibleApprovers = action.payload;
      })
      .addCase(readPossibleApprovers.rejected, (state) => ({ ...state }))
      .addCase(readPossibleHiringManagers.pending, (state, _action) => {
        if (state.loadingDataForm === false) state.loadingDataForm = true;
      })
      .addCase(readPossibleHiringManagers.fulfilled, (state, action) => {
        state.possibleHiringManagers = action.payload;
        state.loadingDataForm = false;
      })
      .addCase(readPossibleHiringManagers.rejected, (state) => ({ ...state }))
      .addCase(readWorkShiftsByBuyer.fulfilled, (state, action) => {
        state.workShiftsByBuyer = action.payload;
      })
      .addCase(readWorkShiftsByBuyer.rejected, (state) => ({ ...state }))
      .addCase(readCountries.fulfilled, (state, action) => {
        state.listCountries = action.payload;
      })
      .addCase(readCountries.rejected, (state) => ({ ...state }))
      .addCase(readProvinces.fulfilled, (state, action) => {
        state.listProvinces = action.payload;
      })
      .addCase(readProvinces.rejected, (state) => ({ ...state }))
      .addCase(readBusinessUnitsByBuyer.fulfilled, (state, action) => {
        state.businessUnitsByBuyer = action.payload;
      })
      .addCase(readBusinessUnitsByBuyer.rejected, (state) => ({ ...state }))
      .addCase(readGlCodesByBuyer.fulfilled, (state, action) => {
        state.glCodesByBuyer = action.payload;
      })
      .addCase(readGlCodesByBuyer.rejected, (state) => ({ ...state }))
      .addCase(readCostCentersByBuyer.fulfilled, (state, action) => {
        state.costCentersByBuyer = action.payload;
      })
      .addCase(readCostCentersByBuyer.rejected, (state) => ({ ...state }))
      .addCase(readSuppliersByBuyer.fulfilled, (state, action) => {
        state.suppliersByBuyer = action.payload;
        state.loadingDataForm = false;
      })
      .addCase(readSuppliersByBuyer.rejected, (state) => ({ ...state }));
  },
});

export const {
  setValuesFormPostJob,
  resetValuesFormPostJob,
  setSelectedWorkShifts,
  setClearProvinces,
  setValuePositionType,
  setValueSubmitStatus,
} = postJobSlice.actions;

export default postJobSlice.reducer;
