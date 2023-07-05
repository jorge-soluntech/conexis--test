import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import type { IGLCodes } from '@/components/common/glCodesComponents/glCodes/IGLCodes';
import useGLCodes from '@/components/common/glCodesComponents/useGLCodesData';
import { TablePageLoader } from '@/components/common/loaders';

const GLCodes = dynamic(
  () => import('@/components/common/glCodesComponents/glCodes/GLCodes')
);

/**
 * GL codes main page
 *
 * @returns The GL codes page
 */

const GLCodesPage = () => {
  return (
    <TablePageLoader<IGLCodes.IProps> {...{ useGetData: useGLCodes }}>
      {({
        dataGLCodes,
        filteredData,
        handleSearchChange,
        loading,
        setDataGLCodes,
        setFilteredData,
        searchText,
      }) => {
        return (
          <GLCodes
            {...{
              dataGLCodes,
              filteredData,
              handleSearchChange,
              loading,
              setDataGLCodes,
              setFilteredData,
              searchText,
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

export default GLCodesPage;
