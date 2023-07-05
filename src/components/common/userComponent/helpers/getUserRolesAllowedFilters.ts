import { getUniqueArrayObjects } from '@/utils/getUniqueArrayObjects';
import { capitalizeString } from '@/utils/stringUtils';

type UserRoles = { userRole: string };
type UserRoleFilters = { text: string; value: string };

/* NOTE::
 * If the users array is large or if the operations inside the function becomes more complex,
 * it could potentially become computationally expensive.
 * In this case it is, recommended to use this function inside of the React useMemo hook, or even optimize this function.
 */
/**
 * @template T IUserComponent.DataUserMapped[] - The type of users array passed in
 * @param users IUserComponent.DataUserMapped[]
 * @returns {UserRoleFilters[]} An array of unique user roles in the format { text: string, value: string }[].
 */
export const getUserRolesAllowedFilters = <T extends { userRole: string }>(
  users: T[]
): UserRoleFilters[] => {
  // The below code is taking ALL the users data and
  // creating a unique list of values which can be used for filters
  // first we create the unique list,
  // and then we format it into the shape antd columns expects for filters.
  const allowedUserRoleFilters: UserRoleFilters[] =
    getUniqueArrayObjects<UserRoles>(
      users.map(({ userRole }) => ({
        userRole,
      })),
      'userRole'
    )?.map(({ userRole }) => ({
      text: userRole,
      value: capitalizeString(userRole),
    }));

  return allowedUserRoleFilters;
};
