import type { Dayjs } from 'dayjs';

import type { Attachment } from './Attachments';

declare namespace IBuyers {
  // interface for the data to create and edit buyer
  export interface IDataBuyer {
    id: string;
    clientCompanyName: string | null;
    legalNameForInvoicing: string | null;
    streetAddressLine1: string | null;
    country: string | null;
    city: string | null;
    provinceRegion: string | null;
    postalCode: string | null;
    primaryContactName: string | null;
    primaryContactEmail: string | null;
    primaryContactPhone: string | null;
    accountsPayableContactName: string | null;
    accountsPayableContactEmail: string | null;
    accountOwnerId: string | null;
    workWeekDefinition: string | null;
    currency: string | null;
    paymentTerms: string | null;
    contractExpiryDate: Dayjs | null;
    isSelfServed: boolean | null;
    vatAmount: number | null;
    salesTaxAmount: number | null;
    otherTaxAmount: number | null;
    bypassJobApproval: boolean;
    bypassSubmissionApproval: boolean;
    requireContractApproval: boolean;
    accessToApplicantTracker: boolean;
    attachments: Attachment.CreateUpdateAttachment[];
    contractApproverId: { label: string; value: string } | null;
  }
}

export { IBuyers };
