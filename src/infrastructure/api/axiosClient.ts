import axios from 'axios';
import Cookies from 'js-cookie';
import type { NextRouter } from 'next/router';

import { UtilServices } from '../services/utilsServices';
import type { AxiosMethods } from './configFetch';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENV_VARIABLE, // Replace with your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (token && config?.headers !== undefined) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
type IAxiosCall = {
  method: AxiosMethods;
  endpoint: string;
  id?: string;
  body?: any;
  router: NextRouter;
};
export const axiosCall = async ({
  method,
  endpoint,
  id,
  body,
  router,
}: IAxiosCall) => {
  let url = `${endpoint}`;
  if (id) {
    url = url.concat(`/${id}`);
  }
  try {
    const response = await axiosInstance({ method, url, data: body });
    return response.data;
  } catch (error: any) {
    const errorCodes = [400, 403, 404, 401];
    if (errorCodes.includes(error.response?.status)) {
      throw error;
    } else {
      UtilServices.serverIsDown(router);
      throw error;
    }
  }
};
export default axiosInstance;
