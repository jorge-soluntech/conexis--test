import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import { useEffect, useReducer } from 'react';

import RequestService from '@/infrastructure/services/index';
import { UtilServices } from '@/infrastructure/services/utilsServices';

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import type { IUser } from './IUser';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
  emailSent: string | undefined;
  failedAttempts: number;
  dataUser: any;
  idTenant: number;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
  emailSent: undefined,
  failedAttempts: 0,
  dataUser: undefined,
  idTenant: 9,
};

type AuthProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('user')) {
      const infoUser: any = Cookies.get('user');
      dispatch({
        type: '[Auth] - Login',
        payload: JSON.parse(infoUser),
      });
    }
  }, []);

  const fechtDataUser = async (): Promise<void> => {
    try {
      const response = await RequestService.getUserData();

      dispatch({
        type: '[Auth] - Get Data User',
        payload: response.data.data,
      });
    } catch (error: any) {
      dispatch({
        type: '[Auth] - Get Data User',
        payload: undefined,
      });
    }
  };

  useEffect(() => {
    if (state.user) {
      fechtDataUser();
    }
  }, [state.user]);

  const currentAttempts = (value: number) => {
    dispatch({ type: '[Auth] - Failed Attempt', payload: value });
  };

  const checkSeverDown = (err: any) => {
    if (err.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      if (
        err.response.status !== 500 &&
        err.response.status !== 0 &&
        err.response.status !== 423
      ) {
        return false;
      }
    }

    UtilServices.serverIsDown(router);

    return false;
  };

  const loginUser = async (
    username: string,
    password: string,
    tenant: number
  ): Promise<boolean> => {
    if (Cookies.get('locked')) {
      return false;
    }

    try {
      const { data } = await RequestService.loginUser({
        username,
        password,
        tenant,
      });

      const { token } = data;
      currentAttempts(0);

      const user = {
        email: data.email,
        username: data.name,
        tenant: data.tenant,
        role: data.roles[0],
      };
      Cookies.set('token', token);
      Cookies.set('user', JSON.stringify(user));
      dispatch({ type: '[Auth] - Login', payload: user });
      return true;
    } catch (error: any) {
      return checkSeverDown(error);
    }
  };

  const logout = () => {
    dispatch({ type: '[Auth] - Logout' });
    Cookies.remove('token');
    Cookies.remove('user');
    router.push('/auth');
  };

  const emailCheckToSend = async (
    email: string | undefined,
    tenant: number
  ): Promise<{ status: boolean; message: string }> => {
    try {
      await RequestService.emailForgotPassword({
        dataBody: {
          email,
          tenant,
        },
      });

      dispatch({ type: '[Auth] - Email Sent', payload: email });
      return {
        status: true,
        message: '',
      };
    } catch (error: any) {
      if (error.response?.status === 404) {
        return {
          status: false,
          message: error.response.data?.message,
        };
      }
      return {
        status: checkSeverDown(error),
        message: 'Something went wrong, try again later',
      };
    }
  };

  const updateForgotPassword = async (dataForm: {
    email: string | undefined;
    tenant: number;
    token: string;
    newPassword: string;
    confirmationPassword: string;
  }): Promise<{ status: boolean; message: string }> => {
    try {
      await RequestService.updateForgotPassword({
        dataBody: { ...dataForm },
      });
      dispatch({ type: '[Auth] - Reset Password' });
      return {
        status: true,
        message: '',
      };
    } catch (error: any) {
      if (error.response.data?.message === 'Invalid token') {
        router.push('/auth/expired-link', undefined, {
          shallow: true,
        });
        return { status: false, message: 'Expired link' };
      }

      if (
        error.response.data?.message ===
        'no previous password has been assigned for this user'
      ) {
        return {
          status: false,
          message: 'No previous password has been assigned for this user',
        };
      }
      return {
        status: checkSeverDown(error),
        message: 'Something went wrong, try again later',
      };
    }
  };

  const setNewPassword = async (dataForm: {
    email: string | undefined;
    tenant: number;
    token: string;
    newPassword: string;
    confirmationPassword: string;
  }): Promise<boolean> => {
    try {
      await RequestService.setNewPassword({
        dataBody: { ...dataForm },
      });
      dispatch({ type: '[Auth] - Set Password' });
      return true;
    } catch (error) {
      return checkSeverDown(error);
    }
  };

  const userCreate = async (dataForm: {
    first_name: string;
    last_name: string;
    user_roles: string | string[];
    email: string;
    permissioned_buyers?: string | string[];
    permissioned_suppliers?: string | string[];
  }): Promise<any> => {
    try {
      const response = await RequestService.userCreate({
        dataBody: { ...dataForm },
      });
      dispatch({ type: '[Auth] - User create' });
      return response;
    } catch (error) {
      return checkSeverDown(error) ? true : error;
    }
  };

  const getPosibleSelectionsCreateUsers = async (
    user_role: string,
    id_tenant: string | undefined,
    supplier: string | undefined
  ): Promise<any> => {
    try {
      const response = await RequestService.getPosibleSelectionsCreateUsers(
        user_role,
        id_tenant,
        supplier
      );
      dispatch({ type: '[Auth] - Get Posible Selections Create Users' });
      return response;
    } catch (error) {
      return checkSeverDown(error);
    }
  };

  const resendEmail = async (
    email: string | undefined,
    tenant: number,
    messageType: string
  ): Promise<boolean> => {
    try {
      await RequestService.resendEmail({
        dataBody: {
          email,
          tenant,
          messageType,
        },
      });

      dispatch({ type: '[Auth] - Email Sent', payload: email });
      return true;
    } catch (error: any) {
      return checkSeverDown(error);
    }
  };

  const getUsers = async (
    user_status: string | undefined,
    user_role: string | undefined,
    openSearch: string | undefined
  ): Promise<any> => {
    try {
      const response = await RequestService.getUsers(
        user_status,
        user_role,
        openSearch
      );
      dispatch({ type: '[Users] - Get all users' });
      return response;
    } catch (error) {
      return checkSeverDown(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        fechtDataUser,
        loginUser,
        logout,
        emailCheckToSend,
        updateForgotPassword,
        setNewPassword,
        currentAttempts,
        userCreate,
        getPosibleSelectionsCreateUsers,
        resendEmail,
        getUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
