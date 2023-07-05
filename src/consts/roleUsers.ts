export const KEY_ROLE_LOCALSTORAGE = 'current_user_role';

export const LOGGED_AS = {
  buyer: 'buyer',
  supplier: 'supplier',
};

/**
  @readonly

  @enum {string}
  @property {string} AccountManager - Account Manager role.
  @property {string} Approver - Approver role.
  @property {string} BuyerAdministrator - Buyer Administrator role.
  @property {string} BuyerFinance - Buyer Finance role.
  @property {string} Delegate - Delegate role.
  @property {string} HiringManager - Hiring Manager role.
  @property {string} MspAdministrator - MSP Administrator role.
  @property {string} MspFinance - MSP Finance role.
  @property {string} ProgramManager - Program Manager role.
  @property {string} ProgramRepresentative - Program Representative role.
  @property {string} Recruiter - Recruiter role.
  @property {string} SupplierAdministrator - Supplier Administrator role.
  @property {string} SupplierFinance - Supplier Finance role.
  @property {string} Worker - Worker role.
*/
export const USER_ROLES = Object.freeze({
  AccountManager: 'Account Manager',
  Approver: 'Approver',
  BuyerAdministrator: 'Buyer Administrator',
  BuyerFinance: 'Buyer Finance',
  Delegate: 'Delegate',
  HiringManager: 'Hiring Manager',
  MspAdministrator: 'MSP Administrator',
  MspFinance: 'MSP Finance',
  ProgramManager: 'Program Manager',
  ProgramRepresentative: 'Program Representative',
  Recruiter: 'Recruiter',
  SupplierAdministrator: 'Supplier Administrator',
  SupplierFinance: 'Supplier Finance',
  Worker: 'Worker',
});
