declare namespace ISupplier {
  export interface IState {
    page: number;
    currentStepSupplier: number;
    dataSupplier: CreateOrUpdateSupplier;
    supplierId: string;
    listAttachments: ListAttachments[];
  }

  interface SupplierBase {
    supplier_company_name: string;
    primary_contact_name: string;
    primary_contact_phone: string;
    primary_contact_email: string | null;
    country: string;
    street_address_line1: string;
    geographic_coverage: string[];
    agreement_expiry_date: string | null;
    diversity_certifications: string[];
    dunn_and_bradstreet_number: string;
    secondary_contact_name: string;
    secondary_contact_email: string | null;
    tertiary_contact_name: string;
    tertiary_contact_email: string | null;
    tax_id: string;
    work_categories_covered: string[] | null;
    accounts_receivable_contact_name: string;
    accounts_receivable_contact_email: string | null;
    supplier_status: string | null;
  }

  export interface CreateOrUpdateSupplier extends SupplierBase {
    id_tenant: number;
    legal_name_for_invoicing: string;
    supplier_code: string;
    postal_code: string;
    province_region: string;
    city: string;
    is_non_resident_supplier: boolean | null;
    comments: string;
    associated_buyers: string[];
    attachments: CreateUpdateAttachment[];
  }

  export interface GetMultipleSuppliers extends SupplierBase {
    id: string;
    created_by: string;
    is_non_resident_supplier: boolean;
    id_number: number;
    rating: null;
    account: AccountByLogged;
  }

  export interface GetSupplierByID extends SupplierBase, GetMultipleSuppliers {
    legal_name_for_invoicing: string;
    id_tenant: number;
    supplier_code: string;
    postal_code: string;
    province_region: string;
    city: string;
    comments: string;
    attachments: GetAttachment[];
    associated_buyers: AssociatedBuyer[];
  }

  export interface Account {
    full_name: string;
  }

  export interface AssociatedBuyer {
    id: string;
    client_company_name: string;
  }

  export interface AccountByLogged {
    id: string;
    full_name: string;
  }
}

export { ISupplier };
