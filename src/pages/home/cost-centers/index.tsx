import type { GetServerSideProps } from 'next';

import {
  query,
  useColumns,
} from '@/components/common/costCenterComponents/costCenter/table-config';
import { List } from '@/components/common/crudElemnts/index';
import { TablePageLoaderQuery } from '@/components/common/loaders';
// import en from '@/locales/en/en.json';

// TODO: include this texts in the language dictionary
const texts = {
  titleTable: 'Manage Cost Centers',
  buttonAddNew: 'Add cost center',
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: {},
    };
  }
  return { redirect: { destination: '/auth', permanent: false } };
};

const Page = () => {
  const columns = useColumns();

  return (
    <TablePageLoaderQuery
      {...{ queryString: query.url, fetcher: query.fetcher }}
    >
      {({ data, error, mutate, isValidating, isLoading }) => {
        return (
          <List
            {...{
              data,
              error,
              mutate,
              isValidating,
              isLoading,
              columns,
              texts,
              config: {
                keysToSearchBy: ['cost_center', 'cost_center_name'],
              },
            }}
          />
        );
      }}
    </TablePageLoaderQuery>
  );
};

export default Page;
