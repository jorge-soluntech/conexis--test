import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { TablePageLoader } from '@/components/common/loaders';
import type { IMyJobsComponent } from '@/components/common/myJobsComponents/myJobs/IMyJobs';
import { useMyJobs } from '@/components/common/myJobsComponents/myJobs/useMyJobs';

const MyJobsComponent = dynamic(
  () => import('@/components/common/myJobsComponents/myJobs/MyJobs'),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * my jobs main page
 *
 * @returns The My jobs main page
 */

const MyJobs = () => {
  return (
    <TablePageLoader<IMyJobsComponent.IProps> {...{ useGetData: useMyJobs }}>
      {({
        currentUserRoleName,
        handleSearchChange,
        exportAllJobs,
        loading,
        width,
        filteredData,
        allJobs,
        search,
        setTemplateJobs,
        templateJobs,
      }) => {
        return (
          <MyJobsComponent
            {...{
              currentUserRoleName,
              handleSearchChange,
              exportAllJobs,
              loading,
              width,
              filteredData,
              allJobs,
              search,
              setTemplateJobs,
              templateJobs,
            }}
          />
        );
      }}
    </TablePageLoader>
  );
};

export default MyJobs;
