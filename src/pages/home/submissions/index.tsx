import type { GetServerSideProps } from 'next';

import { List } from '@/components/common/crudElemnts/index';
import ExportDropdown from '@/components/common/exportDropdownComponent/ExportDropdownComponent';
import { TablePageLoaderQuery } from '@/components/common/loaders';
import {
  query,
  useColumns,
} from '@/components/common/submissionsComponents/submissions/table-config';
import en from '@/locales/en/en.json';

const { submissions } = en;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: {},
    };
  }
  return { redirect: { destination: '/auth', permanent: false } };
};

const exportAllJobs = (type: string) => {
  // Export file request
  return type;
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
            {...{
              data,
              error,
              mutate,
              isValidating,
              isLoading,
              columns,
              texts: submissions,
              config: { creatable: false },
            }}
          >
            <List.Actions>
              <ExportDropdown
                responsive={false}
                exportData={(type: string) => exportAllJobs(type)}
              />
            </List.Actions>
          </List>
        );
      }}
    </TablePageLoaderQuery>
  );
};

export default Page;
