/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import type { ISupplier } from '@/consts/ISupplierState';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class SupplierServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  /**
   * This method create a new supplier
   *
   * @createSupplierData IManageSuppliers.DataCreateSupplier
   *
   * Request Method: POST
   */
  public createSupplier = async (
    createSupplierData: ISupplier.CreateOrUpdateSupplier
  ) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/suppliers')], createSupplierData)
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

  /**
   * get suppliers
   *
   * Request Method: GET
   * Get all supplier,
   */
  public getSuppliers = async (page?: number) => {
    try {
      const response = await apiClient(
        configGet(
          createUrl(BASE_URL, `/suppliers/byLoggedBuyer?page=${page}&size=20`)
        )
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

  /**
   * get supplier by id
   *
   * @idSupplier string
   * Request Method: GET
   * Get data supplier by id,
   */

  public getSuppliersById = async (idSupplier: string) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/suppliers/${idSupplier}`))
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

  /**
   * This method Edit a supplier
   *
   * @createSupplierData IManageSuppliers.DataCreateSupplier
   *
   * Request Method: POST
   */
  public editSupplier = async (
    idSupplier: string,
    editSupplierData: ISupplier.CreateOrUpdateSupplier
  ) => {
    try {
      const response = await apiClient(
        configPut(
          [createUrl(BASE_URL, `/suppliers/${idSupplier}`)],
          editSupplierData
        )
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

  /**
   * This method is meant to be called before creating or updating a supplier,
   * to make sure the supplier name is valid.
   *
   * @companyName string
   * @idSupplier string
   *
   * Request Method: GET
   */

  public validateSupplierCompanyName = async (
    companyName: string,
    supplierId?: string
  ) => {
    const url = `/suppliers/validateCompanyName/${companyName}${
      supplierId ? `?supplierId=${supplierId}` : ''
    }`;
    try {
      const response = await apiClient(configGet(createUrl(BASE_URL, url)));
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
}
