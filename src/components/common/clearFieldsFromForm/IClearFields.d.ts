import type { FormInstance } from 'antd';

declare namespace IClearFields {
  export interface IProps {
    title: string;
    form: FormInstance<any>;
  }
}

export { IClearFields };
