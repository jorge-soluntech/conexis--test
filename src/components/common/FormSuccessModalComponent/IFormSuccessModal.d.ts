declare namespace IFormSuccessModal {
  export interface Props {
    title?: string;
    isModal: boolean;
    children?: ReactNode;
    isLoading?: boolean;
    centered?: boolean;
    closable?: boolean;
    showSuccess?: boolean;
    titleSuccess?: string;
    handleSave?: MouseEventHandler<any>;
    handleCancel?: MouseEventHandler<any>;
    handleOkSuccess?: MouseEventHandler<any>;
    titleSave?: string;
    titleCancel?: string;
  }
}

export { IFormSuccessModal };
