import type { IJobs } from '@/components/common/jobApprovalsComponents/jobApprovals/IJobs';
import locales from '@/locales/en/en.json';

const {
  jobApprovals: { expandable },
} = locales;

const useJobData = (record: IJobs.DataJobsMapped) => {
  const additionalInformation = [
    {
      [expandable.numberOfPositions]: record.numberPositions,
      [expandable.skillCategory]: record.skillCategory,
      [expandable.hiringManager]: record.hiringManager.full_name,
      [expandable.hiringManagersEmail]: record.hiringManager.email,
      [expandable.workAddress]: record.workAddress,
      [expandable.province]: record.province,
      [expandable.country]: record.country,
      [expandable.postalCode]: record.postalCode,
    },
    {
      [expandable.salaryTargetLow]: record.salaryLow,
      [expandable.salaryTargetHigh]: record.salaryHigh,
      [expandable.createdOn]: '-',
    },
    {
      [expandable.glCode]: '-',
      [expandable.costCenters]: '-',
      [expandable.businessUnit]: record.businessUnit,
    },
  ];

  const commentsAndSuppliers = [
    {
      [expandable.comments]: record.jobComments,
    },
    {
      [expandable.supplierDistributionList]: record.supplierDistributionList,
    },
  ];

  return { additionalInformation, commentsAndSuppliers };
};

export default useJobData;
