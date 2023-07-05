/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import MyJobs from './MyJobs';

const mockProps = {
  currentUserRoleName: null,
  handleSearchChange: jest.fn(),
  exportAllJobs: jest.fn(),
  loading: false,
  width: 740,
  filteredData: [],
  allJobs: [],
  search: '',
  setTemplateJobs: jest.fn(),
  templateJobs: [],
};

describe('My jobs component', () => {
  beforeEach(() => {
    render(
      <Provider>
        <MyJobs {...mockProps} />
      </Provider>
    );
  });

  it('there must be a my jobs page', () => {
    expect(
      screen.getByRole('heading', { name: /my jobs/i })
    ).toBeInTheDocument();
  });

  it('there must be an input text with label search by', () => {
    expect(screen.getByPlaceholderText(/search by/i)).toBeInTheDocument();
  });

  it('there should be a “Export All” dropdown', () => {
    expect(
      screen.getByRole('button', { name: /export all/i })
    ).toBeInTheDocument();
  });
});
