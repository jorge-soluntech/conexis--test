/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, within } from '@testing-library/react';

import TableCostCenter from './TableCostCenter';

const fakeData = [
  {
    costCenterNumber: '123',
    costCenterName: 'John Doe',
    isActive: false,
    id: 'id1',
  },
  {
    costCenterNumber: '345',
    costCenterName: 'Johannna Doe',
    isActive: true,
    id: 'id2',
  },
];

describe('Table user component', () => {
  beforeEach(() => {
    render(
      <TableCostCenter
        dataCostCenter={fakeData}
        searchText={''}
        loading={false}
        setDataCostCenter={() => {}}
        filteredData={fakeData}
        setFilteredData={() => {}}
      />
    );
  });

  describe('Cost centers table', () => {
    it('the table header must contain: cost center number, cost center name and status', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [costCenterNumber, costCenterName, isActive] = tableHeaders;
      expect(costCenterNumber).toHaveTextContent(/cost center number/i);
      expect(costCenterName).toHaveTextContent(/cost center name/i);
      expect(isActive).toHaveTextContent(/status/i);
    });

    it('each table result must contain: cost center number, cost center name and status', async () => {
      const table = await screen.findByRole('table');
      const tableCells = within(table).getAllByRole('cell');
      const [costCenterNumber, costCenterName, isActive] = tableCells;
      expect(costCenterNumber).toHaveTextContent(/123/i);
      expect(costCenterName).toHaveTextContent(/john doe/i);
      expect(isActive).toHaveTextContent(/active/i);
    });
  });
});
