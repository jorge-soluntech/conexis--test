import type { NextRouter } from 'next/router';

import type { IWorkShifts } from '@/application/workShiftsSlice/IWorkShiftsState';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE;

export class WorkShiftsService {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /** Create a work shifts by the buyer logged.
   *
   * METHOD: POST
   */
  public createWorkShifts = async (dataForm: IWorkShifts.IState) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/workShifts')], dataForm)
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
   * Get all work shifts.
   *
   * METHOD: GET
   */
  public getAllWorkShifts = async (id: string) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/workShifts?buyer_id=${id}`))
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
   * Update work shifts.
   *
   * Update a work shift by id, the id is placed in the url params.
   * METHOD: PUT
   */
  public updateWorkShifts = async (
    id: string,
    dataForm: IWorkShifts.IUpdateWorkShift
  ) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, `/workShifts/${id}`)], dataForm)
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
   * export all work shifts.
   *
   * METHOD: GET
   */
  public exportWorkShifts = async (type: string) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/workShifts/export?type=${type}`))
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
