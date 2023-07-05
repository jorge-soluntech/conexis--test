import { Table } from 'antd';
import type { FC } from 'react';
import { useMemo } from 'react';

import styles from '@/components/common/businessUnitsComponents/tableBusinessUnits/TableBusinessUnits.module.scss';
import SkeletonTable from '@/components/common/skeletonTable/SkeletonTable';
import tableStyles from '@/components/common/tableComponent/Table.module.scss';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { MOBILE_BREAKPOINT } from '@/consts/login_ui';

import { ExpandIcon, FilterIcon } from '../../tableComponent/components';
import type { DefaultRowSelectOptions, ExpandedRowRender } from '../types';
import {
  addCustomOptions,
  addDefaults,
  addSwitchClassName,
  objectHasAttributes,
} from './helpers';
import type { ExtendedColumnsType } from './types';

// TODO:: check if we should move components,
// into their own respective files for all table components
export const Loading: FC = () => (
  <SkeletonTable loading={true} rows={5} columns={5} />
);

export const Failure: FC = ({ error }: any) => {
  return <div>Error loading: {error}</div>;
};

// generateAntTableColumns & defaultExpandableRowOptions are not in helpers because
// they return ReactElement or ReactNode this is tsx helpers are specifically ts in a ts file,
// and it is better to colocate with the Success component in this case.
const generateAntTableColumns = (
  data: any,
  columnsConfig: ExtendedColumnsType[]
) => {
  // here we are checking for the two empty objects
  // that represent columns for SELECTION_COLUMN & EXPAND_COLUMN see the Table type in antd
  const columnsConfigHasSelectAndExpand = columnsConfig
    .slice(0, 1)
    .some((item) => !objectHasAttributes(item));

  // copy the original array because splice will alter original array
  // unlike slice so just to make sure nothing strange happens with the original array we will use a copy.
  const localColumnsConfig = columnsConfig;

  // here we removes the above SELECTION_COLUMN & EXPAND_COLUMN if they exist otherwise we use the original columnsConfig
  const columns = columnsConfigHasSelectAndExpand
    ? localColumnsConfig.splice(2, columnsConfig.length)
    : columnsConfig;

  // Table expects exactly Table.SELECTION_COLUMN, Table.EXPAND_COLUMN to change the order of the columns (
  // select first checkbox second) so here we add them in again.
  // But we need to make some checks here before sending the columns to addDefaults this is what the slicing and splicing does.
  // This needs to be done to not alter the implementation that the developer expects which is adding them to the columns array in config.
  return [
    columnsConfigHasSelectAndExpand && Table.SELECTION_COLUMN,
    columnsConfigHasSelectAndExpand && Table.EXPAND_COLUMN,
    ...addDefaults(columns).map((colConfig: any) => {
      const { custom, ...col } = colConfig;

      const hasUserDefinedFilters = Object.keys(col).includes('filters');
      return {
        ...col,
        filterIcon: hasUserDefinedFilters ? FilterIcon : null,
        title: () => <span className={styles.headerTable}>{col.title}</span>,
        ...addCustomOptions(custom, col, data),
      };
    }),
  ].filter(Boolean); // if columnsConfigHasSelectAndExpand is false this will filter out the false values.
};

interface SuccessExpandableProps {
  expandedRowRender?: ExpandedRowRender;
}

const defaultExpandableRowOptions = ({
  expandedRowRender,
}: SuccessExpandableProps) => {
  if (expandedRowRender) {
    return {
      expandable: {
        columnWidth: '1px',
        expandIcon: ExpandIcon,
        expandedRowRender,
        rowExpandable: (record: any) => record.details !== null,
      },
    };
  }

  return null;
};

interface SuccessOptionalProps extends SuccessExpandableProps {
  paginationOptions?: any;
  defaultRowSelectOptions?: DefaultRowSelectOptions;
}

interface SuccessProps extends SuccessOptionalProps {
  data: any;
  columns: ExtendedColumnsType[];
}

// TODO: add proper types
export const Success = ({
  data,
  columns,
  defaultRowSelectOptions,
  expandedRowRender,
  paginationOptions,
}: SuccessProps) => {
  const { width = 0 } = useWindowDimensions();

  const columnsWithStyles = useMemo(
    () => generateAntTableColumns(data, columns),
    [generateAntTableColumns]
  );
  const addDefaultsExpandableOptions = useMemo(
    () => defaultExpandableRowOptions({ expandedRowRender }),
    [expandedRowRender]
  );

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={columnsWithStyles}
      className={tableStyles.userTable}
      rowClassName={(record) => addSwitchClassName(record, columns) ?? ''}
      pagination={{
        size: 'small',
        style: {
          marginTop: '28px',
          marginBottom: '0px',
          left: width <= MOBILE_BREAKPOINT ? '0' : '',
          position: width <= MOBILE_BREAKPOINT ? 'sticky' : 'initial',
          width: width <= MOBILE_BREAKPOINT ? 'max-content' : '100%',
        },
        defaultPageSize: 25,
        showSizeChanger: true,
        pageSizeOptions: ['10', '25', '50', '100', '500', '1000'],
        showTotal: (total, range): JSX.Element => {
          return (
            <span style={{ height: '32px' }}>
              Showing {range[0]} - {range[1]} of {total}
            </span>
          );
        },
        ...paginationOptions,
      }}
      {...defaultRowSelectOptions}
      {...addDefaultsExpandableOptions}
    />
  );
};
