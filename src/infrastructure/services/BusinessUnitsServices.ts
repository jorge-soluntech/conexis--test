/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class BusinessUnitServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  public createBusinessUnit = async (dataForm: {
    id_tenant: number | undefined;
    business_unit_number: string;
    first_name: string | undefined;
    last_name: string | undefined;
    primary_email: string | undefined;
    primary_phone: string | undefined;
    address: string | undefined;
    location: string | undefined;
  }) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/businessUnits/create')], dataForm)
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  public getBusinessUnit = async (dataForm: {
    id_tenant: number | undefined;
    business_unit_number: string;
    region: string | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    primary_email: string | undefined;
    primary_phone: string | undefined;
    address: string | undefined;
    location: string | undefined;
  }) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/businessUnits/create')], dataForm)
      );

      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * get business units
   *
   * Request Method: GET
   * Get all business units that are allowed for the user. Depending on the user's role,
   * the user will only have access to the business unit of the same buyer and tenant.
   *
   */
  public getBusinessUnits = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, '/businessUnits/readAll'))
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * get business unit by id
   *
   * Request Method: GET
   * @param id - id business unit string
   *
   */
  public getBusinessUnitById = async (id: any) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/businessUnits/${id}`))
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * Update business unit by id
   *
   * Request Method: PUT
   *
   * @param id - id business unit string
   * @param data - payload with the data to update
   * @returns returns the request response
   */
  public updateBusinessUnit = async (
    id: string,
    data: {
      region?: string | undefined;
      first_name?: string | undefined;
      last_name?: string | undefined;
      primary_email?: string | undefined;
      primary_phone?: string | undefined;
      address?: string | undefined;
      is_active?: boolean | undefined;
    }
  ) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, `/businessUnits/${id}`)], data)
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * toggle business unit status for the field is_active
   *
   * Method: PUT
   *
   * @param id - id id business unit string
   */
  public toggleBusinessUnit = async (id: string) => {
    try {
      const response = await apiClient(
        configPut(
          [createUrl(BASE_URL, `/businessUnits/${id}/isActive/toggle`)],
          {}
        )
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 400) {
        return {
          statusCode: error.response.data.statusCode,
          message: error.response.data.message,
        };
      }
      if (error.response?.status === 404) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };
}
