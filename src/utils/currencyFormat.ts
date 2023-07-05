import type { valueType } from 'antd/es/statistic/utils';

export const currencyFormatterNumber = (value: valueType | undefined) =>
  `$ ${value}`?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const currencyParserNumber = (value: string | undefined) =>
  value!.replace(/\$\s?|(,*)/g, '');
