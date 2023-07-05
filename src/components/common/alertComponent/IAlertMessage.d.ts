declare namespace IAlertMessage {
  export interface IProps {
    message: string | undefined;
    afterClose: Functionstring;
    widthIcon?: number;
    heightICon?: number;
    srcIcon?: string;
    success?: boolean;
  }
}

export { IAlertMessage };
