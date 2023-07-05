/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from '@testing-library/react';

import BUForm from './BUForm';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/home/business-units/create/',
  }),
}));

describe('Create add business units page', () => {
  beforeEach(() => {
    render(<BUForm titleForm="Add new Business Unit" />);
  });

  it('there must be a add business Unit Page', () => {
    expect(
      screen.getByRole('heading', { name: /Add new Business Unit/i })
    ).toBeInTheDocument();
  });

  it('submit button should be present at the start', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Submit/i })
      ).toBeInTheDocument();
    });
  });

  it('should exists de fields: first name, last name, email, region, address and phone', () => {
    expect(
      screen.getByRole('textbox', { name: /first name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /last name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /Business Unit name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /Business Unit #/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /address/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: /phone number/i })
    ).toBeInTheDocument();
  });
});
