/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import type { Roles } from '@/consts/permissions';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class UserServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  // async method to get the possible selections to create users\
  public getPosibleSelectionsCreateUsersSuppliers = async (
    user_role: string,
    id_tenant: string | undefined
  ) => {
    try {
      const response = await apiClient(
        configGet(
          createUrl(
            BASE_URL,
            `/auth/possibleSelectionsCreateUsers?${
              user_role ? `user_role=${user_role}` : ''
            }${id_tenant ? `&id_tenant=${id_tenant}` : ''}`
          )
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

  // async method to get the possible buyer selections to create the users with
  public getPosibleSelectionsCreateUsersBuyers = async (
    user_role: string,
    id_tenant: string | undefined,
    supplier: string | undefined
  ) => {
    try {
      const response = await apiClient(
        configGet(
          createUrl(
            BASE_URL,
            `/auth/possibleSelectionsCreateUsers?${
              user_role ? `user_role=${user_role}` : ''
            }${id_tenant ? `&id_tenant=${id_tenant}` : ''}${
              supplier ? `&supplier=${supplier}` : ''
            }`
          )
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

  // async method to get the possible buyer selections to update the users with
  public getPosibleSelectionsUpdateUsersBuyers = async (
    user_role: string,
    id_tenant: string | undefined,
    supplier: string | undefined,
    id: string
  ) => {
    try {
      if (!id) {
        throw new Error('Id of user to update in the url is required');
      }
      const response = await apiClient(
        configGet(
          createUrl(
            BASE_URL,
            `/auth/possibleSelectionsUpdateUsers/${id}?${
              user_role ? `user_role=${user_role}` : ''
            }${id_tenant ? `&id_tenant=${id_tenant}` : ''}${
              supplier ? `&supplier=${supplier}` : ''
            }`
          )
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

  public userCreate = async (dataForm: {
    first_name: string;
    last_name: string;
    user_roles: string | string[];
    email: string;
    permissioned_buyers?: string | string[];
    permissioned_suppliers?: string | string[];
  }) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/auth/createUser')], dataForm)
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

  public userRolesToCreate = async () => {
    try {
      const res = await apiClient(
        configGet(createUrl(BASE_URL, `/auth/rolesCreateUser`))
      );

      // store resopnse inside an object with the following format
      const classes = {
        'BUYER USER': [
          'Approver',
          'Buyer Administrator',
          'Buyer Finance',
          'Delegate',
          'Hiring Manager',
          'Recruiter',
        ],
        'MSP USER': [
          'MSP Administrator',
          'Program Manager',
          'Program Representative',
          'MSP Finance',
        ],
        'SUPPLIER USER': [
          'Supplier Administrator',
          'Account Manager',
          'Supplier Finance',
        ],
        'GLOBAL USER': ['Super Administrator', 'Product Support'],
      };

      const response: any = {};

      res.data.data.forEach((element: any) => {
        if (classes['BUYER USER']?.includes(element)) {
          response['BUYER USER'] = [
            ...(response['BUYER USER'] ? response['BUYER USER'] : []),
            element,
          ];
        } else if (classes['MSP USER'].includes(element)) {
          response['MSP USER'] = [
            ...(response['MSP USER'] ? response['MSP USER'] : []),
            element,
          ];
        } else if (classes['SUPPLIER USER'].includes(element)) {
          response['SUPPLIER USER'] = [
            ...(response['SUPPLIER USER'] ? response['SUPPLIER USER'] : []),
            element,
          ];
        } else if (classes['GLOBAL USER'].includes(element)) {
          response['GLOBAL USER'] = [
            ...(response['GLOBAL USER'] ? response['GLOBAL USER'] : []),
            element,
          ];
        }
      });

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

  public resendEmail = async (dataBody: {
    email: string;
    tenant: number;
    messageType: string;
  }) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/auth/PasswordEmail')], dataBody)
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
   * get user roles that a given user with a current user role can update to
   *
   * Request Method: GET
   *
   */
  public userRolesToUpdate = async (RoleUpdated: Roles) => {
    try {
      const res = await apiClient(
        configGet(
          createUrl(
            BASE_URL,
            `/auth/rolesCreateUser?${
              RoleUpdated ? `RoleUpdated=${RoleUpdated}` : ''
            }`
          )
        )
      );

      // store resopnse inside an object with the following format
      const classes = {
        'BUYER USER': [
          'Approver',
          'Buyer Administrator',
          'Buyer Finance',
          'Delegate',
          'Hiring Manager',
          'Recruiter',
        ],
        'MSP USER': [
          'MSP Administrator',
          'Program Manager',
          'Program Representative',
          'MSP Finance',
        ],
        'SUPPLIER USER': [
          'Supplier Administrator',
          'Account Manager',
          'Supplier Finance',
        ],
        'GLOBAL USER': ['Super Administrator', 'Product Support'],
      };

      const response: any = {};

      res.data.data.forEach((element: any) => {
        if (classes['BUYER USER']?.includes(element)) {
          response['BUYER USER'] = [
            ...(response['BUYER USER'] ? response['BUYER USER'] : []),
            element,
          ];
        } else if (classes['MSP USER'].includes(element)) {
          response['MSP USER'] = [
            ...(response['MSP USER'] ? response['MSP USER'] : []),
            element,
          ];
        } else if (classes['SUPPLIER USER'].includes(element)) {
          response['SUPPLIER USER'] = [
            ...(response['SUPPLIER USER'] ? response['SUPPLIER USER'] : []),
            element,
          ];
        } else if (classes['GLOBAL USER'].includes(element)) {
          response['GLOBAL USER'] = [
            ...(response['GLOBAL USER'] ? response['GLOBAL USER'] : []),
            element,
          ];
        }
      });

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

  public userUpdate = async (
    id: string,
    dataForm: {
      email: string | null;
      first_name: string | null;
      last_name: string | null;
      legacy_permissioned_buyers?: string[] | null;
      user_roles: string[] | null;
      user_status?: string | null;
    }
  ) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, `/auth/update/${id}`)], dataForm)
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

  public getUser = async (id: string | undefined) => {
    try {
      if (!id) {
        return null;
      }
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/users/findOne/${id}`))
      );
      return response.data.data;
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
