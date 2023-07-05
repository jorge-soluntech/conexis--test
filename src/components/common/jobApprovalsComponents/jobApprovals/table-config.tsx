import type { ReactNode } from 'react';

import en from '@/locales/en/en.json';

import JobsExpandableRowDetails from '../../jobsExpandableRow';
import { ExpandedRowDetailsWrapper } from '../../tableComponent/expandedRowDetailsWrapper';
import queryConfig from './query';

export const query = queryConfig;

const {
  jobApprovals: { table },
} = en;

export const useColumns = () => {
  return [
    { title: table.id, dataIndex: 'key' },
    { title: table.jobTitle, dataIndex: 'jobTitle' },
    {
      title: table.positionType,
      dataIndex: 'positionType',
      custom: { filter: 'uniqueByValue' },
    },
    {
      title: table.plannedStartDate,
      dataIndex: 'plannedStartDate',
      custom: { filter: 'uniqueByValue' },
    },
    {
      title: table.plannedEndDate,
      dataIndex: 'plannedEndDate',
      custom: { filter: 'uniqueByValue' },
    },
    {
      title: table.businessUnits,
      dataIndex: 'businessUnit',
      custom: { filter: 'uniqueByValue' },
    },
    {
      title: table.actions,
      custom: {
        actionAcceptReject: {
          buttonText: [table.accept, table.reject],
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            // TODO: Pending implementation
            // const { id } = event.currentTarget;
            // NOTE:: add your request or redux or logic here to handle data and onclick action
          },
        },
        sorter: false,
      },
    },
  ];
};

export const expandedRowRender = (
  record: any,
  _index: number,
  _indent: number,
  _expanded: boolean
): ReactNode => {
  return (
    <ExpandedRowDetailsWrapper>
      <ExpandedRowDetailsWrapper.DetailsContent>
        <ExpandedRowDetailsWrapper.ContentSection>
          <JobsExpandableRowDetails {...{ record }} />
        </ExpandedRowDetailsWrapper.ContentSection>
      </ExpandedRowDetailsWrapper.DetailsContent>
    </ExpandedRowDetailsWrapper>
  );
};
