import { workShiftsUI } from '@/consts';

const { SORTER_MAP_DAYS } = workShiftsUI;

const sorterWeekDays = (days: string[]) =>
  days.sort((a, b) => SORTER_MAP_DAYS[a] - SORTER_MAP_DAYS[b]);

export default sorterWeekDays;
