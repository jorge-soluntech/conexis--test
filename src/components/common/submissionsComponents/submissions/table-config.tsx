import router from 'next/router';

import tableStyles from '@/components/common/tableComponent/Table.module.scss';
import { UtilServices } from '@/infrastructure/services/utilsServices';
import en from '@/locales/en/en.json';

import queryConfig from './query';

export const query = queryConfig;
const {
  submissions: { table },
} = en;

const downloadS3File = async (file: { name: string; id: string }) => {
  await UtilServices.downloadS3File(file, router);
};

const renderResumeLink = (text: string, props: any) => {
  if (props.resume) {
    const file = { name: text, id: props.resume };
    return (
      <span
        className={tableStyles.iconAttachment}
        onClick={() => downloadS3File(file)}
      />
    );
  }
  return null;
};

// TODO if show and edit url always follows the same convection
// we can skip the need to defined in this configuration
export const useColumns = () => {
  return [
    {
      title: table.id,
      dataIndex: 'idNumber',
      custom: {
        actionShow: {
          url: '/home/submissions',
          dataIndex: 'idNumber',
        },
      },
    },
    {
      title: table.status,
      dataIndex: 'status',
      custom: { filter: 'uniqueByValue' },
    },
    { title: table.jobId, dataIndex: 'jobId' },
    { title: table.jobTitle, dataIndex: 'jobTitle' },
    {
      title: table.skillCategory,
      dataIndex: 'skillCategory',
      custom: { filter: 'uniqueByValue' },
    },
    { title: table.candidate, dataIndex: 'candidateName' },
    {
      title: table.resume,
      dataIndex: 'resume',
      render: renderResumeLink,
    },
    {
      title: table.actions,
      custom: {
        actionEdit: {
          url: '/home/submissions/edit',
        },
        sorter: false,
      },
    },
  ];
};
