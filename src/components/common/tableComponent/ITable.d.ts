import type { TableRowSelection } from 'antd/lib/table/interface';

import type { Dashboards } from '@/consts/permissions';

declare namespace ITableComponent {
  export interface IProps {
    dashboard?: Dashboards;
    page: number;
    loading: boolean;
    dataTable: Object<any>;
    pageSize?: number;
    columns: ColumnsType[];
    onChange: TableProps<any>['onChange'];
    rowsSkeleton: number;
    columnsSkeleton: number;
    padding?: string;
    showError?: boolean;
    setShowError?: Function;
    expandable?: TableProps<any>['expandable'];
    widthError?: string;
    errorMessage?: string;
    tableRef?: RefObject<HTMLDivElement>;
    expandableData?: ExpandableConfig<any>;
    total?: number;
    showSizeChanger?: boolean;
    rowSelection?: TableRowSelection<any>;
  }
}

export { ITableComponent };
