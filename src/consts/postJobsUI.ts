import type { MenuProps } from 'antd';

import locales from '@/locales/en/en.json';

const {
  postNewJob: { optionsSkillCategory, optionsPositionType, optionsMenuSave },
} = locales;

export const FORM_FIELDS = {
  mandatory: [
    'approvers_ids',
    'job_title',
    'number_of_positions',
    'type_of_position',
    'primary_hiring_manager',
    'planned_start_date',
    'planned_end_date',
    'target_rate',
    'salary_low',
    'salary_high',
  ],
  optionals: [
    'skill_category',
    'work_shifts_ids',
    'job_description_attachment',
    'job_description',
    'job_comments',
    'street_address_line1',
    'street_address_line2',
    'country_id',
    'province_region_id',
    'city',
    'postal_code',
    'business_unit_id',
    'gl_code_id',
    'cost_centers_ids',
    'supplier_distribution_list_ids',
  ],
};

export const SKILL_CATEGORY_OPTIONS = [
  { label: optionsSkillCategory.it, value: optionsSkillCategory.it },
  {
    label: optionsSkillCategory.lightIndustrial,
    value: optionsSkillCategory.lightIndustrial,
  },
  {
    label: optionsSkillCategory.administrative,
    value: optionsSkillCategory.administrative,
  },
  {
    label: optionsSkillCategory.professional,
    value: optionsSkillCategory.professional,
  },
  {
    label: optionsSkillCategory.engineering,
    value: optionsSkillCategory.engineering,
  },
  {
    label: optionsSkillCategory.healthcare,
    value: optionsSkillCategory.healthcare,
  },
];

export const POSITION_TYPE_OPTIONS = [
  {
    label: optionsPositionType.temporary,
    value: optionsPositionType.temporary,
  },
  {
    label: optionsPositionType.permanent,
    value: optionsPositionType.permanent,
  },
];

export const OPTIONS_SAVE_STATUS = {
  isSaveLater: 'Save For Later',
  isSaveTemplate: 'Save as Template',
  isSentNow: 'Send Now',
};

export const SAVE_OPTIONS: MenuProps['items'] = [
  {
    label: optionsMenuSave.saveForLater,
    key: OPTIONS_SAVE_STATUS.isSaveLater,
  },
  {
    label: optionsMenuSave.saveAsTemplate,
    key: OPTIONS_SAVE_STATUS.isSaveTemplate,
  },
];
