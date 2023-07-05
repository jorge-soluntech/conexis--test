/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, within } from '@testing-library/react';
import React from 'react';

import { AuthContext } from '@/application/authContext';
import type { IUser } from '@/application/authContext/IUser';
import { DASHBOARDTYPES } from '@/consts/permissions';

import TableComponent from './Table';

describe('Table user component', () => {
  const user: IUser = {
    _id: '',
    username: '',
    password: '',
    tenant: 1,
    role: 'MSP Administrator',
  };

  beforeEach(() => {
    render(
      <AuthContext.Provider
        value={{
          ...({} as any),
          user,
        }}
      >
        <TableComponent
          dashboard={DASHBOARDTYPES.buyer}
          page={1}
          columns={[]}
          columnsSkeleton={7}
          rowsSkeleton={8}
          loading={false}
          dataTable={[
            {
              key: '5c017d4a-e180-4dff-95f5-1554e4e638d0',
              clientCompanyName: 'Validate email 3',
              clientContactName: '-',
              clientContactEmail: '-',
              clientContactPhone: '-',
              accountOwner: '-',
              contractExpirationDate: '04/05/2023',
              details: {
                aditionalInfo: {
                  legalNameInvoicing: 'Legal name for invoicing',
                  clientMailingAddress: '-',
                  clientMailingAddress2: '-',
                  workWeekDefinition: 'M-S',
                  currency: 'CAD',
                },
                taxes: {
                  vatFederalTax: '-',
                  provincialTax: '-',
                  otherTax: '-',
                },
                approvals: {
                  jobsRequireApproval: 'Yes',
                  submissionsRequireApproval: 'Yes',
                  accesToApplicantTrackingModule: 'No',
                  contractRequiresApproval: 'No',
                  accountsPayableContactName: '-',
                  accountsPayableContactEmail: '-',
                },
                documents: {
                  clientAgreement: [],
                  others: [],
                },
              },
            },
          ]}
          onChange={() => {}}
        />
      </AuthContext.Provider>
    );
  });

  describe('users table', () => {
    it('the table header must contain actions column if the user is an administrator', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const lastColumn = tableHeaders[tableHeaders.length - 1];
      expect(lastColumn).toHaveTextContent(/Actions/i);
    });
  });
});
