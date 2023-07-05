/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, within } from '@testing-library/react';

import TableGLCodes from './TableGLCodes';

const fakeData = [
  {
    key: '123',
    description: 'GL code description',
    glCode: 'GLCODE',
    isActive: false,
  },
  {
    key: '456',
    description: '',
    glCode: 'code',
    isActive: true,
  },
];

describe('Table GL codes component', () => {
  beforeEach(() => {
    render(
      <TableGLCodes
        dataGLCodes={fakeData}
        searchText={''}
        loading={false}
        setDataGLCodes={() => {}}
        filteredData={fakeData}
        setFilteredData={() => {}}
      />
    );
  });

  describe('GL codes table', () => {
    it('the table header must contain: GL code, GL code description name and status', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [costCenterNumber, costCenterName, isActive] = tableHeaders;
      expect(costCenterNumber).toHaveTextContent(/gl code/i);
      expect(costCenterName).toHaveTextContent(/gl code description/i);
      expect(isActive).toHaveTextContent(/status/i);
    });

    it('each table result must contain: GL code, GL code description name and status', async () => {
      const table = await screen.findByRole('table');
      const tableCells = within(table).getAllByRole('cell');
      const [glCode, description, isActive] = tableCells;
      expect(glCode).toHaveTextContent(/glcode/i);
      expect(description).toHaveTextContent(/gl code description/i);
      expect(isActive).toHaveTextContent(/inactive/i);
    });
  });
});
