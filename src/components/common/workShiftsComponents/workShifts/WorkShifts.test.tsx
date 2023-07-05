/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import WorkShifts from './WorkShifts';

const mockProps = {
  allWorkShifts: [],
  loading: false,
};

describe('Work shifts main page', () => {
  beforeEach(() => {
    render(
      <Provider>
        <WorkShifts {...mockProps} />
      </Provider>
    );
  });

  it('there must be a work shifts page', () => {
    expect(
      screen.getByRole('heading', { name: /work shifts/i })
    ).toBeInTheDocument();
  });

  it('there should be a “Export All” dropdown', () => {
    expect(
      screen.getByRole('button', { name: /export all/i })
    ).toBeInTheDocument();
  });

  it('there should be a “Add work shifts” button', () => {
    expect(
      screen.getByRole('button', { name: /add work shifts/i })
    ).toBeInTheDocument();
  });
});
