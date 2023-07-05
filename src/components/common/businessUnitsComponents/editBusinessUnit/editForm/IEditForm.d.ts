import type { FormInstance } from 'antd';
import type { SetStateAction } from 'react';

declare namespace IEditForm {
  export interface IProps {
    form: FormInstance;
    setSuccessResult: Dispatch<SetStateAction<boolean>>;
    setShowError: Dispatch<SetStateAction<boolean>>;
    setMessageError: Dispatch<SetStateAction<string>>;
  }
}

export { IEditForm };
