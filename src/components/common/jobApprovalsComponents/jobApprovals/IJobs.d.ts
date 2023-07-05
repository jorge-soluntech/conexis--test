declare namespace IJobs {
  export interface Object {
    [key: string]: string;
  }

  export interface WorkShift {
    id: string;
    work_shift_description: string;
    start_time: string;
    end_time: string;
    work_days: string[];
  }
  export interface DataJobs {
    job_id: string;
    job_title: string;
    type_of_position: string;
    planned_start_date: string;
    planned_end_date: string;
    number_of_positions: number;
    skill_category: string;
    account_primary_hiring_manager: Object;
    street_address_line1: string;
    province_region: Object;
    country: Object;
    postal_code: string;
    target_rate: string;
    business_unit: Object;
    job_comments: string;
    supplier_distribution_list: Object[];
    salary_low: number;
    salary_high: number;
    job_description: string;
    job_description_attachment: string;
    work_shifts: WorkShift[];
  }

  export interface DataJobsMapped {
    key: string;
    jobTitle: string;
    positionType: string;
    plannedStartDate: string;
    plannedEndDate: string;
    numberPositions: string;
    skillCategory: string;
    hiringManager: Object;
    workAddress: string;
    province: string;
    country: string;
    postalCode: string;
    targetRate: string;
    businessUnit: string;
    jobComments: string;
    supplierDistributionList: string;
    salaryHigh: string;
    salaryLow: string;
    jobDescription: string;
    jobDescriptionAttachment: string;
    workShifts: WorkShift[];
  }
}

export { IJobs };
