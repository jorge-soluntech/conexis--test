import { useLayoutEffect, useState } from 'react';

import { PAGE_LOADING_TIME_IN_MILLISECONDS } from '../constants';

// We use this hook for create forms because there is no data to load.

const useCreateFormLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    const showSkeleton = () => {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, PAGE_LOADING_TIME_IN_MILLISECONDS);

      return () => {
        clearTimeout(timer);
      };
    };

    showSkeleton();
  }, []);

  return { loadingFormData: isLoading };
};

export default useCreateFormLoader;
