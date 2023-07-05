import type { Dashboards } from '@/consts/permissions';

declare namespace ITableBuyer {
  export interface IProps {
    dashboard: Dashboards;
    loading: boolean;
    dataTable: Object<any>;
    setShowError: Function;
  }

  export interface DataBuyer {
    clientCompanyName: string;
    clientContactName: string;
    clientContactEmail: string;
    clientContactPhone: string;
    contractExpirationDate: string;
    accountOwner: string;
    contractExpirationDate: string;
    details: {
      aditionalInfo: {
        legalNameInvoicing: string;
        clientMailingAddress: string;
        clientMailingAddress2: string;
        workWeekDefinition: string;
        currency: string;
      };
      taxes: {
        vatFederalTax: string;
        provincialTax: string;
        otherTax: string;
      };
      approvals: {
        jobsRequireApproval: string;
        submissionsRequireApproval: string;
        accesToApplicantTrackingModule: string;
        contractRequiresApproval: string;
        accountsPayableContactName: string;
        accountsPayableContactEmail: string;
      };
      documents: {
        clientAgreement: { name: string; id: string }[];
        others: { name: string; id: string }[];
      };
    };
  }
}

export { ITableBuyer };
