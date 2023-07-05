import type { Dispatch, SetStateAction } from 'react';

declare namespace IEditBusinessUnit {
  export type FieldsValues = {
    firstName: string;
    lastName: string;
    primaryEmail: string;
    region: string;
    address: string;
    primaryPhone: string;
  };
  export interface IProps {
    /** The title parameter to form */
    businessUnitId: string;
    fieldsValue: FieldsValues | undefined;
    showError: boolean;
    phoneError: boolean;
    successResult: boolean;
    dataUser: any;
    messageError: string;
    detailsBusinessUnit: IDetailBusinessUnit;
    setMessageError: Dispatch<SetStateAction<string>>;
    setShowError: Dispatch<SetStateAction<boolean>>;
    setPhoneError: Dispatch<SetStateAction<boolean>>;
    setSuccessResult: Dispatch<SetStateAction<boolean>>;
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

  export interface IDetailBusinessUnit {
    id: string;
    location: string;
    businessUnitNumber: string;
  }
}

export { IEditBusinessUnit };
