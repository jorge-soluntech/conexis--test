import locales from '@/locales/en/en.json';

const {
  consts,
  myJobs: { fillJob },
} = locales;

export const POSITION_TYPE = [
  {
    text: consts.positionType.temporary,
    value: consts.positionType.temporary,
  },
  {
    text: consts.positionType.permanent,
    value: consts.positionType.permanent,
  },
];

export const OPTIONS_REJECT_FAILED_SUBMISSIONS = [
  {
    label: fillJob.optionsRejectFailedSubmisions.yes,
    value: true,
  },
  {
    label: fillJob.optionsRejectFailedSubmisions.no,
    value: false,
  },
];

export const STATUS = {
  unposted: 'Unposted',
  awaitingApproval: 'Awaiting Approval',
  open: 'Open',
  onHold: 'On Hold',
  template: 'Template',
  canceled: 'Canceled',
  filled: 'Filled',
};

export const ACTIONS = {
  edit: 'edit',
  delete: 'delete',
  cancel: 'cancel',
  duplicateAsTemplate: 'duplicateAsTemplate',
  setToFilled: 'setToFilled',
  putOnHold: 'putOnHold',
  addSubmission: 'addSubmission',
  repost: 'repost',
};

export const AVAILABLE_ACTIONS = {
  [STATUS.unposted]: [
    ACTIONS.edit,
    ACTIONS.delete,
    ACTIONS.cancel,
    ACTIONS.duplicateAsTemplate,
  ],
  [STATUS.awaitingApproval]: [
    ACTIONS.edit,
    ACTIONS.cancel,
    ACTIONS.duplicateAsTemplate,
  ],
  [STATUS.open]: [
    ACTIONS.edit,
    ACTIONS.setToFilled,
    ACTIONS.cancel,
    ACTIONS.putOnHold,
    ACTIONS.addSubmission,
    ACTIONS.duplicateAsTemplate,
  ],
  [STATUS.onHold]: [
    ACTIONS.setToFilled,
    ACTIONS.cancel,
    ACTIONS.repost,
    ACTIONS.duplicateAsTemplate,
  ],
  [STATUS.template]: [
    ACTIONS.edit,
    ACTIONS.delete,
    ACTIONS.duplicateAsTemplate,
  ],
  [STATUS.canceled]: [],
  [STATUS.filled]: [],
};

export const JOB_STATUS_FILTER = [
  {
    text: consts.jobStatus.template,
    value: STATUS.template,
  },
  {
    text: consts.jobStatus.unposted,
    value: STATUS.unposted,
  },
  {
    text: consts.jobStatus.open,
    value: STATUS.open,
  },
  {
    text: consts.jobStatus.awaitingForApproval,
    value: STATUS.awaitingApproval,
  },
  {
    text: consts.jobStatus.filled,
    value: STATUS.filled,
  },
  {
    text: consts.jobStatus.canceled,
    value: STATUS.canceled,
  },
  {
    text: consts.jobStatus.onHold,
    value: STATUS.onHold,
  },
];
