/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, within } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import TableWorkShifts from './TableWorkShifts';

const mockData = [
  {
    key: '1',
    workShiftDescription: 'Work Shift 1',
    startTime: '8:00 am',
    endTime: '8:00 pm',
    workDays: 'Monday',
    status: true,
  },
  {
    key: '2',
    workShiftDescription: 'Work Shift 2',
    startTime: '8:00 am',
    endTime: '8:00 pm',
    workDays: 'Monday',
    status: true,
  },
];

describe('Table GL codes component', () => {
  beforeEach(() => {
    render(
      <Provider>
        <TableWorkShifts loading={false} dataUser={mockData} />
      </Provider>
    );
  });

  describe('GL codes table', () => {
    it('the table header must contain: name, shift start time, shift end time, work days and status', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [name, shiftStartTime, shiftEndTime, workDays, status] =
        tableHeaders;
      expect(name).toHaveTextContent(/name/i);
      expect(shiftStartTime).toHaveTextContent(/shift start time/i);
      expect(shiftEndTime).toHaveTextContent(/shift end time/i);
      expect(workDays).toHaveTextContent(/work days/i);
      expect(status).toHaveTextContent(/status/i);
    });

    it('each table result must contain: GL code, GL code description name and status', async () => {
      const table = await screen.findByRole('table');
      const tableCells = within(table).getAllByRole('cell');
      const [workShiftDescription, startTime, endTime, workDays, status] =
        tableCells;
      expect(workShiftDescription).toHaveTextContent(/work shift 1/i);
      expect(startTime).toHaveTextContent(/8:00 am/i);
      expect(endTime).toHaveTextContent(/8:00 pm/i);
      expect(workDays).toHaveTextContent(/Monday/i);
      expect(status).toHaveTextContent(/Active/i);
    });
  });
});
