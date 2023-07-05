declare namespace Attachment {
  export interface AttachmentComponent {
    id: string;
    url: string;
    path: string;
    file: any;
    name: string;
    type: AttachmenTypes;
    fileName: string;
    expiryDate: Dayjs | undefined;
    buyer: string;
  }
  export interface BaseAttachment {
    file: string;
    name: string;
    type: Attachment.AttachmenTypes;
    expiry_date: Dayjs;
    // original_name does not appear in the swagger schema for suppliers, but in the real response do, his value is null
    original_name: string;
  }
  export interface CreateUpdateAttachment extends BaseAttachment {
    buyer_id: string;
  }

  export interface ListAttachments extends BaseAttachment {
    key: string;
    id: string;
  }

  export interface GetAttachment extends BaseAttachment {
    id: string;
    created_at: Dayjs;
    updated_at: Dayjs;
    supplier_id: string;
    buyer_id: string;
  }

  export type AttachmenTypes =
    | 'Supplier Agreements'
    | 'COI'
    | 'Proof of Inc.'
    | 'Banking Info'
    | 'Amendments'
    | 'Other'
    | 'Client Agreement'
    | null;

  export interface IAttachmentObj {
    name: any;
    file: any;
    type: any;
    original_name: any;
    expiry_date: any;
    buyer_id?: any;
  }
  export interface IuploadedAttachment extends BaseAttachment {
    buyer_id?: string;
  }
}

export { Attachment };
