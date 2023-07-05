import type { UploadChangeParam } from 'antd/es/upload/interface';
import type { Dayjs } from 'dayjs';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useAttachments from '@/components/hooks/useAttachments/useAttachments';
import type { IBuyers } from '@/consts/IBuyers';
import { capitalizeString } from '@/utils/stringUtils';

import type { IAddAttachment } from './IAddAttachment';

const useAddAttachments = ({
  attachments,
  setAttachments,
  setErrors,
  setShowError,
  setIsNewAttachment,
}: IAddAttachment.IUseAddAttachments) => {
  const { idTenant } = useContext(AuthContext);
  const { uploadS3File } = useAttachments();
  const { dataBuyer } = useAppSelector((state) => state.buyers);

  const errorUploadAttachment = (info: UploadChangeParam) => {
    setErrors({ file: `${info.file.name} file upload failed.` });
    setShowError(true);
  };

  const addAttachment = async (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      const response = await uploadS3File(info.file.name);
      if (!response.error) {
        setShowError(false);
        setAttachments((prev: any) => [
          ...(prev || []),
          {
            url: response.url,
            path: response.path,
            file: info.file,
            name: '',
            type: null,
            id: uuidv4(),
            expiryDate: undefined,
            fileName: info.file.name,
          },
        ]);
        setIsNewAttachment(false);
      } else {
        setErrors({ file: capitalizeString(response.message) });
        setShowError(true);
      }
    } else if (info.file.status === 'error') {
      errorUploadAttachment(info);
    }
  };

  const updateAttachment = async (id: string, info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      const response = await uploadS3File(info.file.name);
      if (!response.error) {
        setShowError(false);
        setAttachments((prevState: any[]) =>
          prevState.map((attachment: any) => {
            if (attachment.id === id) {
              return {
                ...attachment,
                url: response.url,
                path: response.path,
                file: info.file,
                fileName: info.file.name,
              };
            }
            return attachment;
          })
        );
        setIsNewAttachment(false);
      } else {
        setErrors({ file: capitalizeString(response.message) });
        setShowError(true);
      }
    } else if (info.file.status === 'error') {
      errorUploadAttachment(info);
    }
  };

  const deleteAttachment = (id: string) => {
    const newAttachments = attachments.filter(
      (attachment: any) => attachment.id !== id
    );
    setAttachments(newAttachments);
  };

  const onChange = (
    id: string,
    field: string,
    value: string | Dayjs | undefined | null
  ) => {
    setAttachments((prevState: any[]) =>
      prevState.map((attachment: { id: string }) => {
        if (attachment.id === id) {
          return { ...attachment, [field]: value };
        }
        return attachment;
      })
    );
  };

  const addError = (id: string, field: string, error: string): Object => ({
    [`${id}_${field}`]: error,
  });

  const validateAttachments = () => {
    let updatedErrors = {};
    attachments.forEach((attachment) => {
      if (!attachment.type) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(
            attachment.id,
            'type',
            'The type of document field is mandatory for client agreements. Please make sure to fill it out before submitting the form.'
          ),
        };
      }
      if (!attachment.name) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(
            attachment.id,
            'name',
            'The name field is mandatory for client agreements. Please make sure to fill it out before submitting the form.'
          ),
        };
      }
      /** the expiry date field is only required when the type of document field is client agreement */
      if (attachment.type === 'Client Agreement' && !attachment.expiryDate) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(
            attachment.id,
            'expiryDate',
            'The expiry date field is mandatory for client agreements. Please make sure to fill it out before submitting the form.'
          ),
        };
      }
    });
    setErrors(updatedErrors);
    return Object.keys(updatedErrors).length > 0;
  };

  const handleData = async () => {
    const dataToSend: any = {};
    Object.keys(dataBuyer).forEach((key) => {
      const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      dataToSend[snakeCaseKey] = dataBuyer[key as keyof IBuyers.IDataBuyer];
    });

    dataToSend.id_tenant = idTenant;
    dataToSend.primary_contact_email =
      dataBuyer.primaryContactEmail === ''
        ? null
        : dataBuyer.primaryContactEmail;

    dataToSend.accounts_payable_contact_email =
      dataBuyer.accountsPayableContactEmail === ''
        ? null
        : dataBuyer.accountsPayableContactEmail;
    /** the value of the bypassJobApproval and bypassSubmissionApproval fields are reversed in the database.
     * This means that if the answer to this field is "no", the database must store a True and vice versa. */
    dataToSend.bypass_job_approval = !dataBuyer.bypassJobApproval;
    dataToSend.bypass_submission_approval = !dataBuyer.bypassSubmissionApproval;
    dataToSend.contract_approver_id = dataBuyer.contractApproverId?.value;
    return dataToSend;
  };

  return {
    onChange,
    handleData,
    addAttachment,
    updateAttachment,
    deleteAttachment,
    validateAttachments,
  };
};

export default useAddAttachments;
