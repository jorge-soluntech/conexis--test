import type { UploadChangeParam } from 'antd/es/upload';
import error from 'next/error';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useAttachments from './useAttachments';

const useFileUpload = () => {
  const [showError, setShowError] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [attachments, setAttachments] = useState<any>(null);

  const { uploadS3File, updateS3File } = useAttachments();

  const errorUploadAttachment = (info: UploadChangeParam) => {
    setErrors({ file: `${info.file.name} file upload failed.` });
    setShowError(true);
  };

  const addNewFile = async (info: UploadChangeParam) => {
    if (info.file.status === 'done') {
      const response = await uploadS3File(info.file.name);
      if (!response.error) {
        setShowError(false);
        setAttachments({
          url: response.url,
          path: response.path,
          file: info.file,
          type: info.file.type,
          id: uuidv4(),
          fileName: info.file.name,
        });
      } else {
        setErrors({ file: response.message });
        setShowError(true);
      }
    } else if (info.file.status === 'error') {
      errorUploadAttachment(info);
    }
  };

  const updateFileAdded = async (fileUploaded: any) => {
    await updateS3File({
      url: fileUploaded.url,
      originFileObj: fileUploaded.file.originFileObj,
      type: fileUploaded.file.type,
    });
  };

  return {
    addNewFile,
    updateFileAdded,
    error,
    showError,
    errors,
    attachments,
    setAttachments,
  };
};

export default useFileUpload;
