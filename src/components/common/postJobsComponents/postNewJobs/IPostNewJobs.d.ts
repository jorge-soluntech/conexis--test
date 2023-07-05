import type { FormInstance } from 'antd';
import type ReactNode from 'react';

declare namespace IPostNewJobs {
  export interface PropsForm {
    children?: ReactNode;
  }

  export interface PropsFields {
    className?: string;
    name: string;
    secondName?: string;
    form?: FormInstance;
    validatorFields?: Function;
  }

  export interface PropsActions {
    form?: FormInstance;
  }
}

export { IPostNewJobs };
