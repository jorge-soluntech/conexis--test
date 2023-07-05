import type { ReactElement } from 'react';

declare namespace IFormUser {
  export interface IProps {
    /** The title parameter to form */
    titleForm: string;
    showError: boolean;
    messageError: string;
    setShowError: Function;
    onSubmit: Function | Promise;
    setMessageError: Function;
    onSelectRole: Function | Promise;
    roles: object[];
    showSupplier: boolean;
    onSelectSupplier: Function | Promise;
    possibleSupplier: object[];
    showBuyer: boolean;
    multipleBuyer: boolean;
    tagRender: ReactElement | any;
    onSelectBuyer: Function | Promise;
    possibleBuyers: object[] | string[] | any;
    showUserData: boolean;
    isLoading: boolean;
  }
  export interface IFormValues {
    buyer: string | null;
    typeUser: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
  }
}

export { IFormUser };
