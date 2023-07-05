import type { GetServerSideProps } from 'next';

import { List } from '@/components/common/crudElemnts/index';
import ExportDropdown from '@/components/common/exportDropdownComponent/ExportDropdownComponent';
import {
  expandedRowRender,
  query,
  useColumns,
} from '@/components/common/jobApprovalsComponents/jobApprovals/table-config';
import { TablePageLoaderQuery } from '@/components/common/loaders';
import en from '@/locales/en/en.json';

const { jobApprovals } = en;

const texts = {
  titleTable: jobApprovals.title,
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

  const config = {
    creatable: false,
    keysToSearchBy: ['key', 'jobTitle'],
  };

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
              config,
              expandedRowRender,
            }}
          >
            <List.Actions>
              <div>
                <ExportDropdown
                  responsive={false}
                  exportData={() => {
                    // TODO: Pending implementation export functionality
                  }}
                />
              </div>
            </List.Actions>
          </List>
        );
      }}
    </TablePageLoaderQuery>
  );
};

export default Page;
