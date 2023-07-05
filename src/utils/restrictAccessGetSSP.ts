import type { IncomingMessage } from 'http';

import type { Actions, Dashboards } from '@/consts/permissions';
import { PERMISSIONS } from '@/consts/permissions';

/**
 * A Functions that recieve the reques of the backend and tell me what redirection should i have
 * @param req - The request to the server
 * @param Dashboard - The Dashboard Ex: buyers, suppliers
 * @param action - The permission action Ex: create , view or edit
 * @returns The title of the example component
 */
export const retrictAccesgetSSP = (
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  },
  Dashboard: Dashboards,
  action: Actions
) => {
  const { token, user } = req.cookies;

  if (!token || !user) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const parsedUser = JSON.parse(user);
  const { role } = parsedUser;
  const allowedRoles = PERMISSIONS[Dashboard][action];

  if (!allowedRoles.includes(role)) {
    return {
      redirect: {
        destination: `/home/${Dashboard}`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
