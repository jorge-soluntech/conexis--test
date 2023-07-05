export const BUYERS_TABLE_TEXT = {
  title_buyers_table: 'Manage Buyers',
  sub_title_buyers_table:
    'Here you will find information for all buyers you have access to.',
};

export const STEPS_CREATE_BUYER = [
  {
    title: (
      <span style={{ lineHeight: '16px' }}>
        Buyer <br /> information
      </span>
    ),
  },
  {
    title: (
      <span style={{ lineHeight: '16px' }}>
        Tax <br /> information
      </span>
    ),
  },
  {
    title: (
      <span style={{ lineHeight: '16px' }}>
        Approval <br /> information
      </span>
    ),
  },
  {
    title: 'Attachments',
  },
];

export const TYPE = [
  {
    label: 'Client agreement',
    value: 'Client Agreement',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];
export const FORM_FIELDS = {
  stepOne: {
    mandatories: {
      clientCompanyName: 'clientCompanyName',
      legalNameForInvoicing: 'legalNameForInvoicing',
      workWeekDefinition: 'workWeekDefinition',
      currency: 'currency',
      contractExpiryDate: 'contractExpiryDate',
    },
  },
  stepFourth: {
    mandatories: {
      type: 'type',
      name: 'name',
    },
    optionals: {
      expiry_date: 'expiry_date',
    },
  },
} as const;
