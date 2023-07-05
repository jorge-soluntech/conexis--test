import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Attachment } from '@/consts/Attachments';
import type { IBuyers } from '@/consts/IBuyers';

// Define a type for the slice state
type BuyersState = {
  stepCreateBuyer: number;
  idEditBuyer: string;
  dataBuyer: IBuyers.IDataBuyer;
  existingAttachments: Attachment.ListAttachments[];
};

const initialState: BuyersState = {
  stepCreateBuyer: 0,
  idEditBuyer: '',
  // data to create or edit a buyer
  dataBuyer: {
    id: '',
    /** buyer information - step 1 */
    clientCompanyName: null,
    legalNameForInvoicing: null,
    streetAddressLine1: null,
    country: null,
    city: null,
    provinceRegion: null,
    postalCode: null,
    primaryContactName: null,
    primaryContactEmail: null,
    primaryContactPhone: null,
    accountsPayableContactName: null,
    accountsPayableContactEmail: null,
    accountOwnerId: null,
    workWeekDefinition: null,
    currency: null,
    paymentTerms: null,
    contractExpiryDate: null,
    isSelfServed: null,
    /** tax information - step 2 */
    vatAmount: null,
    salesTaxAmount: null,
    otherTaxAmount: null,
    /** approval information - step 3 */
    bypassJobApproval: false,
    bypassSubmissionApproval: false,
    requireContractApproval: false,
    accessToApplicantTracker: false,
    contractApproverId: null,
    /** attachments - step 4 */
    attachments: [],
  },
  existingAttachments: [],
};

export const buyersSlice = createSlice({
  name: 'buyers',
  initialState,
  reducers: {
    setDataBuyer: (state, action: PayloadAction<IBuyers.IDataBuyer>) => {
      state.dataBuyer = { ...state.dataBuyer, ...action.payload };
    },
    setStepBuyer: (state, action: PayloadAction<number>) => {
      state.stepCreateBuyer = action.payload;
    },
    clearDataStateBuyer: (state) => {
      state.dataBuyer = null as any;
    },
    setExistingAttachments: (
      state,
      action: PayloadAction<Attachment.ListAttachments[]>
    ) => {
      state.existingAttachments = action.payload;
    },
    setIdEditBuyer: (state, action: PayloadAction<string>) => {
      state.idEditBuyer = action.payload;
    },
  },
});

export const {
  setDataBuyer,
  setStepBuyer,
  setIdEditBuyer,
  clearDataStateBuyer,
  setExistingAttachments,
} = buyersSlice.actions;

export default buyersSlice.reducer;
