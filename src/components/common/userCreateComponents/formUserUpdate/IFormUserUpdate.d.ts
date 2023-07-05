import type { Dispatch, SetStateAction } from 'react';

declare namespace IFormUserUpdate {
  export interface IProps {
    /** The title parameter to form */
    userInfo: any;
    userRole: string;
    possibleBuyers: Array<Object>;
    roles: Array<Object>;
    showError: boolean;
    showBuyer: boolean;
    isLoading: boolean;
    messageError: string;
    successResult: boolean;
    onSubmit: (data: IFormUserUpdate.IFormValues) => Promise<void>;
    onSelectRole: (userRole: string) => Promise<void>;
    setShowError: Dispatch<SetStateAction<boolean>>;
    setMessageError: Dispatch<SetStateAction<string>>;
  }
  export interface IFormValues {
    buyer: string;
    typeUser: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}

export { IFormUserUpdate };
