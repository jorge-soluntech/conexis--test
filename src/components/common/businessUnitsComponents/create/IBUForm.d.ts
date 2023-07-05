declare namespace IBUForm {
  export interface IProps {
    /** The title parameter to form */
    titleForm: string;
  }
  export interface IFormValues {
    id_tenant: string;
    businessUnitNumber: string;
    region: string;
    firstName: string;
    lastName: string;
    primaryEmail: string;
    primaryPhone: string;
    address: string;
    location: string;
  }
}

export { IBUForm };
