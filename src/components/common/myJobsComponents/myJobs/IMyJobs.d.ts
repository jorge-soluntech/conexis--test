declare namespace IMyJobsComponent {
  export type IProps = {
    currentUserRoleName: string | null;
    handleSearchChange: (value: string) => void;
    exportAllJobs: (type: string) => void;
    loading: boolean;
    width: number;
    filteredData: IMyJobsComponent.DataTable[];
    allJobs: IMyJobsComponent.DataTable[];
    search: string;
    setTemplateJobs: Dispatch<SetStateAction<string[]>>;
    templateJobs: string[];
  };
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
}

export { IMyJobsComponent };
