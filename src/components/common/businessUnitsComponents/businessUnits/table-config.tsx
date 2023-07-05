import useSWRMutation from 'swr/mutation';

import { publish } from '@/components/common/crudElemnts/Events';
import en from '@/locales/en/en.json';

import type { IBusinessUnits } from './IBusinessUnits';
import queryConfig, { toggleBusinessUnit } from './query';

export const query = queryConfig;

const {
  businessUnits: { table },
} = en;

export const useUpdateStatus = () => {
  const { trigger, ...rest } = useSWRMutation(
    `/businessUnits/readAll`,
    toggleBusinessUnit,
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
            | (IBusinessUnits.DataBusinessUnitsMapped & { [x: string]: any })
            | undefined
        ) => {
          return cache?.map((item: IBusinessUnits.DataBusinessUnitsMapped) =>
            item.key === updatedValue.key ? updatedValue : item
          );
        },
      }
    );
  };
  return { ...rest, optimisticUpdateStatus };
};

const statusFilters = [
  { text: 'Active', value: true },
  { text: 'Inactive', value: false },
];

export const useColumns = () => {
  const { optimisticUpdateStatus } = useUpdateStatus();
  return [
    {
      title: table.id,
      dataIndex: 'idNumber',
    },
    {
      title: table.number,
      dataIndex: 'businessUnitNumber',
      custom: {
        sorter: 'localeCompare',
      },
    },
    {
      title: table.name,
      dataIndex: 'location',
    },
    {
      title: table.buOwner,
      dataIndex: 'buOwner',
      custom: {
        filter: 'uniqueByValue',
      },
    },
    {
      title: table.status,
      dataIndex: 'status',
      filters: statusFilters,
      custom: {
        sorter: 'boolean',
        filter: 'boolean',
        switch: {
          callback: optimisticUpdateStatus,
        },
      },
    },
    {
      title: table.actions,
      custom: {
        actionEdit: {
          url: '/home/business-units/edit',
        },
        sorter: false,
      },
    },
  ];
};
