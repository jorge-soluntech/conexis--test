/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable no-promise-executor-return */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import React from 'react';

import Provider from '@/utils/reduxProvider';

import GLCodes from './GLCodes';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

const mocKProps = {
  dataGLCodes: [],
  filteredData: [],
  handleSearchChange: jest.fn(),
  loading: false,
  setDataGLCodes: jest.fn(),
  setFilteredData: jest.fn(),
  searchText: false,
};

describe('GLCodes component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider>
        <GLCodes {...mocKProps} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });

  it('renders the title and buttons', () => {
    const { getByText } = render(
      <Provider>
        <GLCodes {...mocKProps} />
      </Provider>
    );
    const title = getByText('Manage GL Codes');
    const button = getByText('Add GL code');
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  /* TODO:: Rory to fix this test */
  // it('navigates to the correct route when the add gl code button is clicked', async () => {
  //   const { getByText } = render(
  //     <Provider>
  //       <GLCodes {...mocKProps} />
  //     </Provider>
  //   );
  //   const button = getByText('Add GL code');
  //   fireEvent.click(button);
  //   await waitFor(() => {
  //     expect(useRouter().push).toHaveBeenCalledWith('/home/gl-codes/create');
  //   });
  // });
});
