/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import FormUserUpdate from './FormUserUpdate';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/home/users/update/6465e3b0-fd0a-4890-9493-6091087621e8',
  }),
}));

describe('Update user page', () => {
  // TODO: temporary fix
  const props: any = {};

  beforeEach(() => {
    render(<FormUserUpdate {...props} />);
  });

  it('there must be a edit business unit page', () => {
    expect(
      screen.getByRole('heading', { name: /Update user/i })
    ).toBeInTheDocument();
  });

  it('should exists the general filds first name, email and last name', () => {
    expect(
      screen.getByRole('textbox', { name: /First name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /Last name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Email/i })).toBeInTheDocument();
  });
});
