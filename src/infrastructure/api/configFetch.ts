import Cookies from 'js-cookie';

export type AxiosMethods = 'get' | 'post' | 'put' | 'delete';
interface ConfigOptions {
  method: AxiosMethods;
  url: string | string[];
  data?: any;
}
interface IAxiosMethods {
  get: 'get';
  post: 'post';
  put: 'put';
  delete: 'delete';
}
export const AXIOS_METHODS: IAxiosMethods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

export const requestConfig = ({ method, url, data }: ConfigOptions) => {
  const token = Cookies.get('token');
  return {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data,
  };
};

export const configGet = (url: string) => requestConfig({ method: 'get', url });
export const configPost = (url: string[], databody: any) =>
  requestConfig({ method: 'post', url, data: databody });
export const configPut = (url: string[], databody: any) =>
  requestConfig({ method: 'put', url, data: databody });
export const configDelete = (url: string[]) =>
  requestConfig({ method: 'delete', url });
