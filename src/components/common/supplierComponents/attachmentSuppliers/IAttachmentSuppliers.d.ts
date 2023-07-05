declare namespace IAttachmentSuppliers {
  export interface DataAttachments {
    id: string;
    file: string;
    name: string;
    type: string;
    expiry_date: string;
  }

  export interface Props {
    idSupplier: string;
  }
}

export { IAttachmentSuppliers };
