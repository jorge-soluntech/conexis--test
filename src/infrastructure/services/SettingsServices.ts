/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import { createUrl } from '@/utils/createUrl';

import { configGet, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class SettingsServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /**
   * put request to update my personal info
   */
  public updatePersonalInfo = async (dataForm: {
    first_name: string;
    last_name: string;
    email: string;
  }) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, '/users/myself')], dataForm)
      );

      return response;
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
   * get request to get my personal info
   */
  public getPersonalInfo = async () => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, '/users/myself'))
      );

      return response.data as IPersonalInfo;
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
   * put request to update password
   */
  public updatePassword = async (dataForm: {
    oldPassword: string;
    newPassword: string;
    confirmationPassword: string;
  }) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, `/auth/resetPassword`)], dataForm)
      );
      return response;
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

interface IPersonalInfo {
  statusCode: 200;
  message: 'User found successfully';
  data: {
    first_name: 'Luis';
    last_name: 'Cañas';
    email: 'luis.canas@gmail.com';
  };
}
