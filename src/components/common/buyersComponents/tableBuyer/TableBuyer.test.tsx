/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, within } from '@testing-library/react';
import React from 'react';

import { DASHBOARDTYPES } from '@/consts/permissions';

import TableBuyers from './TableBuyer';

const fakeData = [
  {
    key: '386ccf45-b28d-43f6-95bb-8356221df04a',
    clientCompanyName: 'soluntech',
    clientContactName: 'John Doe',
    clientContactEmail: 'john@gmail.com',
    clientContactPhone: '3123456',
    accountOwner: 'John Owner',
    contractExpirationDate: '-',
    details: {
      aditionalInfo: {
        legalNameInvoicing: '-',
        clientMailingAddress: '-',
        clientMailingAddress2: '-',
        workWeekDefinition: '-',
        currency: '-',
      },
      taxes: {
        vatFederalTax: '-',
        provincialTax: '-',
        otherTax: '-',
      },
      approvals: {
        jobsRequireApproval: 'No',
        submissionsRequireApproval: 'Yes',
        accesToApplicantTrackingModule: 'No',
        contractRequiresApproval: 'No',
        accountsPayableContactName: 'john',
        accountsPayableContactEmail: 'john@gmail.com',
      },
      documents: {
        clientAgreement: [],
        others: [],
      },
    },
  },
];

describe('Table user component', () => {
  beforeEach(() => {
    render(
      <TableBuyers
        dashboard={DASHBOARDTYPES.buyer}
        loading={false}
        dataTable={fakeData}
        setShowError={() => {}}
      />
    );
  });

  describe('users table', () => {
    it('the table header must contain: clientCompanyName,  clientContactName, clientContactEmail, clientContactPhone, accountOwner, actions', async () => {
      const table = await screen.findByRole('table');
      const tableHeaders = within(table).getAllByRole('columnheader');
      const [
        clientCompanyName,
        clientContactName,
        clientContactEmail,
        clientContactPhone,
        accountOwner,
        contractExpirationDate,
      ] = tableHeaders;
      expect(clientCompanyName).toHaveTextContent(/Client company name/i);
      expect(clientContactName).toHaveTextContent(/Client contact name/i);
      expect(clientContactEmail).toHaveTextContent(/Client contact email/i);
      expect(clientContactPhone).toHaveTextContent(/Client contact phone/i);
      expect(accountOwner).toHaveTextContent(/Account owner/i);
      expect(contractExpirationDate).toHaveTextContent(
        /Contract expiration date/i
      );
    });

    it('The first table result must contain: clientCompanyName, clientContactName, clientContactEmail, clientContactPhone, accountOwner.. With the values assigned in fake data', async () => {
      const clientCompanyName = screen.getByText(/soluntech/i);
      const clientContactName = screen.getByText(/John Doe/i);
      const clientContactEmail = screen.getByText(/john@gmail.com/i);
      const clientContactPhone = screen.getByText(/3123456/i);
      const accountOwner = screen.getByText(/John Owner/i);

      const firstRow = screen.getByRole('row', {
        name: /.*john@gmail\.com.*/i,
      });

      expect(firstRow).toBeInTheDocument();

      expect(firstRow).toContainElement(clientCompanyName);
      expect(firstRow).toContainElement(clientContactName);
      expect(firstRow).toContainElement(clientContactEmail);
      expect(firstRow).toContainElement(clientContactPhone);
      expect(firstRow).toContainElement(accountOwner);
    });
  });
});
