import type { NextRouter } from 'next/router';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE;

export class GLCodesServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /**
   * Get all gl codes that the user has permission to see, based on the role and logged buyer
   *
   * METHOD: GET
   */
  public getGLCodes = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, '/glCodes/findAll'))
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
   * toggle gl code status for the field is_active
   *
   * Method: PUT
   *
   * @param {string} id - id gl code
   */
  public toggleGLCode = async (id: any) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, `/glCodes/${id}/isActive/toggle`)], {})
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

  /* creates a gl code. */
  public createGlCode = async (dataForm: {
    id_tenant: number | undefined;
    gl_code: string;
    description: string;
  }) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/glCodes/create')], dataForm)
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
}
