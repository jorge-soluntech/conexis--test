declare namespace IFormForgot {
  export interface IProps {
    /** The title parameter to form */
    titleForm: string;
    /** The subtitle parameter to form */
    subtitleForm: string;
  }
  export interface IFormValues {
    email: string;
  }
}

export { IFormForgot };
