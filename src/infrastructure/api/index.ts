import axios from 'axios';
/**
 * @param config - method to config post, get, put, delete request with headers and parameters
 * @returns the axios instance
 */

const apiClient = (config: any) => {
  const axiosInstance = axios(config);

  return axiosInstance;
};

export default apiClient;
