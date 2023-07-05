import styles from '@/components/common/businessUnitsComponents/tableBusinessUnits/TableBusinessUnits.module.scss';
import tableStyles from '@/components/common/tableComponent/Table.module.scss';
import sorterTable from '@/utils/sorterTable';

import {
  ActionAcceptReject,
  ActionsEdit,
  ActionsShow,
  FilterIcon,
  RenderSwitch,
} from '../../tableComponent/components';
import type {
  CustomColumn,
  ExtendedColumnsType,
  RecordObject,
  SorterType,
  SortFunctionsTypes,
} from './types';
import { CustomOption, FilterTypes, SorterTypes } from './types';

export const addCustomEditActionOptions = (custom: CustomColumn) => {
  return {
    render: ActionsEdit(custom.actionEdit.url),
  };
};

export const addCustomShowActionOptions = (custom: CustomColumn) => {
  return {
    render: ActionsShow(custom.actionShow.url, custom.actionShow.dataIndex),
  };
};

export const addCustomAcceptRejectActionOptions = (custom: CustomColumn) => {
  return {
    render: ActionAcceptReject(custom.actionAcceptReject),
  };
};

export const SortFunctions: SortFunctionsTypes = {
  [SorterTypes.boolean]: (_col) => (a, b) => b.status - a.status,
  [SorterTypes.localeCompare]: (col) => (a, b) =>
    a[col.dataIndex].localeCompare(b[col.dataIndex]),
  [SorterTypes.text]: (col) => (idNumberA, idNumberB, sortOrder) =>
    sorterTable(idNumberA, idNumberB, col.dataIndex, sortOrder),
};

const FilterFunctions = {
  [FilterTypes.boolean]: (col: any) => (value: any, record: any) => {
    return record[col.dataIndex] === value;
  },
  [FilterTypes.uniqueByValue]: (col: any) => (value: any, record: any) => {
    return record[col.dataIndex as string].indexOf(value) === 0;
  },
};

export const addCustomSorterOptions = (
  value: SorterTypes | false,
  col: ExtendedColumnsType
): SorterType | null => {
  if (value === false) return null;

  return { sorter: SortFunctions[value](col) };
};

export const addCustomSwitchOptions = (custom: CustomColumn) => {
  const {
    [CustomOption.switch]: { callback, trueLabel, falseLabel },
  } = custom;
  return {
    render: RenderSwitch(callback, trueLabel, falseLabel),
  };
};

export const addCustomFilterOptions = (
  col: ExtendedColumnsType,
  value: FilterTypes
) => {
  return {
    filterIcon: FilterIcon,
    onFilter: FilterFunctions[value](col),
    filterMultiple: !(value === FilterTypes.boolean),
  };
};

const normalizeFilterText = (val: unknown) => {
  if (typeof val === 'string') {
    const temp = val.trim();
    return temp.length === 0 ? 'Blanks' : val;
  }
  return val;
};

export const uniqueValues = (data: any, col: any) =>
  Array.from(new Set(data?.map((item: any) => item[col.dataIndex]))).map(
    (val) => ({
      text: normalizeFilterText(val),
      value: val,
    })
  );

// TODO: replace any type
export const addCustomOptions = (
  custom: CustomColumn | undefined,
  col: any,
  data: any
) => {
  if (custom === undefined) return {};

  const entries = Object.entries(custom) as [
    keyof typeof custom,
    (typeof custom)[keyof typeof custom]
  ][];

  return entries.reduce((accumulator, [key, value]) => {
    // Apply predefined actions like edit
    let temp = {};
    switch (key) {
      case CustomOption.filter:
        temp = {
          ...addCustomFilterOptions(col, value as FilterTypes),
          filters:
            value === FilterTypes.uniqueByValue
              ? uniqueValues(data, col)
              : col.filters,
        };
        break;
      case CustomOption.switch:
        temp = {
          ...addCustomSwitchOptions(custom),
        };
        break;
      case CustomOption.actionEdit:
        temp = {
          ...addCustomEditActionOptions(custom),
        };
        break;
      case CustomOption.actionShow:
        temp = {
          ...addCustomShowActionOptions(custom),
        };
        break;
      case CustomOption.sorter:
        temp = {
          ...addCustomSorterOptions(value as SorterTypes, col),
        };
        break;
      case CustomOption.actionAcceptReject:
        temp = {
          ...addCustomAcceptRejectActionOptions(custom),
        };
        break;
      default:
        console.log(
          'this custom option is not currently supported',
          value,
          col
        );
        break;
    }
    return { ...accumulator, ...temp };
  }, {});
};

export const addDefaults = (columns: ExtendedColumnsType[]) => {
  return columns.map((item) => ({
    ...item,
    className: styles.columnTable,
    // @ts-ignore. It is expected to override sorter if its defined in the custom property
    custom: { sorter: 'text', ...item.custom },
  }));
};

export const addSwitchClassName = (record: RecordObject, columns: any) => {
  const swicthObj = columns.find((obj: any) => obj.custom && obj.custom.switch);

  if (swicthObj === undefined) {
    return tableStyles.rowEnabled;
  }

  const swicthEnabled = record[swicthObj.dataIndex];
  return swicthEnabled ? tableStyles.rowEnabled : tableStyles.rowDisabled;
};

/**
 *
 * @param obj any abject passed to this function will be checked for a attribute existence, ANY attribute not a specific one.
 * @returns boolean true/false
 */
export const objectHasAttributes = (obj: Record<any, any>): boolean =>
  Object.keys(obj).length > 0;
