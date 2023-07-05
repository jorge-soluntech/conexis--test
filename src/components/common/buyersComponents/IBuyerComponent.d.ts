declare namespace IBuyerComponent {
  export interface IProps {
    loading: boolean;
    dataTable: DataBuyer[];
    showError: boolean;
    setShowError: Dispatch<SetStateAction<boolean>>;
    messageError: string;
  }

  export interface DataBuyer {
    key: string;
    clientCompanyName: string;
    clientContactName: string;
    clientContactEmail: string;
    clientContactPhone: string;
    accountOwner: string;
    contractExpirationDate: string;
    details: { aditionalInfo: any; taxes: any; approvals: any; documents: any };
  }

  export interface Filter {
    userRole: Array<string>;
    userStatus: Array<boolean>;
  }
}

export { IBuyerComponent };
