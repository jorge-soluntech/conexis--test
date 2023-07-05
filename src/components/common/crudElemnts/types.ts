import type { TableProps } from 'antd';
import type { ReactElement, ReactNode } from 'react';
import type { KeyedMutator } from 'swr';

export interface LayoutSubComponentProps {
  children: ReactElement;
}

export type DefaultRowSelectOptions = TableProps<any>;

export type ExpandedRowRender = (
  record: any,
  index: number,
  indent: number,
  expanded: boolean
) => ReactNode;

export interface IListConditionalProps {
  children?: ReactNode;
  config?: {
    creatable?: boolean;
    searchable?: boolean;
    searchableFn?: void;
    keysToSearchBy?: string[];
    paginationOptions?: any;
  };
  defaultRowSelectOptions?: DefaultRowSelectOptions;
  expandedRowRender?: ExpandedRowRender;
}

export interface IList extends IListConditionalProps {
  data: any;
  error: any;
  mutate: KeyedMutator<any>;
  isValidating: boolean;
  isLoading: boolean;
  columns: any[];
  texts: any;
}
