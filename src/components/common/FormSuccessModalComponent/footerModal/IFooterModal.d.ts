declare namespace IFooterModal {
  export interface Props {
    showSuccess?: boolean;
    isLoading?: boolean;
    handleSave: MouseEventHandler<any>;
    handleCancel: MouseEventHandler<any>;
    handleOkSuccess?: MouseEventHandler<any>;
    titleSave?: string;
    titleCancel?: string;
  }
}

export { IFooterModal };
