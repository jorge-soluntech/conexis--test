import type { IMyJobsComponent } from '@/components/common/myJobsComponents/myJobs/IMyJobs';

declare namespace IJobs {
  export interface IState {
    allJobs: IMyJobsComponent.DataTable[];
    selectedJobId: string;
    isModalFillJob: boolean;
    isModalCancelJob: boolean;
    isModalDuplicateJob: boolean;
    isIndividual: boolean | undefined;
    isModalOpenJob: boolean;
    isModalDelete: boolean;
    isModalOnHoldJob: boolean;
  }
}

export { IJobs };
