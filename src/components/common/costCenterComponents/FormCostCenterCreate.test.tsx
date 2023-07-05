/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';

import CostCenterComponent from './FormCostCenterCreate';

describe('cost center', () => {
  beforeEach(() => {
    render(<CostCenterComponent titleForm={'Add new Cost Center'} />);
  });

  it('there must be a add cost center page', () => {
    expect(
      screen.getByRole('heading', { name: /Add new Cost Center/i })
    ).toBeInTheDocument();
  });

  it('should exists the general filds cost center namber and name', () => {
    expect(
      screen.getByRole('textbox', { name: /Number/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Name/i })).toBeInTheDocument();
  });
});
