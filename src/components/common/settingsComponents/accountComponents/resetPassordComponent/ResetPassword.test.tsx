/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from '@testing-library/react';

import ResetPassword from './ResetPassword';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/home/settings',
  }),
}));

describe('reset password', () => {
  beforeEach(() => {
    render(<ResetPassword />);
  });

  it('submit button should be present at the start', async () => {
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Submit/i })
      ).toBeInTheDocument();
    });
  });

  it('should exists de fields: Current password, New password, Confirm new password/', () => {
    expect(screen.getByLabelText('Current password')).toBeInTheDocument();
    expect(screen.getByLabelText('New password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm new password')).toBeInTheDocument();
  });
});
