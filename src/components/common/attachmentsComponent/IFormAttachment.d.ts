import type { Dispatch, SetStateAction } from 'react';

import type { Attachment } from '@/consts/Attachments';
import type { Dashboards } from '@/consts/permissions';

declare namespace IFormAttachment {
  export interface IUseFormAddAttachments {
    setErrors: Dispatch<
      SetStateAction<{
        [key: string]: string;
      }>
    >;
    setShowError: Dispatch<SetStateAction<boolean>>;
    attachments: Attachment.AttachmentComponent[];
    setAttachments: Dispatch<SetStateAction<Attachment.AttachmentComponent[]>>;
    setIsNewAttachment: Dispatch<SetStateAction<boolean>>;
    dashboard: Dashboards;
  }
  export interface FormAddAttachment extends IUseFormAddAttachments {
    errors: { [key: string]: string };
    isNewAttachment: boolean;
    buyerOptions: ICardTop.IList[];
  }
  type IDashboards = {
    dashboard: Dashboards;
  };

  export interface IparseDashboardData {
    dashboardData: any;
    idTenant: number;
    dashboard: Dashboards;
    attachments: any;
  }
  export interface IparseCopyAttachments {
    dashboard: Dashboards;
    attachments: any;
  }
}

export { IFormAttachment };
