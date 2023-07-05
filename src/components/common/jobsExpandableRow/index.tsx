import type { FC } from 'react';

import AdditionalInformation from './additionalInformation';
import type { IJobsExpandableRow } from './IJobsExpandableRow';
import JobSummary from './jobSummary';
import useJobData from './useJobData';
import WorkShifts from './workShifts';

const JobsExpandableRowDetails: FC<IJobsExpandableRow.IProps> = ({
  record,
}: IJobsExpandableRow.IProps) => {
  const { additionalInformation, commentsAndSuppliers } = useJobData(record);

  return (
    <>
      <AdditionalInformation
        additionalInformation={additionalInformation}
        commentsAndSuppliers={commentsAndSuppliers}
      />

      <JobSummary
        jobDescription={record.jobDescription}
        jobDescriptionAttachment={record.jobDescriptionAttachment}
      />

      {record.workShifts.length > 0 && (
        <WorkShifts workShifts={record.workShifts} />
      )}
    </>
  );
};

export default JobsExpandableRowDetails;
