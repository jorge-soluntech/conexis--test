import type { AuthState } from './AuthProvider';
import type { IUser } from './IUser';

type AuthActionType =
  | { type: '[Auth] - Login'; payload: IUser | any }
  | { type: '[Auth] - Logout' }
  | { type: '[Auth] - Email Sent'; payload: string | undefined }
  | { type: '[Auth] - Reset Password' }
  | { type: '[Auth] - Set Password' }
  | { type: '[Auth] - Get Data User'; payload: any }
  | { type: '[Auth] - User create' }
  | { type: '[Auth] - Get Posible Selections Create Users' }
  | { type: '[Auth] - Failed Attempt'; payload: number }
  | { type: '[Users] - Get all users' };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        emailSent: undefined,
      };

    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
        emailSent: undefined,
      };

    case '[Auth] - Email Sent':
      return {
        ...state,
        emailSent: action.payload,
      };

    case '[Auth] - Reset Password':
      return {
        ...state,
      };

    case '[Auth] - Set Password':
      return {
        ...state,
      };

    case '[Auth] - User create':
      return {
        ...state,
      };

    case '[Auth] - Get Posible Selections Create Users':
      return {
        ...state,
      };

    case '[Auth] - Failed Attempt':
      return {
        ...state,
        failedAttempts: action.payload,
      };

    case '[Auth] - Get Data User':
      return {
        ...state,
        dataUser: action.payload,
      };
    case '[Users] - Get all users':
      return {
        ...state,
      };

    default:
      return state;
  }
};
