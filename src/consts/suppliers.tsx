import locales from '@/locales/en/en.json';

const {
  suppliers: { stepOne, stepTwo, stepThree, stepFour },
  consts: { supplierStatus, workCategoriesCovered, nonResidentSupplier },
} = locales;

export const STEPS_CREATE_SUPPLIER = [
  {
    title: (
      <span style={{ lineHeight: '16px', width: '67px' }}>{stepOne.title}</span>
    ),
  },
  {
    title: (
      <span style={{ lineHeight: '16px', width: '58px' }}>{stepTwo.title}</span>
    ),
  },
  {
    title: (
      <span style={{ lineHeight: '16px', width: '67px' }}>
        {stepThree.title}
      </span>
    ),
  },
  {
    title: stepFour.title,
  },
];

export const GEOGRAPHIC_COVERAGE = [
  { label: 'Ontario', value: 'Ontario' },
  { label: 'Quebec', value: 'Quebec' },
  { label: 'Maritimes', value: 'Maritimes' },
  { label: 'Manitoba', value: 'Manitoba' },
  { label: 'Saskatchewan', value: 'Saskatchewan' },
  { label: 'Alberta', value: 'Alberta' },
  { label: 'BC', value: 'BC' },
  { label: 'Yukon', value: 'Yukon' },
  { label: 'NWT', value: 'NWT' },
  { label: 'Nunuvat', value: 'Nunuvat' },
  { label: 'Canada', value: 'Canada' },
  { label: 'US North East', value: 'US North East' },
  { label: 'US South East', value: 'US South East' },
  { label: 'US Midwest', value: 'US Midwest' },
  { label: 'US South West', value: 'US South West' },
];

export const WORK_CATEGORIES_COVERED = [
  {
    label: workCategoriesCovered.itGeneralist,
    value: 'Information Technology - Generalist',
  },
  { label: workCategoriesCovered.itDigital, value: 'IT - Digital' },
  {
    label: workCategoriesCovered.itDataScience,
    value: 'IT - Data Science (AI/Machine Learning)',
  },
  { label: workCategoriesCovered.administrative, value: 'Administrative' },
  { label: workCategoriesCovered.lightIndustrial, value: 'Light Industrial' },
  { label: workCategoriesCovered.engineering, value: 'Engineering' },
  { label: workCategoriesCovered.financial, value: 'Financial' },
  { label: workCategoriesCovered.salesMarketing, value: 'Sales/Marketing' },
  { label: workCategoriesCovered.scientific, value: 'Scientific' },
  { label: workCategoriesCovered.other, value: 'Other' },
];

export const SUPPLIER_STATUS = [
  {
    label: supplierStatus.supplierAdvised,
    value: '1. Supplier Advised & Reviewing Documents',
  },
  {
    label: supplierStatus.negotiation,
    value: '2.Negotiation - Redlines Received from Supplier',
  },
  {
    label: supplierStatus.contracting,
    value: '3. Contracting - Awaiting signed contract back',
  },
  {
    label: supplierStatus.contractSigned,
    value: '4. Contract Signed - Awaiting Compliance Docs',
  },
  { label: supplierStatus.signedActive, value: '5. Signed - Active' },
  { label: supplierStatus.signedInactive, value: '6. Signed - Inactive' },
  { label: supplierStatus.cancelled, value: '7. Cancelled' },
  { label: supplierStatus.onHold, value: '8. On Hold' },
];

export const NON_RESIDENT_SUPPLIER = [
  { label: nonResidentSupplier.yes, value: true },
  { label: nonResidentSupplier.no, value: false },
];

export const DIVERSITY_CERTIFICATIONS = [
  { label: 'WBE Canada', value: 'WBE Canada' },
  {
    label: '(CAB) Canadian Aboriginal Business',
    value: '(CAB) Canadian Aboriginal Business',
  },
  { label: 'CAMSC', value: 'CAMSC' },
  { label: 'Supplier Diversity Canada', value: 'Supplier Diversity Canada' },
  { label: 'WeConnect', value: 'WeConnect' },
  { label: 'WBENC', value: 'WBENC' },
  { label: 'SBA', value: 'SBA' },
  { label: 'DBE', value: 'DBE' },
  {
    label: 'Veteran Owned Certified Business',
    value: 'Veteran Owned Certified Business',
  },
  { label: 'NMSDC', value: 'NMSDC' },
];

export const TYPE = [
  {
    label: 'Supplier Agreements',
    value: 'Supplier Agreements',
  },
  {
    label: 'COI',
    value: 'COI',
  },
  {
    label: 'Proof of Inc.',
    value: 'Proof of Inc.',
  },
  {
    label: 'Banking Info',
    value: 'Banking Info',
  },
  {
    label: 'Amendments',
    value: 'Amendments',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];

export const FORM_FIELDS = {
  stepOne: {
    mandatories: {
      supplier_company_name: 'supplier_company_name',
      legal_name_for_invoicing: 'legal_name_for_invoicing',
      work_categories_covered: 'work_categories_covered',
    },
    optionals: {
      primary_contact_name: 'primary_contact_name',
      supplier_code: 'supplier_code',
      primary_contact_email: 'primary_contact_email',
      street_address_line1: 'street_address_line1',
      primary_contact_phone: 'primary_contact_phone',
      agreement_expiry_date: 'agreement_expiry_date',
      country: 'country',
      province_region: 'province_region',
      city: 'city',
      postal_code: 'postal_code',
      tax_id: 'tax_id',
      geographic_coverage: 'geographic_coverage',
      dunn_and_bradstreet_number: 'dunn_and_bradstreet_number',
      supplier_status: 'supplier_status',
      is_non_resident_supplier: 'is_non_resident_supplier',
      diversity_certifications: 'diversity_certifications',
      comments: 'comments',
    },
  },
  stepTwo: {
    optionals: {
      secondary_contact_name: 'secondary_contact_name',
      secondary_contact_email: 'secondary_contact_email',
      tertiary_contact_name: 'tertiary_contact_name',
      tertiary_contact_email: 'tertiary_contact_email',
      accounts_receivable_contact_name: 'accounts_receivable_contact_name',
      accounts_receivable_contact_email: 'accounts_receivable_contact_email',
    },
  },
  stepThree: {
    mandatories: {
      associated_buyers: 'associated_buyers',
    },
  },
  stepFourth: {
    mandatories: {
      type: 'type',
      buyer_id: 'buyer_id',
      name: 'name',
    },
    optionals: {
      expiry_date: 'expiry_date',
    },
  },
} as const;

export const DASHBOARD_STEPS = {
  stepOne: 0,
  stepTwo: 1,
  stepThree: 2,
  stepFour: 3,
  success: 4,
} as const;
