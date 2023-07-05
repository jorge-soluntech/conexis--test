import locales from '@/locales/en/en.json';

import type {
  AdditionalRowInformation,
  RecordKnownTypes,
  RowInformation,
} from './types';

const {
  myJobs: { additionalInformation },
} = locales;

export const getMyJobsAdditionalRowInformation = <T extends RecordKnownTypes>(
  record: T
): AdditionalRowInformation => {
  const formatAdditionalInformation = (record: T): AdditionalRowInformation => {
    const { postedOn, numberOfPositions, filledPositions, submissionsCount } =
      record;

    const additionalInfoMap = {
      [additionalInformation.postedOn]: postedOn,
      [additionalInformation.numberOfPositions]: numberOfPositions,
      [additionalInformation.filledPositions]: filledPositions,
      [additionalInformation.submissionsCount]: submissionsCount,
      [additionalInformation.fulfillmentRate]: `${
        numberOfPositions > 0 ? (filledPositions / numberOfPositions) * 100 : 0
      }%`,
    };

    const detailsContent = Object.entries(additionalInfoMap).map(
      ([label, value]) => ({
        label,
        value,
      })
    ) as unknown as RowInformation[];

    return { detailsContent };
  };

  const detailsContent = formatAdditionalInformation(record);

  return detailsContent;
};
