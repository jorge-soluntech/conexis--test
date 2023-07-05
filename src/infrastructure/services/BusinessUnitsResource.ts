/* eslint-disable class-methods-use-this */
import type { AxiosError } from 'axios';

import type { IBusinessUnits } from '@/components/common/businessUnitsComponents/businessUnits/IBusinessUnits';
import ResourceService from '@/infrastructure/services/ResourceService';

import axiosInstance from '../api/axiosClient';

interface ApiResponse<T> {
  data: T;
}

class BusinessUnitResource extends ResourceService<IBusinessUnits.DataBusinessUnits> {
  public toggle(
    id: string
  ): Promise<ApiResponse<IBusinessUnits.DataBusinessUnits>> {
    const url = `${this.resourceEndpoint}/${id}/isActive/toggle`;
    return this.axiosInstance
      .put<Promise<ApiResponse<IBusinessUnits.DataBusinessUnits>>>(url)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `Failed to get resource with ID ${id}: ${error.message}`
        );
      });
  }

  public transform({
    id,
    id_number,
    region,
    address,
    location,
    last_name,
    is_active,
    first_name,
    primary_email,
    primary_phone,
    business_unit_number,
  }: IBusinessUnits.DataBusinessUnits) {
    const nameBuOwner = `${first_name || ''} ${last_name || ''}`;
    return {
      key: id,
      region,
      address,
      location,
      idNumber: id_number,
      status: is_active,
      email: primary_email,
      lastName: last_name,
      buOwner: nameBuOwner,
      phone: primary_phone,
      firstName: first_name,
      businessUnitNumber: business_unit_number,
    };
  }
}

const resource = new BusinessUnitResource(axiosInstance, '/businessUnits');
export default resource;
