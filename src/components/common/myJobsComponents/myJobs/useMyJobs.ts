import router from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { JobsServices } from '@/infrastructure/services/JobsServices';
import downloadFile from '@/utils/downloadFile';

import type { IMyJobsComponent } from './IMyJobs';
import { useMyJobsActions } from './useMyJobsActions';

export const useMyJobs = () => {
  const { width = 0 } = useWindowDimensions();
  const { dataUser } = useContext(AuthContext);
  const jobsServices = new JobsServices(router);
  const { allJobs } = useAppSelector((state) => state.jobs);
  const { currentUserRole, currentUserRoleName } = useAppSelector(
    (state) => state.dashboard
  );

  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [filteredData, setFilteredData] = useState<
    IMyJobsComponent.DataTable[]
  >([]);

  const [templateJobs, setTemplateJobs] = useState<string[]>([]);
  const { reloadData } = useMyJobsActions();

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      await reloadData();
      setLoading(false);
    };

    getJobs();
    return () => {
      setTemplateJobs([]);
    };
  }, [currentUserRole, dataUser?.logged_buyer]);

  useEffect(() => {
    setFilteredData(
      search
        ? allJobs.filter(
            (item: IMyJobsComponent.DataTable) =>
              item.jobId.toLowerCase().includes(search.toLowerCase()) ||
              item.jobTitle.toLowerCase().includes(search.toLowerCase())
          )
        : allJobs
    );
  }, [allJobs, search]);

  const handleSearchChange = (value: string): void => {
    setSearch(value);
  };

  const exportAllJobs = (type: string) => {
    jobsServices
      .exportAllJobs(currentUserRole as string, type)
      .then((response) => {
        downloadFile('jobs', type, response);
      });
  };

  return {
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
  };
};
