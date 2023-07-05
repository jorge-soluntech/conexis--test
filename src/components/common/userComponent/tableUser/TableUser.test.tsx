/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, within } from '@testing-library/react';

import TableUsers from './TableUsers';

const fakeData = [
  {
    key: '386ccf45-b28d-43f6-95bb-8356221df04a',
    name: 'John Doe',
    email: 'john@yopmail.com',
    userRole: 'Buyer Administrator',
    status: true,
  },
  {
    key: '123ccf45-b28d-43f6-95bb-8356221df04a',
    name: 'Johanna Doe',
    email: 'johanna@yopmail.com',
    userRole: 'Approver',
    status: false,
  },
];

describe('Table user component', () => {
  beforeEach(() => {
    render(
      <TableUsers
        search={''}
        loading={false}
        dataUser={fakeData}
        setDataUser={() => {}}
        filteredData={fakeData}
        setFilteredData={() => {}}
        filters={{
          userRole: [],
          userStatus: [],
        }}
        setFilters={() => {}}
      />
    );
  });

  describe('users table', () => {
    it('the table header must contain: name, email, user role, user status and actions', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [name, email, userRole, userStatus, actions] = tableHeaders;
      expect(name).toHaveTextContent(/name/i);
      expect(email).toHaveTextContent(/email/i);
      expect(userRole).toHaveTextContent(/user role/i);
      expect(userStatus).toHaveTextContent(/user status/i);
      expect(actions).toHaveTextContent(/actions/i);
    });

    it('each table result must contain: name, email, user role and user status', async () => {
      const table = await screen.findByRole('table');
      const tableCells = within(table).getAllByRole('cell');
      expect(tableCells).toHaveLength(10);

      const [name, email, userRole, status] = tableCells;
      expect(name).toHaveTextContent(/john doe/i);
      expect(email).toHaveTextContent(/john@yopmail.com/i);
      expect(userRole).toHaveTextContent(/buyer administrator/i);
      expect(status).toHaveTextContent(/active/i);
    });
  });
});
