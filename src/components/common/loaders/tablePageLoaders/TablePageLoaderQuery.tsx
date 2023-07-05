import useSWR from 'swr';

import type { PageLoaderSWRProps } from '../types';
import TablePageSkeleton from './TablePageSkeleton';

const TablePageLoaderQuery = ({
  children,
  fetcher,
  queryString,
}: PageLoaderSWRProps) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    queryString,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return isLoading && isValidating && !data ? (
    <TablePageSkeleton {...{ loading: isLoading }} />
  ) : (
    <>{children({ data, error, mutate, isLoading, isValidating })}</>
  );
};

export default TablePageLoaderQuery;
