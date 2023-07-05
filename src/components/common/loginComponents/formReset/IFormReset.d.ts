declare namespace IFormReset {
  export interface IProps {
    /** The title parameter to form */
    titleForm: string;
    /** The token parameter from query url */
    token: string;
    /** The email parameter from query url */
    email: string;
  }
  export interface IFormValues {
    password: string;
    password_repeat: string;
  }
}

export { IFormReset };
