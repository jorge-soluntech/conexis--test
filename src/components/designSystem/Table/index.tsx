import type { TableProps as AntTableProps } from 'antd';
import { Table as AntTable } from 'antd';

export interface TableProps extends AntTableProps<any> {}

export const Table = AntTable;
