import type { IJobs } from '../jobApprovalsComponents/jobApprovals/IJobs';

declare namespace IJobsExpandableRow {
  export interface IProps {
    record: IJobs.DataJobsMapped;
  }
}

export { IJobsExpandableRow };
