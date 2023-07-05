import { useEffect, useState } from 'react';

import RequestService from '@/infrastructure/services';

import type { IUserComponent } from './IUserComponent';

const useGetUserData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [dataUser, setDataUser] = useState<IUserComponent.DataUserMapped[]>([]);
  const [filteredData, setFilteredData] = useState<
    IUserComponent.DataUserMapped[]
  >([]);
  const [filters, setFilters] = useState<IUserComponent.Filter>({
    userRole: [],
    userStatus: [],
  });

  useEffect(function getUserDataToMapToState() {
    setIsLoading(true);
    RequestService.getUsers().then((response: IUserComponent.DataRecord) => {
      const result: any = response.data.data.users.map(
        ({ id, first_name, last_name, email, user_status, user_roles }) => ({
          key: id,
          name: `${first_name} ${last_name}`,
          email,
          userRole: user_roles[0],
          status: user_status.toLowerCase() === 'active',
        })
      );
      setFilteredData(result);
      setDataUser(result);
      setIsLoading(false);
    });
  }, []);

  const handleSearchChange = (value: string): void => {
    if (value.toLowerCase() !== '') {
      setSearch(value);
      const filterData = dataUser.filter(
        (item: any) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filterData);
    } else {
      setSearch('');
    }
  };

  return {
    dataUser,
    filters,
    filteredData,
    handleSearchChange,
    loading: isLoading,
    search,
    setDataUser,
    setFilters,
    setFilteredData,
  };
};

export default useGetUserData;
