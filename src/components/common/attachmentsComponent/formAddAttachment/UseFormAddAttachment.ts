import type { UploadChangeParam } from 'antd/es/upload/interface';
import type { Dayjs } from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import useAttachments from '@/components/hooks/useAttachments/useAttachments';
import { FORM_FIELDS as BUYERS_FORM_FIELDS } from '@/consts/buyers';
import { DASHBOARDTYPES } from '@/consts/permissions';
import { FORM_FIELDS } from '@/consts/suppliers';
import locales from '@/locales/en/en.json';
import { capitalizeString } from '@/utils/stringUtils';

import type { IAddAttachment } from './IFormAddAttachment';

const {
  suppliers: { stepFour },
  formsCommon: {
    errors: { textErrorMandatoryEmptyFields },
  },
} = locales;
export const useFormAddAttachments = ({
  setErrors,
  setShowError,
  attachments,
  setAttachments,
  setIsNewAttachment,
  dashboard,
}: IAddAttachment.IUseFormAddAttachments) => {
  const { uploadS3File } = useAttachments();

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
        setAttachments((prevState) =>
          prevState.map((attachment) => {
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
        setErrors({ file: response.message });
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
    setAttachments((prevState) =>
      prevState.map((attachment: any) => {
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
    const mandatoriesFields = Object.keys(
      dashboard === DASHBOARDTYPES.supplier
        ? FORM_FIELDS.stepFourth.mandatories
        : BUYERS_FORM_FIELDS.stepFourth.mandatories
    );
    const numberOfMandatoryFields = mandatoriesFields.length;
    let counter = 0;
    // attachments type can change depending the data to create a supplier
    attachments.forEach((attachment: any) => {
      if (!attachment.type) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(attachment.id, 'type', stepFour.TypeOfDocumentRequired),
        };
        counter += 1;
      }
      if (!attachment.name) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(attachment.id, 'name', stepFour.nameRequired),
        };
        counter += 1;
      }
      if (dashboard === DASHBOARDTYPES.supplier && !attachment.buyer) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(attachment.id, 'buyer', stepFour.buyerRequired),
        };
        counter += 1;
      }
      /** the expiry date field is only required when the type of document field is client agreement */
      if (
        dashboard === DASHBOARDTYPES.supplier &&
        (attachment.type === 'Supplier Agreements' ||
          attachment.type === 'COI') &&
        !attachment.expiryDate
      ) {
        const attachmentText =
          attachment.type === 'Supplier Agreements'
            ? attachment.type.toLowerCase()
            : attachment.type;
        updatedErrors = {
          ...updatedErrors,
          ...addError(
            attachment.id,
            'expiryDate',
            `The expiry date field is mandatory for ${attachmentText}. Please make sure to fill it out before submitting the form.`
          ),
        };
        // counter += 1;
      } else if (
        attachment.type === 'Client Agreement' &&
        !attachment.expiryDate
      ) {
        updatedErrors = {
          ...updatedErrors,
          ...addError(attachment.id, 'expiryDate', stepFour.expiryDateRequired),
        };
        // counter += 1;
      }
    });
    if (
      attachments.length > 0 &&
      counter === numberOfMandatoryFields * attachments.length
    ) {
      updatedErrors = {
        emptyRequiredFields: textErrorMandatoryEmptyFields,
        ...updatedErrors,
      };
    }
    setErrors(updatedErrors);
    return Object.keys(updatedErrors).length > 0;
  };

  return {
    onChange,
    addAttachment,
    updateAttachment,
    deleteAttachment,
    validateAttachments,
  };
};
