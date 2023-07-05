export type Roles =
  | 'Buyer Administrator'
  | 'Recruiter'
  | 'Hiring Manager'
  | 'Approver'
  | 'Buyer Finance'
  | 'Delegate'
  | 'MSP Administrator'
  | 'Program Manager'
  | 'Program Representative'
  | 'MSP Finance'
  | 'Supplier Administrator'
  | 'Account Manager'
  | 'Supplier Finance'
  | 'Super Administrator'
  | 'Product Support'
  | 'Worker';
export type Actions = 'view' | 'create' | 'edit';
export type CreateEditActions = 'create' | 'edit';
export type Dashboards = 'suppliers' | 'buyers';

type TPermissions = {
  [key in Dashboards]: PermissionOptions;
};
type PermissionOptions = {
  [key in Actions]: Roles[];
};
type TDashboardTypes = {
  buyer: 'buyers';
  supplier: 'suppliers';
};
type TActions = {
  create: 'create';
  edit: 'edit';
  view: 'view';
};
type TRoles = {
  BuyerAdministrator: 'Buyer Administrator';
  Recruiter: 'Recruiter';
  HiringManager: 'Hiring Manager';
  Approver: 'Approver';
  BuyerFinance: 'Buyer Finance';
  Delegate: 'Delegate';
  MSPAdministrator: 'MSP Administrator';
  ProgramManager: 'Program Manager';
  ProgramRepresentative: 'Program Representative';
  MSPFinance: 'MSP Finance';
  SupplierAdministrator: '  Supplier Administrator';
  AccountManager: 'Account Manager';
  SupplierFinance: 'Supplier Finance';
  SuperAdministrator: 'Super Administrator';
  ProductSupport: 'Product Support';
  Worker: 'Worker';
};

export const ACTIONS: TActions = {
  create: 'create',
  edit: 'edit',
  view: 'view',
};
export const DASHBOARDTYPES: TDashboardTypes = {
  buyer: 'buyers',
  supplier: 'suppliers',
};
export const ROLES: TRoles = {
  BuyerAdministrator: 'Buyer Administrator',
  Recruiter: 'Recruiter',
  HiringManager: 'Hiring Manager',
  Approver: 'Approver',
  BuyerFinance: 'Buyer Finance',
  MSPAdministrator: 'MSP Administrator',
  Delegate: 'Delegate',
  ProgramManager: 'Program Manager',
  ProgramRepresentative: 'Program Representative',
  MSPFinance: 'MSP Finance',
  SupplierAdministrator: '  Supplier Administrator',
  AccountManager: 'Account Manager',
  SupplierFinance: 'Supplier Finance',
  SuperAdministrator: 'Super Administrator',
  ProductSupport: 'Product Support',
  Worker: 'Worker',
};

export const PERMISSIONS: TPermissions = {
  [DASHBOARDTYPES.buyer]: {
    [ACTIONS.view]: [ROLES.MSPAdministrator, ROLES.ProgramManager],
    [ACTIONS.create]: [ROLES.MSPAdministrator],
    [ACTIONS.edit]: [ROLES.MSPAdministrator],
  },
  [DASHBOARDTYPES.supplier]: {
    [ACTIONS.view]: [ROLES.MSPAdministrator, ROLES.ProgramManager],
    [ACTIONS.create]: [ROLES.MSPAdministrator],
    [ACTIONS.edit]: [ROLES.MSPAdministrator],
  },
};
