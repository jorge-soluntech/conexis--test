import { UtilServices } from '@/infrastructure/services/utilsServices';

import type { IUseAttachments } from './IUseAttachments';

const useAttachments = () => {
  const uploadS3File = async (name: string) => {
    const extension = name.substring(name.lastIndexOf('.') + 1);
    const response = await UtilServices.uploadS3File(extension);
    if (response.statusCode !== 200) {
      return { error: true, message: response.message[0] };
    }
    return {
      path: response.path,
      url: response.url,
    };
  };

  const updateS3File = async (attachment: IUseAttachments.IProps) => {
    await UtilServices.updateS3File(
      attachment.url,
      attachment.originFileObj,
      attachment.type
    );
  };

  return {
    uploadS3File,
    updateS3File,
  };
};

export default useAttachments;
