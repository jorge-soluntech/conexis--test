/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-extraneous-dependencies

import type { AxiosError } from 'axios';

import type { ICostCenter } from '@/components/common/costCenterComponents/costCenter/ICostCenter';
import { COST_CENTER_ENDPOINTS } from '@/consts/cost_centers_ui';
import axiosInstance from '@/infrastructure/api/axiosClient';
import ResourceService from '@/infrastructure/services/ResourceService';

interface ApiResponse<T> {
  data: T;
}

class CostCenterResource extends ResourceService<ICostCenter.IProps> {
  public toggle(id: string): Promise<ApiResponse<ICostCenter.IProps>> {
    const url = `${this.resourceEndpoint}/${id}/${COST_CENTER_ENDPOINTS.active_toggle}`;
    return this.axiosInstance
      .put<Promise<ApiResponse<ICostCenter.IProps>>>(url)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `Failed to get resource with ID ${id}: ${error.message}`
        );
      });
  }

  public transform({
    id,
    is_active,
    cost_center,
    cost_center_name,
  }: ICostCenter.IProps) {
    return {
      key: id,
      cost_center,
      cost_center_name,
      status: is_active,
    };
  }
}
const service = new CostCenterResource(axiosInstance, '/costCenters');
export default service;
