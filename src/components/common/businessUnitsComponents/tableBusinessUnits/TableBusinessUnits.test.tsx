/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, within } from '@testing-library/react';

import TableBusinessUnits from './TableBusinessUnits';

const fakeData = [
  {
    key: '123',
    idNumber: '000',
    businessUnitNumber: 'string',
    location: 'Location',
    buOwner: 'John Doe',
    status: 'Active',
  },
  {
    key: '124',
    idNumber: '111',
    businessUnitNumber: '11',
    location: null,
    buOwner: 'Johanna Doe',
    status: 'Active',
  },
];

describe('Table user component', () => {
  beforeEach(() => {
    render(
      <TableBusinessUnits
        searchText={''}
        loading={false}
        dataUser={fakeData}
        setDataUser={() => {}}
        filteredData={fakeData}
        setFilteredData={() => {}}
        BuOwnerFilters={[]}
      />
    );
  });

  describe('Business units table', () => {
    it('the table header must contain: id, region, location, business unit #, BU owner, status and actions', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [id, businessUnitNumber, location, buOwner, status, actions] =
        tableHeaders;
      expect(id).toHaveTextContent(/id/i);
      expect(businessUnitNumber).toHaveTextContent(/business Unit #/i);
      expect(location).toHaveTextContent(/Business Unit name/i);
      expect(buOwner).toHaveTextContent(/bu owner/i);
      expect(status).toHaveTextContent(/status/i);
      expect(actions).toHaveTextContent(/actions/i);
    });

    it('each table result must contain: id, region, location, business unit #, BU owner and status', async () => {
      const table = await screen.findByRole('table');
      const tableCells = within(table).getAllByRole('cell');
      const [idNumber, businessUnitNumber, location, buOwner, status] =
        tableCells;
      expect(idNumber).toHaveTextContent(/000/i);
      expect(location).toHaveTextContent(/location/i);
      expect(businessUnitNumber).toHaveTextContent(/string/i);
      expect(buOwner).toHaveTextContent(/john doe/i);
      expect(status).toHaveTextContent(/active/i);
    });
  });
});
