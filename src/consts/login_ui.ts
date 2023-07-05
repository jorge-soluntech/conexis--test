import * as urls from '@/consts/routes';
import locales from '@/locales/en/en.json';

import {
  iconContracts,
  iconDashboard,
  iconInvoices,
  iconJobs,
  iconReports,
  iconSubmissions,
  iconTYE,
} from './iconsSider';

const {
  sidebar: { labelItems },
} = locales;

export const LOGIN_TEXT = {
  title_intro: "The World's Easiest VMS",
  title_intro_tablet: "The World's\nEasiest VMS",
  subtitle_intro: `Built on the latest technology and\ndesigned with the user in mind.`,
  title_form_login: 'Conexis VMS Login',
  title_form_forgot: 'Forgot your password?',
  subtitle_form_forgot: `Enter your email address below and we will send\nyou a link to reset your password.`,
  title_email_sent: 'Email sent',
  subtitle_email_sent: 'We sent an email to your account',
  title_form_expired: 'Expired link',
  subtitle_form_expired:
    'The link you’re trying to access has already been\nused. Please enter your email below to request a\nnew link.',
  title_form_reset: 'Reset your password',
  title_form_set: 'Set your password',
  title_server_down: 'Our server is down',
  subtitle_server_down:
    'Our server is down, please try again in a\nfew minutes. If you still need help, contact\nus at ',
};

export const USER_CREATION_TEXT = {
  title_form_user_creation: 'Create new user',
};

export const TITLE_LOGO = 'Conexis';

export const MOBILE_BREAKPOINT = 576;

export const TABLET_BREAKPOINT = 992;

export const SMALL_TABLET_BREAKPOINT = 768;

export const ITEMS_SIDER: Array<{
  key: string;
  label: string;
  icon: JSX.Element;
}> = [
  {
    key: urls.URL_DASHBOARD,
    label: labelItems.dashboard,
    icon: iconDashboard,
  },
  {
    key: urls.URL_MY_JOBS,
    label: labelItems.myJobs,
    icon: iconJobs,
  },
  {
    key: urls.URL_SUBMISSIONS,
    label: labelItems.submissions,
    icon: iconSubmissions,
  },
  {
    key: urls.URL_CONTRACTS,
    label: labelItems.contracts,
    icon: iconContracts,
  },
  {
    key: urls.URL_TYE,
    label: labelItems['t&e'],
    icon: iconTYE,
  },
  {
    key: urls.URL_INVOICES,
    label: labelItems.invoices,
    icon: iconInvoices,
  },
  {
    key: urls.URL_REPORTS,
    label: labelItems.reports,
    icon: iconReports,
  },
];

export const ITEMS_SIDER_OTHERS = [
  {
    key: urls.URL_SUPPLIERS,
    label: labelItems.suppliers,
  },
  {
    key: urls.URL_BUYERS,
    label: labelItems.buyers,
  },
  {
    key: urls.URL_CANDIDATES,
    label: labelItems.candidates,
  },
  {
    key: urls.URL_APPROVALS,
    label: labelItems.approvals,
  },
  {
    key: urls.URL_USERS,
    label: labelItems.users,
  },
  {
    key: urls.URL_ONBOARDING_ITEMS,
    label: labelItems.onboardingActivities,
  },
  {
    key: urls.URL_WORK_SHIFTS,
    label: labelItems.workShifts,
  },
  {
    key: urls.URL_BUSINESS_UNITS,
    label: labelItems.businessUnits,
  },
  {
    key: urls.URL_GL_CODES,
    label: labelItems.glCodes,
  },
  {
    key: urls.URL_COST_CENTER,
    label: labelItems.costCenters,
  },
  {
    key: urls.URL_IMPORTS,
    label: labelItems.imports,
  },
];

export const ITEMS_SIDER_ACCOUNT = [
  {
    key: urls.URL_TUTORIALS,
    label: labelItems.tutorials,
  },
  {
    key: urls.URL_SETTINGS,
    label: labelItems.settings,
  },
  {
    key: urls.URL_LOG_OUT,
    label: labelItems.logOut,
  },
];

export const ITEMS_LINKS_NAVBAR = [
  ...ITEMS_SIDER_ACCOUNT,
  {
    key: urls.URL_POST_JOB,
    label: labelItems.postJob,
  },
];

export const LINKS_ERRORS = [
  {
    key: urls.URL_ERROR_404,
    label: urls.URL_ERROR_404,
  },
  {
    key: urls.URL_ERROR_500,
    label: urls.URL_ERROR_500,
  },
];
