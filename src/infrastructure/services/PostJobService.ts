import type { NextRouter } from 'next/router';

import type { IPostJobs } from '@/application/postJobsSlice/IPostJobsState';
import { routesServices } from '@/consts';

import { configGet, configPost } from '../api/configFetch';
import apiClient from '../api/index';
import { BASE_URL, createUrl } from '.';
import { UtilServices } from './utilsServices';

const { ROUTES_POST_JOBS } = routesServices;

export class PostJobService {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /** Create a new job.
   *
   * METHOD: POST
   */

  public createNewJob = async (dataForm: IPostJobs.IState) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, ROUTES_POST_JOBS.createJob)], dataForm)
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
   * get possible approvers
   *
   * Request Method: GET
   * Get possible approvers,
   */
  public getPossibleApprovers = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.possibleApprovers))
      );
      return response.data;
    } catch (error: any) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 400 ||
        error.response?.status === 403
      ) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * get possible hiring managers
   *
   * Request Method: GET
   * Get possible hiring managers,
   */
  public getPossibleHiringManagers = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.possibleHiringManagers))
      );
      return response.data;
    } catch (error: any) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 400 ||
        error.response?.status === 403
      ) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * get possible work shifts
   *
   * Request Method: GET
   * Get possible work shifts,
   */
  public getWorkShiftsByBuyer = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.workShiftsByBuyer))
      );
      return response.data;
    } catch (error: any) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 400 ||
        error.response?.status === 403
      ) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * get possible Countries
   *
   * Request Method: GET
   * Get countries,
   */
  public getCountries = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.countries))
      );
      return response.data;
    } catch (error: any) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 400 ||
        error.response?.status === 403
      ) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  /**
   * get provinces by country id
   *
   * Request Method: GET
   * Get provinces,
   */
  public getStatesProvinces = async (idCountry: string) => {
    try {
      const response = await apiClient(
        configGet(
          createUrl(
            BASE_URL,
            `${ROUTES_POST_JOBS.statesProvinces}=${idCountry}`
          )
        )
      );
      return response.data;
    } catch (error: any) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 400 ||
        error.response?.status === 403
      ) {
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
   * Get all business units by buyer that are allowed for the user.
   *
   */
  public getBusinessUnitsByBuyer = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.businessUnits))
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
   * get gl codes
   *
   * Request Method: GET
   * Get all business units by buyer that are allowed for the user.
   *
   */
  public getGlCodesByBuyer = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.glCodes))
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
   * get cost centers
   *
   * Request Method: GET
   * Get all cost centers by buyer that are allowed for the user.
   *
   */
  public getCostCentersByBuyer = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.costCenters))
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
   * get all suppliers by buyer
   *
   * Request Method: GET
   * Get all suppliers,
   */
  public getAllSuppliers = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, ROUTES_POST_JOBS.suppliers))
      );
      return response.data;
    } catch (error: any) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 400 ||
        error.response?.status === 403
      ) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };
}
