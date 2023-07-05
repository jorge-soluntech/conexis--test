export const FORM_FIELDS = {
  mandatories: ['first_name', 'last_name', 'worker_status'],
  optionals: ['email'],
};

export const ROUTES_SUCCESS = {
  emailSent: 'created',
  emailNotSent: 'created-no-sent-email',
};

export const EXCLUDE_COLUMNS = {
  workerStatus: 'workerStatus',
};

export const FILTERS_WORKER_STATUS = [
  {
    text: 'T4',
    value: 'T4',
  },
  {
    text: 'W2/With Ben',
    value: 'W2/With Ben',
  },
  {
    text: '1099',
    value: '1099',
  },
  {
    text: 'Incorporated',
    value: 'Incorporated',
  },
  {
    text: 'C2C',
    value: 'C2C',
  },
  {
    text: 'W2/Without Ben',
    value: 'W2/Without Ben',
  },
  {
    text: 'H1B Visa Enabled',
    value: 'H1B Visa Enabled',
  },
];
