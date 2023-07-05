import type ReactNode from 'react';

declare namespace ITableAttachmentSuppliers {
  export interface IProps {
    loading: boolean;
    dataUser: Object<any>;
  }

  export interface DataSuppliers {
    id: string;
    file: ReactNode;
    name: ReactNode;
    type: ReactNode;
    expiryDate: ReactNode;
  }

  export interface Filter {
    status: Array<string>;
    expiration: Array<string>;
    contactEmail: Array<string>;
    contactName: Array<string>;
  }
}

export { ITableAttachmentSuppliers };
