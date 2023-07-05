import type { IUserComponent } from '../IUserComponent';
import { getUserRolesAllowedFilters } from './getUserRolesAllowedFilters'; // Update with the actual path to your helper file

describe('getUserRolesAllowedFilters', () => {
  it('should return a filter that has the role Hiring Manager', () => {
    const users: IUserComponent.DataUserMapped[] = [
      {
        email: 'mock@soluntech.com',
        key: 'mock-id-key',
        name: 'Mock Mocker',
        status: true,
        userRole: 'Hiring Manager',
      },
    ];

    const expectedFilters = [
      { text: 'Hiring Manager', value: 'Hiring Manager' },
    ];

    const result = getUserRolesAllowedFilters(users);

    expect(result).toEqual(expectedFilters);
  });

  it('should return and empty array no role filters', () => {
    const users: IUserComponent.DataUserMapped[] = [];

    const result = getUserRolesAllowedFilters(users);

    expect(result).toEqual([]);
  });
});
