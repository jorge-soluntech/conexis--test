/* eslint-disable class-methods-use-this */
import type { NextRouter } from 'next/router';

import { configGet, configPost, configPut } from '../api/configFetch';
import apiClient from '../api/index';
import { UtilServices } from './utilsServices';

const createUrl = (base: string, path: string) => `${base}${path}`;
const BASE_URL: any = process.env.NEXT_PUBLIC_ENV_VARIABLE; // Replace by your env variable

export class BuyerServices {
  public router: NextRouter;

  constructor(router: NextRouter) {
    this.router = router;
  }

  // async method to get all possible buyers
  public getAllBuyers = async (size?: number | undefined) => {
    try {
      const response = await apiClient(
        configGet(
          createUrl(
            BASE_URL,
            `/buyers?page=1&${size ? `size=${size}` : `size=500`}`
          )
        )
      );

      return response.data as BuyerRecord;
    } catch (error: any) {
      if (error.response?.status === 404 || error.response?.status === 400) {
        throw error;
      } else {
        UtilServices.serverIsDown(this.router);
        throw error;
      }
    }
  };

  // This method is meant to be called before creating a buyer, to make sure the buyer name is valid.
  public validateNameBuyer = async (buyerName: string, buyerId?: string) => {
    try {
      const path = buyerId
        ? `/buyers/validateName/${buyerName}?buyerId=${buyerId}`
        : `/buyers/validateName/${buyerName}`;

      const response = await apiClient(configGet(createUrl(BASE_URL, path)));

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

  // async method to create buyers
  public createBuyer = async (dataForm: any) => {
    try {
      const response = await apiClient(
        configPost([createUrl(BASE_URL, '/buyers')], dataForm)
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

  // async method to edit buyer
  public editBuyer = async (id: string, dataForm: any) => {
    try {
      const response = await apiClient(
        configPut([createUrl(BASE_URL, `/buyers/${id}`)], dataForm)
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

  // async method to get buyer by id
  public getBuyerById = async (id: string) => {
    try {
      const response = await apiClient(
        configGet(createUrl(BASE_URL, `/buyers/${id}`))
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

export interface BuyerRecord {
  data: {
    buyers: Tbuyer[];
    current_page: number;
    has_previous_page: boolean;
    has_next_page: boolean;
    total_pages: number;
    total_records: number;
  };
}

export type Tbuyer = {
  id: string;
  id_number: number;
  client_company_name: string;
  legal_name_for_invoicing: string;
  vat_amount: number;
  sales_tax_amount: number;
  other_tax_amount: number;
  work_week_definition: string;
  currency: string;
  primary_contact_name: string;
  primary_contact_email: string;
  primary_contact_phone: string;
  contract_expiry_date: string;
  street_address_line2: string;
  account_owner_id: string;
  account_owner: string;
  street_address_line1: string;
  city: string;
  province_region: string;
  postal_code: string;
  country: string;
  payment_terms: string;
  bypass_job_approval: boolean;
  bypass_submission_approval: boolean;
  require_contract_approval: boolean;
  access_to_applicant_tracker: boolean;
  accounts_payable_contact_name: string;
  accounts_payable_contact_email: string;
  attachments: {
    file: string;
    name: string;
    type: string;
    expiry_date: string;
    buyer_id: string;
  }[];
};
