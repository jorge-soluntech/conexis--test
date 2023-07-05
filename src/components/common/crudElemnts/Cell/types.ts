import type { ButtonProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataIndex } from 'rc-table/lib/interface';
import type { MouseEvent } from 'react';

export type SwitchOption = {
  trueLabel: string;
  falseLabel: string;
  callback: (key: string) => void;
};

export type RecordObject = {
  [key: string]: any;
};

export type ActionEditType = {
  url: string;
};

export type ActionShow = {
  url: string;
  dataIndex: string;
};
export interface ActionAcceptReject extends ButtonProps {
  buttonText: string[];
  onClick: (event: MouseEvent) => void;
}

export enum FilterTypes {
  uniqueByValue = 'uniqueByValue',
  boolean = 'boolean',
}

export enum SorterTypes {
  boolean = 'boolean',
  text = 'text',
  localeCompare = 'localeCompare',
}

export enum CustomOption {
  sorter = 'sorter',
  actionEdit = 'actionEdit',
  actionShow = 'actionShow',
  switch = 'switch',
  filter = 'filter',
  actionAcceptReject = 'actionAcceptReject',
}

export type CustomColumn = {
  [CustomOption.filter]: FilterTypes;
  [CustomOption.sorter]: boolean | SorterTypes;
  [CustomOption.switch]: SwitchOption;
  [CustomOption.actionEdit]: ActionEditType;
  [CustomOption.actionShow]: ActionShow;
  [CustomOption.actionAcceptReject]: ActionAcceptReject;
};

export type ExtendedColumnsType = ColumnsType & {
  dataIndex?: DataIndex;
  custom: CustomColumn;
  className: string | undefined;
};

export type Sorter = (
  idNumberA: any,
  idNumberB: any,
  sortOrder: string | null | undefined
) => number;

export type SorterType = {
  sorter: Sorter;
};

export type SortFunctionsTypes = {
  [SorterTypes.boolean]: (col: any) => Sorter;
  [SorterTypes.text]: (col: any) => Sorter;
  [SorterTypes.localeCompare]: (col: any) => Sorter;
};
