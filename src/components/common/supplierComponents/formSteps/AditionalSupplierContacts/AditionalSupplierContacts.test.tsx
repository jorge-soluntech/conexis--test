import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import AditionalSupplierContacts from './AditionalSupplierContacts';

const setup = () =>
  render(
    <Provider>
      <AditionalSupplierContacts />
    </Provider>
  );

beforeEach(() => {});

describe('Additional supplier contacts Form', () => {
  it('should render the Form Fields and buttons', () => {
    setup();
    expect(screen.getByText('Supplier contact name 2')).toBeInTheDocument();
    expect(screen.getByText('Supplier contact email 2')).toBeInTheDocument();
    expect(screen.getByText('Supplier contact name 3')).toBeInTheDocument();
    expect(screen.getByText('Supplier contact email 3')).toBeInTheDocument();
    expect(
      screen.getByText('Accounts receivable contact name')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Accounts receivable contact email')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Continue' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Clear fields' })
    ).toBeInTheDocument();
  });
});
