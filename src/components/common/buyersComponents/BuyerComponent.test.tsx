/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';

import BuyerComponent from './BuyerComponent';

describe('Buyers component', () => {
  beforeEach(() => {
    render(
      <BuyerComponent
        {...{
          loading: false,
          dataTable: [],
          showError: false,
          setShowError: () => {
            return false;
          },
          messageError: '',
        }}
      />
    );
  });

  it('there must be a buyers page', () => {
    expect(
      screen.getByRole('heading', { name: /Manage Buyers/i })
    ).toBeInTheDocument();
  });
});
