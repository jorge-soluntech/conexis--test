/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from '@testing-library/react';

import PersonalInfo from './PersonalInfo';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/home/settings',
  }),
}));

describe('Edit personal information', () => {
  beforeEach(() => {
    render(<PersonalInfo />);
  });

  it('submit button should be present at the start', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Submit/i })
      ).toBeInTheDocument();
    });
  });

  it('should exists de fields: first name, last name, email', () => {
    expect(
      screen.getByRole('textbox', { name: /first name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /last name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
  });
});
