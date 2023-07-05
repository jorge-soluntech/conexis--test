import type { Dispatch, SetStateAction } from 'react';

declare namespace ITableMyJobs {
  export interface DataTable {
    key: string;
    jobId: string;
    jobTitle: string;
    typeOfPosition: string;
    numberOfPositions: number;
    status: string;
    plannedStartDate: string;
    plannedEndDate: string;
    businessUnit: string;
    postedOn: string;
    filledPositions: number;
    submissionsCount: number;
  }
  export interface IProps {
    search: string;
    loading: boolean;
    dataTable: DataTable[];
    filteredData: DataTable[];
    setTemplateJobs: Dispatch<SetStateAction<string[]>>;
  }

  export interface Filter {
    typeOfPosition: Array<string>;
    status: Array<string>;
    plannedStartDate: Array<string>;
    plannedEndDate: Array<string>;
    businessUnit: Array<string>;
  }
}

export { ITableMyJobs };
