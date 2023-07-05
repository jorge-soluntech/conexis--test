/* eslint-disable no-useless-catch */
/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import { configGet, configPost } from '../api/configFetch';
import apiClient from '../api/index';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class UtilServices {
  // async method to get check if the backend server is down
  public static async serverIsDown(router: NextRouter) {
    try {
      await apiClient(configGet(createUrl(BASE_URL, '/utils/serverStatus')));
      return false;
    } catch (error) {
      router.push('/auth/server-down', undefined, {
        shallow: true,
      });
      return true;
    }
  }

  // async method to upload a file to s3 file from the frontend
  public static uploadS3File = async (extension: string) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/utils/uploadS3File')], { extension })
      );

      return response.data as IS3Get;
    } catch (error: any) {
      if (error.response?.status === 400) {
        return error.response.data;
      }
      throw error;
    }
  };

  // async method to update a file to s3 file from the frontend
  public static updateS3File = async (
    url: string,
    blobData: Blob,
    contentType: string
  ) => {
    try {
      const response = await apiClient({
        url,
        method: 'put',
        headers: {
          'Content-Type': contentType,
        },
        data: blobData,
      });
      return response;
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };

  // async method to get the url from an s3 file from the backend
  public static getS3File = async (id: string, router: NextRouter) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/utils/getS3File/${id}`))
      );

      return response.data as IS3Get;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(router);
        throw error;
      }
    }
  };

  // async method to download an s3 file from s3 after getting the url

  public static downloadS3File = async (
    file: { name: string; id: string },
    router: NextRouter
  ) => {
    try {
      const responseFileData = await this.getS3File(file.id, router);

      const response = await fetch(responseFileData.url, { method: 'GET' });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const blob = await response.blob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        console.log(error);
        throw error;
      } else {
        UtilServices.serverIsDown(router);
        throw error;
      }
    }
  };
}

export interface IS3Get {
  statusCode: string;
  message: string;
  url: string;
  fullPath: string;
}
