declare namespace IUploadComponent {
  export interface IProps {
    titleUpload?: string;
    titleUploadResponsive?: string;
    breakpoint?: number;
    onChange: Function;
    icon?: string;
    maxCount?: number;
    fileName?: string;
    onDownload?: ((file: UploadFile<any>) => void) | undefined;
  }
}

export { IUploadComponent };
