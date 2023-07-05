/* eslint-disable jest/expect-expect */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';

import GlCodesComponent from './FormGlCodeCreate';

describe('User component', () => {
  beforeEach(() => {
    render(<GlCodesComponent titleForm={'Add new GL code'} />);
  });

  it('there must be a add gl code page', () => {
    expect(
      screen.getByRole('heading', { name: /Add new GL code/i })
    ).toBeInTheDocument();
  });

  it('should exists the general filds gl code and description', () => {
    expect(
      screen.getByRole('textbox', { name: /GL code/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /Description/i })
    ).toBeInTheDocument();
  });
});
