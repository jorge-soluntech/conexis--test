import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { CookieUser } from './application/authContext/IUser';
import type { Actions, Dashboards } from './consts/permissions';
import { PERMISSIONS } from './consts/permissions';
import {
  getCurrentAction,
  getCurrentDashboard,
} from './utils/middleware.utils';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const user = request.cookies.get('user');
  // Redirect to auth if the user doesn exist
  if (!token || !user) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  const { role }: CookieUser = JSON.parse(user);
  const pathnameSegments = request.nextUrl.pathname.split('/');
  const currentDashboard = getCurrentDashboard(pathnameSegments);
  const currentAction = getCurrentAction(pathnameSegments);
  if (currentDashboard && currentAction) {
    const allowedRoles =
      PERMISSIONS[currentDashboard as Dashboards][currentAction as Actions];
    if (!allowedRoles.includes(role)) {
      // Redirect to the prev dashboard
      return NextResponse.redirect(new URL(`/dashboard`, request.url));
    }
  }
  return NextResponse.next();
}

// Patterns where the middleware will be executed
export const config = {
  matcher: [
    '/home/buyers/:path*',
    '/home/suppliers/:path*',
    '/home/my-jobs/:path*',
  ],
};
