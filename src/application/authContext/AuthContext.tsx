import { createContext } from 'react';

import type { IUser } from './IUser';

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  emailSent: string | undefined;
  failedAttempts: number;
  dataUser: any;
  idTenant: number;

  fechtDataUser: () => Promise<void>;
  loginUser: (
    username: string,
    password: string,
    tenant: number
  ) => Promise<boolean>;
  logout: () => void;
  emailCheckToSend: (
    email: string | undefined,
    tenant: number
  ) => Promise<{ status: boolean; message: string }>;
  updateForgotPassword: (dataForm: {
    email: string | undefined;
    tenant: number;
    token: string;
    newPassword: string;
    confirmationPassword: string;
  }) => Promise<{ status: boolean; message: string }>;
  setNewPassword: (dataForm: {
    email: string | undefined;
    tenant: number;
    token: string;
    newPassword: string;
    confirmationPassword: string;
  }) => Promise<boolean>;
  currentAttempts: (value: number) => void;
  userCreate: (dataForm: {
    first_name: string;
    last_name: string;
    user_roles: string | string[];
    email: string;
    permissioned_buyers?: string | string[];
    permissioned_suppliers?: string | string[];
  }) => Promise<any>;
  getPosibleSelectionsCreateUsers: (
    user_role: string,
    id_tenant: string | undefined,
    supplier: string | undefined
  ) => Promise<any>;
  resendEmail: (
    email: string | undefined,
    tenant: number,
    messageType: string
  ) => Promise<boolean>;
  getUsers: (
    user_status?: string | undefined,
    user_role?: string | undefined,
    openSearch?: string | undefined
  ) => Promise<any>;
}

export const AuthContext = createContext({} as ContextProps);
