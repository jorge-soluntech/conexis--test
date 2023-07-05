/* eslint-disable class-methods-use-this */
import type { AxiosError } from 'axios';
import dayjs from 'dayjs';

import type { IJobs } from '@/components/common/jobApprovalsComponents/jobApprovals/IJobs';
import { ENDPOINT_JOBS, ENDPOINT_JOBS_APPROVAL_GET } from '@/consts/endpoints';
import ResourceService from '@/infrastructure/services/ResourceService';

import axiosInstance from '../api/axiosClient';

interface ApiResponse<T> {
  data: T;
}

class JobsResource extends ResourceService<IJobs.DataJobs> {
  public pendingApproval(): Promise<ApiResponse<any>> {
    const url = `${this.resourceEndpoint}${ENDPOINT_JOBS_APPROVAL_GET}`;
    return this.axiosInstance
      .get<Promise<ApiResponse<IJobs.DataJobs>>>(url)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(`Failed to get resource: ${error.message}`);
      });
  }

  public transform({
    job_id,
    job_title,
    type_of_position,
    planned_start_date,
    planned_end_date,
    number_of_positions,
    skill_category,
    account_primary_hiring_manager,
    street_address_line1,
    province_region,
    country,
    postal_code,
    target_rate,
    business_unit,
    job_comments,
    supplier_distribution_list,
    salary_low,
    salary_high,
    job_description,
    job_description_attachment,
    work_shifts,
  }: IJobs.DataJobs) {
    return {
      key: job_id,
      jobTitle: job_title,
      positionType: type_of_position,
      plannedStartDate: planned_start_date
        ? dayjs(planned_start_date).format('DD MMM YYYY')
        : '-',
      plannedEndDate: planned_end_date
        ? dayjs(planned_end_date).format('DD MMM YYYY')
        : '-',
      numberPositions: number_of_positions ?? '-',
      skillCategory: skill_category ?? '-',
      hiringManager: account_primary_hiring_manager,
      workAddress: street_address_line1 ?? '-',
      province: province_region?.state_or_province_name ?? '-',
      country: country?.country_name ?? '-',
      postalCode: postal_code ?? '-',
      targetRate: target_rate ?? '-',
      businessUnit: business_unit.business_unit_number ?? '-',
      jobComments: job_comments ?? '-',
      supplierDistributionList: supplier_distribution_list.length
        ? supplier_distribution_list
            .map((item) => item.supplier_company_name)
            .join(', ')
        : '-',
      salaryHigh: salary_high ? `$${salary_high}` : '-',
      salaryLow: salary_low ? `$${salary_low}` : '-',
      jobDescription: job_description ?? '-',
      jobDescriptionAttachment: job_description_attachment,
      workShifts: work_shifts,
    };
  }
}

const service = new JobsResource(axiosInstance, ENDPOINT_JOBS);
export default service;
