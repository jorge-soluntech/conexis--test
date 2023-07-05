import type { Dayjs } from 'dayjs';

export interface RecordKnownTypes {
  postedOn: Dayjs;
  numberOfPositions: number;
  filledPositions: number;
  submissionsCount: number;
}

export type RowInformation = {
  label: string;
  value: string | number;
};

export type AdditionalRowInformation = {
  detailsContent: Array<RowInformation>;
};
