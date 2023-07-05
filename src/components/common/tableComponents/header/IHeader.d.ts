import type { Dashboards } from '@/consts/permissions';

export type THeader =
  | {
      type: Dashboards;
      titleForm: string;
      subTitleForm: string;
      hasSearchInput: true;
      handleSearchChange: (value: string) => void;
    }
  | {
      type: Dashboards;
      titleForm: string;
      subTitleForm: string;
      hasSearchInput: false;
      handleSearchChange?: (value: string) => void;
    };
