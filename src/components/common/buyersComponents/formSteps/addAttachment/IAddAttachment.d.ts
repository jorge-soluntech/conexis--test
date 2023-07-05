import type { Attachment } from '@/consts/Attachments';

declare namespace IAddAttachment {
  export interface IProps extends IUseAddAttachments {
    errors: {
      [key: string]: string;
    };
    isNewAttachment: boolean;
  }
  export interface IUseAddAttachments {
    setErrors: Dispatch<
      SetStateAction<{
        [key: string]: string;
      }>
    >;
    setShowError: Dispatch<SetStateAction<boolean>>;
    attachments: Attachment.AttachmentComponent[];
    setAttachments: Dispatch<SetStateAction<Attachment.AttachmentComponent[]>>;
    setIsNewAttachment: Dispatch<SetStateAction<boolean>>;
  }
}

export { IAddAttachment };
