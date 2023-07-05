/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import UserComponent from './UserComponent';

const mockProps = {
  dataUser: [],
  filters: {
    userRole: [],
    userStatus: [],
  },
  filteredData: [],
  handleSearchChange: jest.fn(),
  loading: false,
  search: '',
  setDataUser: jest.fn(),
  setFilters: jest.fn(),
  setFilteredData: jest.fn(),
};

describe('User component', () => {
  beforeEach(() => {
    render(
      <Provider>
        <UserComponent {...mockProps} />
      </Provider>
    );
  });

  it('there must be a users page', () => {
    expect(screen.getByRole('heading', { name: /users/i })).toBeInTheDocument();
  });

  it('there should be a “Export All” dropdown', () => {
    expect(
      screen.getByRole('button', { name: /export all/i })
    ).toBeInTheDocument();
  });

  it('there should be a “Add new user” button', () => {
    expect(
      screen.getByRole('button', { name: /add new user/i })
    ).toBeInTheDocument();
  });

  it('there must be an input text with label search by', () => {
    expect(screen.getByPlaceholderText(/search by/i)).toBeInTheDocument();
  });
});
