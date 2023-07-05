import * as urls from '@/consts/routes';
import locale from '@/locales/en/en.json';

const { dashboard } = locale;

export const ACTION_ITEMS_KEYS = {
  jobsToApprove: 'jobsToApprove',
};

export const ITEMS_DETAILS: Array<{
  key: string;
  url: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    url: '',
    label: 'Time & expense cards to approve',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    url: '',
    label: 'Submissions to review',
    color: '#96BC33',
    active: false,
  },
  {
    key: '2',
    url: '',
    label: 'Contracts to activate',
    color: '#26A69A',
    active: false,
  },
  {
    key: ACTION_ITEMS_KEYS.jobsToApprove,
    url: urls.URL_JOBS_TO_APPROVE,
    label: dashboard.jobsToApprove,
    color: '#FFC107',
    active: false,
  },
  {
    key: '4',
    url: '',
    label: 'Contracts ending soon',
    color: '#A68BB6',
    active: false,
  },
];

export const ITEMS_DETAILS_PROGRAM_REPRESENTATIVE: Array<{
  key: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    label: 'Time & expense cards to approve',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    label: 'Submissions to review',
    color: '#96BC33',
    active: false,
  },
  {
    key: '4',
    label: 'Contracts ending soon',
    color: '#A68BB6',
    active: false,
  },
];

export const ITEMS_DETAILS_ADMIN: Array<{
  key: string;
  url: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    url: '',
    label: 'Time & expense cards to approve',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    url: '',
    label: 'Submissions to review',
    color: '#96BC33',
    active: false,
  },
  {
    key: ACTION_ITEMS_KEYS.jobsToApprove,
    url: urls.URL_JOBS_TO_APPROVE,
    label: dashboard.jobsToApprove,
    color: '#FFC107',
    active: false,
  },
  {
    key: '4',
    url: '',
    label: 'Contracts ending soon',
    color: '#A68BB6',
    active: false,
  },
];

export const ITEMS_TOP_SUPPLIER: Array<{
  label: string;
  value: string;
}> = [
  {
    label: 'Je Travail',
    value: '443,082.57',
  },
  {
    label: 'Equation Staffing',
    value: '161,095.53',
  },
  {
    label: 'Matrix Employment',
    value: '116,147.87',
  },
  {
    label: 'Career Connections',
    value: '443,082.57',
  },
  {
    label: 'Vertical Staffing',
    value: '443,082.57',
  },
  {
    label: 'Arrow Workforce Solutions',
    value: '443,082.57',
  },
  {
    label: 'MaxSys (Western Canada)',
    value: '443,082.57',
  },
  {
    label: 'KEE Human Resources',
    value: '443,082.57',
  },
  {
    label: 'AppleOne',
    value: '443,082.57',
  },
  {
    label: 'SLB Staffing Bureau',
    value: '443,082.57',
  },
];

export const ITEMS_DETAILS_FINANCE: Array<{
  key: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    label: 'Time & expense cards awaiting approval',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    label: 'Uninvoiced time cards',
    color: '#96BC33',
    active: false,
  },
  {
    key: '2',
    label: 'Invoices in draft status',
    color: '#26A69A',
    active: false,
  },
];

export const ITEMS_DETAILS_BUYER_FINANCE: Array<{
  key: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    label: 'Time & expense cards not approved',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    label: 'Unvoiced time cards',
    color: '#96BC33',
    active: false,
  },
  {
    key: '2',
    label: 'Invoices in draft status',
    color: '#26A69A',
    active: false,
  },
];

export const ITEMS_DETAILS_DELEGATE: Array<{
  key: string;
  url: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    url: '',
    label: 'Time & expense cards to approve',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    url: '',
    label: 'Submissions to review',
    color: '#96BC33',
    active: false,
  },
  {
    key: ACTION_ITEMS_KEYS.jobsToApprove,
    url: urls.URL_JOBS_TO_APPROVE,
    label: dashboard.jobsToApprove,
    color: '#26A69A',
    active: false,
  },
  {
    key: '3',
    url: '',
    label: 'Contracts ending soon',
    color: '#FFC107',
    active: false,
  },
];

export const ITEMS_DETAILS_APPROVER: Array<{
  key: string;
  url: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    url: '',
    label: 'Time & expense cards to approve',
    color: '#DD7812',
    active: true,
  },
  {
    key: ACTION_ITEMS_KEYS.jobsToApprove,
    url: urls.URL_JOBS_TO_APPROVE,
    label: dashboard.jobsToApprove,
    color: '#96BC33',
    active: false,
  },
  {
    key: '2',
    url: '',
    label: 'Contracts to approve',
    color: '#26A69A',
    active: false,
  },
];

export const ITEMS_DETAILS_SUPPLIER_ADMIN: Array<{
  key: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    label: 'Open jobs',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    label: 'Active contracts',
    color: '#96BC33',
    active: false,
  },
  {
    key: '2',
    label: 'Unapproved T&E',
    color: '#26A69A',
    active: false,
  },
  {
    key: '3',
    label: 'Open submissions',
    color: '#FFC107',
    active: false,
  },
];

export const ITEMS_DETAILS_SUPPLIER_FINANCE: Array<{
  key: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    label: 'Active contracts',
    color: '#DD7812',
    active: true,
  },
  {
    key: '1',
    label: 'Unapproved time & expense cards',
    color: '#96BC33',
    active: false,
  },
  {
    key: '2',
    label: 'Supplier invoices past due',
    color: '#26A69A',
    active: false,
  },
];

export const STATE_SIDER = {
  siderActivated: 'sider_activated',
  siderFixedHovered: 'sider_fixed_hovered',
};

export const ITEMS_DETAILS_RECRUITER: Array<{
  key: string;
  label: string;
  color: string;
  active: boolean;
}> = [
  {
    key: '0',
    label: 'Submissions to review',
    color: '#DD7812',
    active: false,
  },
  {
    key: '1',
    label: 'Contracts ending soon',
    color: '#96BC33',
    active: false,
  },
];
