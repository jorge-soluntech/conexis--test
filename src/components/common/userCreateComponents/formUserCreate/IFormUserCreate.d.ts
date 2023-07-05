declare namespace IFormUserCreate {
  export interface IProps {
    /** The title parameter to form */
    titleForm: string;
  }
  export interface IFormValues {
    buyer: string;
    typeUser: string;
    firstName: string;
    lastName: string;
    email: string;
    supplier: string | null;
  }
}

export { IFormUserCreate };
