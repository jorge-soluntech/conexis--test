import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Attachment } from '@/consts/Attachments';

import type { ISupplier } from '../../consts/ISupplierState';

const initialState: ISupplier.IState = {
  page: 1,
  currentStepSupplier: 0,
  // data to create or edit a supplier
  dataSupplier: {
    // Supplier information - step 1
    id_tenant: 0,
    supplier_company_name: '',
    legal_name_for_invoicing: '',
    primary_contact_name: '',
    primary_contact_phone: '',
    supplier_code: '',
    primary_contact_email: '',
    street_address_line1: '',
    country: '',
    province_region: '',
    city: '',
    postal_code: '',
    tax_id: '',
    geographic_coverage: [],
    agreement_expiry_date: null,
    work_categories_covered: null,
    dunn_and_bradstreet_number: '',
    supplier_status: null,
    is_non_resident_supplier: null,
    diversity_certifications: [],
    comments: '',
    // Additional supplier contacts - step 2
    secondary_contact_name: '',
    secondary_contact_email: '',
    tertiary_contact_name: '',
    tertiary_contact_email: '',
    accounts_receivable_contact_name: '',
    accounts_receivable_contact_email: '',
    // Buyer information - step 3
    associated_buyers: [],
    attachments: [],
  },
  supplierId: '',
  listAttachments: [],
};

export const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setStepSupplier: (state, action: PayloadAction<number>) => {
      state.currentStepSupplier = action.payload;
    },
    setDataSupplier: (
      state,
      action: PayloadAction<ISupplier.CreateOrUpdateSupplier>
    ) => {
      state.dataSupplier = {
        ...state.dataSupplier,
        ...action.payload,
      };
    },
    setIdSupplier: (state, action: PayloadAction<string>) => {
      state.supplierId = action.payload;
    },
    clearDataStateSupplier: (state) => {
      state.dataSupplier = initialState.dataSupplier;
    },
    setListAttachments: (
      state,
      action: PayloadAction<Attachment.ListAttachments[]>
    ) => {
      state.listAttachments = action.payload;
    },
  },
});

export const {
  setPage,
  setStepSupplier,
  setDataSupplier,
  clearDataStateSupplier,
  setIdSupplier,
  setListAttachments,
} = supplierSlice.actions;

export default supplierSlice.reducer;
