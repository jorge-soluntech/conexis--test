import type { PageLoaderProps } from '../types';
import TablePageSkeleton from './TablePageSkeleton';

const TablePageLoader = <P extends { loading: boolean }>({
  children,
  useGetData,
}: PageLoaderProps<P>) => {
  const data: P = useGetData();

  return !data.loading ? (
    <>{children(data)}</>
  ) : (
    <TablePageSkeleton {...{ loading: data.loading }} />
  );
};

export default TablePageLoader;
