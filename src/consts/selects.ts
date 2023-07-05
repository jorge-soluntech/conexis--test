import locales from '@/locales/en/en.json';

const {
  consts: {
    selects: { booleanSelectOptions },
  },
} = locales;

export const BOOLEAN_SELECT_OPTIONS = [
  {
    label: booleanSelectOptions.no,
    value: false,
  },
  {
    label: booleanSelectOptions.yes,
    value: true,
  },
];
