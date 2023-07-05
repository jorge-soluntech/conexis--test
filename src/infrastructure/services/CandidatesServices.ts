import type { NextRouter } from 'next/router';

import type { ICandidates } from '@/application/candidatesSlice/ICandidatesState';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { BASE_URL, createUrl } from '.';
import { UtilServices } from './utilsServices';

export class CandidatesService {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /** Create a worker (candidate) linked to the buyer or supplier logged.
   *
   * METHOD: POST
   */

  public createCandidate = async (
    dataForm: ICandidates.IState,
    mspRole: string | null
  ) => {
    try {
      const response = await apiClient(
        configPost(
          [createUrl(BASE_URL, `/auth/createWorker?msp=${mspRole}`)],
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
   * get candidates
   *
   * Request Method: GET
   * Get all candidates,
   */
  public getCandidates = async (mspRole: string | null) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/users/workers?msp=${mspRole}`))
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

  /** Update worker status (candidate) linked to the buyer or supplier logged.
   *
   * METHOD: PUT
   */

  public updateCandidate = async (
    dataForm: ICandidates.IUpdateCandidate,
    idCandidate: string
  ) => {
    try {
      const response = await apiClient(
        configPut(
          [createUrl(BASE_URL, `/users/updateWorker/${idCandidate}`)],
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
}
