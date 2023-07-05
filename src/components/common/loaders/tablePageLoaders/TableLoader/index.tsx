import { Skeleton, Table } from '@/components/designSystem';

import type { TableLoaderProps } from '../../types';
import styles from './tableLoader.module.scss';

const dataSource = {
  name: 'Loading',
  age: '0',
  address: 'Loading',
  jobTitle: 'Loading',
  position: 'Loading',
  business: 'Loading',
  action: 'Loading',
  location: 'Loading',
};

type Column = { key: any; dataIndex?: string; title?: () => JSX.Element };
const columnFactory = (key: string): Column => ({
  key,
  dataIndex: key,
  title: () => (
    <Skeleton
      {...{
        title: { width: 81, style: { margin: 0 } },
        active: true,
        loading: true,
        paragraph: false,
      }}
    />
  ),
});

const columns: Column[] = [
  columnFactory('name'),
  columnFactory('age'),
  columnFactory('address'),
  columnFactory('jobTitle'),
  columnFactory('position'),
  columnFactory('business'),
  columnFactory('action'),
  columnFactory('location'),
];

const TableLoader = ({ isLoading, rowCount = 8 }: TableLoaderProps) => (
  <Table
    {...{
      className: styles.loaderTable,
      rowKey: 'key',
      pagination: false,
      dataSource: [...Array(rowCount).fill(dataSource)].map((item, index) => ({
        ...item,
        key: `${index}`,
      })),

      columns: columns.map((column) => {
        return {
          ...column,
          render: () => {
            return (
              <Skeleton
                {...{
                  key: column.key,
                  title: true,
                  active: true,
                  loading: isLoading,
                  paragraph: false,
                }}
              />
            );
          },
        };
      }),
    }}
  />
);

export default TableLoader;
