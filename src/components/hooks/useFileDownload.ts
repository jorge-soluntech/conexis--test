import router from 'next/router';
import { useState } from 'react';

import { UtilServices } from '@/infrastructure/services/utilsServices';

const useFileDownload = () => {
  const [error, setError] = useState<boolean>(false);

  const downloadFile = async (file: { name: string; id: string }) => {
    try {
      await UtilServices.downloadS3File(file, router);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return { downloadFile, error };
};

export default useFileDownload;
