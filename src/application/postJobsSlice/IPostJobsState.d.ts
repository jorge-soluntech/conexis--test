type StringOrNullType = string | null;
type NumberOrNullType = number | null;

declare namespace IPostJobs {
  export interface IState {
    save_status: StringOrNullType;
    job_title: StringOrNullType;
    number_of_positions: NumberOrNullType;
    type_of_position: StringOrNullType;
    primary_hiring_manager: StringOrNullType;
    planned_start_date: StringOrNullType;
    business_unit_id?: StringOrNullType;
    gl_code_id?: StringOrNullType;
    cost_centers_ids?: string[] | null;
    supplier_distribution_list_ids?: string[] | null;
    skill_category?: StringOrNullType;
    job_description_attachment?: StringOrNullType;
    job_description?: StringOrNullType;
    job_comments?: StringOrNullType;
    work_shifts_ids?: string[] | undefined[];
    street_address_line1?: StringOrNullType;
    street_address_line2?: StringOrNullType;
    country_id?: StringOrNullType;
    province_region_id?: StringOrNullType;
    city?: StringOrNullType;
    postal_code?: StringOrNullType;
    approvers_ids: string[] | undefined;
    planned_end_date: StringOrNullType;
    salary_low?: NumberOrNullType;
    salary_high?: NumberOrNullType;
    target_rate: NumberOrNullType;
  }

  export interface IInitialState {
    valuesFormPostJob: IState;
    loading: {
      loadingSave: boolean;
      loadingSend: boolean;
    };
    loadingDataForm: boolean;
    isPermanentJob: boolean;
    possibleApprovers: SelectProps['options'];
    possibleHiringManagers: SelectProps['options'];
    workShiftsByBuyer: SelectProps['options'];
    selectedWorkShifts: Array<undefined>;
    listCountries: SelectProps['options'];
    listProvinces: SelectProps['options'];
    businessUnitsByBuyer: SelectProps['options'];
    glCodesByBuyer: SelectProps['options'];
    costCentersByBuyer: SelectProps['options'];
    suppliersByBuyer: SelectProps['options'];
    valueSubmitStatus: string | null;
  }

  export interface ISelectOptions {
    id: string;
    full_name: string;
    user_roles?: string[];
  }

  export interface IWorkShiftsOptions {
    id: string;
    work_shift_description: string;
  }

  export interface ICountriesOptions {
    id: string;
    country_name: string;
  }

  export interface IProvinceOptions {
    id: string;
    state_or_province_name: string;
  }

  export interface IBusinessUnitsOptions {
    id: string;
    business_unit_number: string;
  }

  export interface IGlCodesOptions {
    id: string;
    gl_code_description: string;
  }

  export interface ICostCenterOptions {
    id: string;
    cost_center_name: string;
  }

  export interface ISuppliersOptions {
    id: string;
    supplier_company_name: string;
  }
}

export { IPostJobs };
