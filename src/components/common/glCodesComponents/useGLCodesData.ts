import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { GLCodesServices } from '@/infrastructure/services/GLCodesServices';

import type { IGLCodes } from './glCodes/IGLCodes';

const useGLCodes = () => {
  const router = useRouter();
  const glCodesServices = new GLCodesServices(router);

  const [searchText, setSearchText] = useState<boolean>(false);
  const [loading, setLoader] = useState<boolean>(true);
  const [dataGLCodes, setDataGLCodes] = useState<IGLCodes.IGLCodesData[]>([]);
  const [filteredData, setFilteredData] = useState<IGLCodes.IGLCodesData[]>([]);

  const { dataUser } = useContext(AuthContext);

  const getGlCodes = async (): Promise<void> => {
    await glCodesServices.getGLCodes().then((response) => {
      const result = response.data.map(
        ({ id, gl_code, description, is_active }: IGLCodes.IGLCodesData) => {
          return {
            key: id,
            description,
            glCode: gl_code,
            isActive: is_active,
          };
        }
      );
      setDataGLCodes(result);
      setLoader(false);
    });
  };

  const handleSearchChange = (value: string) => {
    if (value.toLowerCase() !== '') {
      setSearchText(true);
      const filterData = dataGLCodes.filter(
        (item: any) =>
          item.glCode?.toLowerCase().includes(value.toLowerCase()) ||
          item.description?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filterData);
    } else {
      setSearchText(false);
    }
  };

  useEffect(() => {
    getGlCodes();
  }, [dataUser?.logged_buyer]);

  return {
    dataGLCodes,
    filteredData,
    handleSearchChange,
    loading,
    setDataGLCodes,
    setFilteredData,
    searchText,
  };
};

export default useGLCodes;
