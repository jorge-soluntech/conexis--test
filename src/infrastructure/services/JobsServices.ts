import type { NextRouter } from 'next/router';

import { axiosCall } from '../api/axiosClient';
import { AXIOS_METHODS, configGet, configPost } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE;

export class JobsServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /**
   * This endpoint returns all the jobs that a user can read depending on his role,
   * the returned columns also depend on the user's role.
   */
  public getAllJobs = async (msp: string) => {
    return axiosCall({
      method: AXIOS_METHODS.get,
      endpoint: `/jobs/readAll?msp=${msp}`,
      router: this.router,
    });
  };

  /**
   * This endpoint will export all the results obtained from the readAll endpoint without pagination.
   */
  public exportAllJobs = async (msp: string, type: string) => {
    try {
      const response = await apiClient(
        configGet(
          createUrl(BASE_URL, `/jobs/exportAll?msp=${msp}&type=${type}`)
        )
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
   * This endpoint will mark a job as filled.
   */
  public markAsFilled = async (
    dataForm: {
      reject_unsuccessful_submissions: boolean;
      note_for_declined_submissions: string;
    },
    id: string
  ) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, `/jobs/markAsFilled/${id}`)], dataForm)
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
   * This endpoint will mark a job as canceled.
   */
  public markAsCanceled = async (
    dataForm: {
      note_for_declined_submissions: string;
    },
    id: string
  ) => {
    try {
      const response = await apiClient(
        configPost(
          [createUrl(BASE_URL, `/jobs/markAsCanceled/${id}`)],
          dataForm
        )
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
   * This endpoint will duplicate a job as a template.
   */
  public duplicateAsTemplate = async (id: string) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/jobs/duplicateAsTemplate/${id}`))
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
   * delete one or multiple jobs job
   */
  public deleteJobs = (jobsIDs: string[]) => {
    return axiosCall({
      method: AXIOS_METHODS.delete,
      endpoint: `/jobs/deleteJobs`,
      router: this.router,
      body: jobsIDs,
    });
  };

  /**
   * Update the status of one job
   */
  public updateStatus = (jobID: string) => {
    return axiosCall({
      method: AXIOS_METHODS.put,
      endpoint: `/jobs/updateStatus`,
      router: this.router,
      id: jobID,
    });
  };
}
