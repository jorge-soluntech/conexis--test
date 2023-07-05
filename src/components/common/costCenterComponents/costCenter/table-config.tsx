import useSWRMutation from 'swr/mutation';

import type { ICostCenter } from '@/components/common/costCenterComponents/costCenter/ICostCenter';
import { COST_CENTER_ENDPOINTS } from '@/consts/cost_centers_ui';
import en from '@/locales/en/en.json';

import { publish } from '../../crudElemnts/Events';
import queryConfig, { toggleCostCenter } from './query';

export const query = queryConfig;

const {
  costCenters: { table },
} = en;

const statusFilters = [
  { text: 'Active', value: true },
  { text: 'Inactive', value: false },
];

export const useUpdateStatus = () => {
  const { trigger, ...rest } = useSWRMutation(
    COST_CENTER_ENDPOINTS.read_all,
    toggleCostCenter,
    {
      rollbackOnError: true,
      revalidate: false,
    }
  );

  const optimisticUpdateStatus = (key: string) => {
    trigger(
      { key },
      {
        onError(_data) {
          publish('showError', 'mensaje de error');
        },
        populateCache: (
          updatedValue,
          cache:
            | (ICostCenter.DataCostCenterMapped & { [x: string]: any })
            | undefined
        ) => {
          return cache?.map((item: ICostCenter.DataCostCenterMapped) =>
            item.key === updatedValue.key ? updatedValue : item
          );
        },
      }
    );
  };

  return { ...rest, optimisticUpdateStatus };
};

export const useColumns = () => {
  const { optimisticUpdateStatus } = useUpdateStatus();

  return [
    { title: table.number, dataIndex: 'cost_center' },
    {
      title: table.name,
      dataIndex: 'cost_center_name',
      custom: { filter: 'uniqueByValue' },
    },
    {
      title: table.status,
      dataIndex: 'status',
      filters: statusFilters,
      custom: {
        sorter: 'boolean',
        filter: 'boolean',
        switch: { callback: optimisticUpdateStatus },
      },
    },
  ];
};
