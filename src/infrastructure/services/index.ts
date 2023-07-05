/* eslint-disable class-methods-use-this */
import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';

/**
 * Create the url path for the request
 * @param base - Receive BASE_URL
 * @param path - Receive your own path example: /data
 * @returns string with the url
 */

export const createUrl = (base: string, path: string) => `${base}${path}`;
export const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

/**
 * - Import every config that you need in configFetch, then import the RequestService example:
 * - Using apiClient (axios intance)
 * - const response = await RequestService.getData()
 */

const RequestService = {
  // POST
  loginUser: (dataBody: {
    username: string;
    password: string;
    tenant: number;
  }) => apiClient(configPost([createUrl(BASE_URL, '/auth/login')], dataBody)),

  // POST
  emailForgotPassword: (data: any) =>
    apiClient(
      configPost([createUrl(BASE_URL, '/auth/PasswordEmail')], data.dataBody)
    ),

  // PUT
  updateForgotPassword: (data: any) =>
    apiClient(
      configPut(
        [createUrl(BASE_URL, '/auth/updateForgotPassword')],
        data.dataBody
      )
    ),

  // PUT
  setNewPassword: (data: any) =>
    apiClient(
      configPut([createUrl(BASE_URL, '/auth/setPassword')], data.dataBody)
    ),

  // GET
  pingServer: () =>
    apiClient(configGet(createUrl(BASE_URL, '/utils/serverStatus'))),

  // POST
  userCreate: (data: any) =>
    apiClient(
      configPost([createUrl(BASE_URL, '/auth/createUser')], data.dataBody)
    ),

  // GET
  getPosibleSelectionsCreateUsers: (
    userRole: string = '',
    id_tenant: string = '',
    supplier: string = ''
  ) =>
    apiClient(
      configGet(
        createUrl(
          BASE_URL,
          `/auth/possibleSelectionsCreateUsers?${
            userRole ? `user_role=${userRole}` : ''
          }${id_tenant ? `&id_tenant=${id_tenant}` : ''}${
            supplier ? `&supplier=${supplier}` : ''
          }`
        )
      )
    ),

  // POST
  resendEmail: (data: any) =>
    apiClient(
      configPost([createUrl(BASE_URL, '/auth/PasswordEmail')], data.dataBody)
    ),

  // GET
  getUserData: () =>
    apiClient(configGet(createUrl(BASE_URL, '/utils/userData'))),

  // PUT
  updateLoggedBuyerOrSupplier: (data: any) =>
    apiClient(
      configPut([createUrl(BASE_URL, '/utils/loggedUser')], data.dataBody)
    ),

  // GET
  getUsers: (
    user_status: string = '',
    user_role: string = '',
    openSearch: string = ''
  ) =>
    apiClient(
      configGet(
        createUrl(
          BASE_URL,
          `/users/readAll?${user_status && `&user_status=${user_status}`}${
            user_role && `&user_role=${user_role}`
          }${openSearch && `&openSearch=${openSearch}`}`
        )
      )
    ),

  /**
   * Active and deactivate user
   *
   * Request Method: PUT
   *
   * @param id - id user string
   * @param data - payload containing the string user_status
   * @returns returns the request response
   */
  changeUserStatus: (id: string, data: any) =>
    apiClient(configPut([createUrl(BASE_URL, `/auth/update/${id}`)], data)),

  /**
   * Export users
   *
   * Request Method: GET
   * export all the users requested in the table, the result can be filtered with the
   * query parameters, but the filters can not override the restrictions of the user role, so specific
   * user roles may not be able to set some filters. The URL type parameter must be ‘txt’, ‘csv’ or ‘json’
   *
   * @param type - string with the file type
   * @param user_status - payload containing the string user_status
   * @param user_role - payload containing the string user_status
   * @param openSearch - payload containing the string user_status
   * @returns return the file with all the query results (there is a limit of 10000 rows)
   */
  exportUsers: (
    type: string,
    userStatus: string = '',
    userRole: string = '',
    openSearch: string = ''
  ) =>
    apiClient(
      configGet(
        createUrl(
          BASE_URL,
          `/users/export/${type}?${userStatus && `user_status=${userStatus}`}${
            userRole && `${userRole}`
          }${openSearch && `&openSearch=${openSearch}`}`
        )
      )
    ),
};

export default RequestService;
