import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import ManageSuppliers from './ManageSuppliers';

const mockProps = {
  dataManageSuppliers: [],
  filters: {
    status: [],
    expiration: [],
    contactEmail: [],
    contactName: [],
  },
  filteredData: [],
  handleSearchChange: jest.fn(),
  loading: false,
  searchText: false,
  setFilteredData: jest.fn(),
  setDataManageSuppliers: jest.fn(),
};

describe('Manage suppliers page', () => {
  const setup = () =>
    render(
      <Provider>
        <ManageSuppliers {...mockProps} />
      </Provider>
    );

  it('there must be a manage supplier page', () => {
    setup();
    expect(
      screen.getByRole('heading', {
        name: /Manage Suppliers/i,
      })
    ).toBeInTheDocument();
  });

  it('there should be a “Add supplier” button', () => {
    setup();
    expect(
      screen.getByRole('button', { name: /Add supplier/i })
    ).toBeInTheDocument();
  });

  it('there must be an input text with label search by', () => {
    setup();
    expect(screen.getByPlaceholderText(/search by/i)).toBeInTheDocument();
  });
});
