/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, within } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import TableCandidates from './TableCandidates';

const mockData = [
  {
    key: '1',
    fullName: 'worker 1',
    email: 'email@email.com',
    workerStatus: 'T4',
  },
  {
    key: '2',
    fullName: 'worker 2',
    email: 'email@email.com',
    workerStatus: 'T4',
  },
];

const mocKProps = {
  loading: false,
  dataUser: mockData,
  searchText: false,
  filteredData: [],
};

describe('Table Candidates component', () => {
  beforeEach(() => {
    render(
      <Provider>
        <TableCandidates {...mocKProps} />
      </Provider>
    );
  });

  describe('Candidates table', () => {
    it('the table header must contain: name, email and worker status', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [fullName, email, workerStatus] = tableHeaders;
      expect(fullName).toHaveTextContent(/name/i);
      expect(email).toHaveTextContent(/email/i);
      expect(workerStatus).toHaveTextContent(/worker status/i);
    });

    it('each table result must contain: name and status', async () => {
      const table = await screen.findByRole('table');
      const tableCells = within(table).getAllByRole('cell');
      const [fullName, email, workerStatus] = tableCells;
      expect(fullName).toHaveTextContent(/worker 1/i);
      expect(email).toHaveTextContent(/email@email.com/i);
      expect(workerStatus).toHaveTextContent(/T4/i);
    });
  });
});
