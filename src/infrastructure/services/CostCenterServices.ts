/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import { configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class CostCenterServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  public createCostCenter = async (dataForm: {
    id_tenant: number | undefined;
    cost_center: string;
    cost_center_name: string;
    buyer: string | undefined;
  }) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/costCenters/create')], dataForm)
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
   * toggle cost center status for the field is_active
   *
   * Method: PUT
   *
   * @param id - id cost center string
   */
  public toggleCostCentersStatus = async (id: string) => {
    try {
      const response = await apiClient(
        configPut(
          [createUrl(BASE_URL, `/costCenters/${id}/isActive/toggle`)],
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
