import type { Roles } from '@/consts/permissions';

export interface IUser extends BaseUser {
  _id: string;
  password?: string;
}

export interface CookieUser extends BaseUser {
  email: string;
}
interface BaseUser {
  username: string;
  tenant: number;
  role: Roles;
}
