import type { Dispatch, SetStateAction } from 'react';

declare namespace IUserComponent {
  export interface IProps {
    /** The title parameter to form */
    dataUser: DataUserMapped[];
    filters: Filter;
    filteredData: DataUserMapped[];
    handleSearchChange: (value: string) => void;
    loading: boolean;
    search: string;
    setDataUser: Dispatch<SetStateAction<DataUserMapped[]>>;
    setFilters: Dispatch<SetStateAction<Filter>>;
    setFilteredData: Dispatch<SetStateAction<DataUserMapped[]>>;
  }

  export interface DataUser {
    id: string;
    first_name: string;
    last_name: string;
    full_name: string;
    email: string;
    user_status: string;
    user_roles: string[];
  }
  export interface DataRecord {
    data: {
      statusCode: number;
      message: string;
      data: {
        users: DataUser[];
        count: number;
      };
    };
  }

  export interface DataUserMapped {
    key: string;
    name: string;
    email: string;
    userRole: string;
    status: boolean;
  }

  export interface Filter {
    userRole: Array<string>;
    userStatus: Array<boolean>;
  }
}

export { IUserComponent };
