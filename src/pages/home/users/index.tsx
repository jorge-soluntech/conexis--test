import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { TablePageLoader } from '@/components/common/loaders';
import type { IUserComponent } from '@/components/common/userComponent/IUserComponent';
import useGetUserData from '@/components/common/userComponent/useUserData';

const UserComponent = dynamic(
  () => import('@/components/common/userComponent/UserComponent'),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * The Users page, will see Main as a template, use the same template for other pages
 * @returns The Users page  .. ./
 */

const Users = () => {
  return (
    <TablePageLoader<IUserComponent.IProps> {...{ useGetData: useGetUserData }}>
      {({
        dataUser,
        filters,
        filteredData,
        handleSearchChange,
        loading,
        search,
        setDataUser,
        setFilters,
        setFilteredData,
      }) => {
        return (
          <UserComponent
            {...{
              dataUser,
              filters,
              filteredData,
              handleSearchChange,
              loading,
              search,
              setDataUser,
              setFilters,
              setFilteredData,
            }}
          />
        );
      }}
    </TablePageLoader>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  };
};

export default Users;
