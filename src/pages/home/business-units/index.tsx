import type { GetServerSideProps } from 'next';

import {
  query,
  useColumns,
} from '@/components/common/businessUnitsComponents/businessUnits/table-config';
import { List } from '@/components/common/crudElemnts/index';
import { TablePageLoaderQuery } from '@/components/common/loaders';
import en from '@/locales/en/en.json';

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

const Page = () => {
  const columns = useColumns();

  return (
    <TablePageLoaderQuery
      {...{ fetcher: query.fetcher, queryString: query.url }}
    >
      {({ data, error, mutate, isValidating, isLoading }) => {
        return (
          <List
            config={{
              keysToSearchBy: [
                'idNumber',
                'location',
                'businessUnitNumber',
                'buOwner',
              ],
            }}
            columns={columns}
            texts={en.businessUnits}
            data={data}
            error={error}
            mutate={mutate}
            isValidating={isValidating}
            isLoading={isLoading}
          />
        );
      }}
    </TablePageLoaderQuery>
  );
};

export default Page;
