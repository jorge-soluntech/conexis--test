/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import FormUserCreate from './FormUserCreate';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/home/users/create',
  }),
}));

describe('Create user page', () => {
  beforeEach(() => {
    render(
      <Provider>
        <FormUserCreate titleForm="Create user" />
      </Provider>
    );
  });

  it('there must be a create user page', () => {
    expect(
      screen.getByRole('heading', { name: /Create user/i })
    ).toBeInTheDocument();
  });

  it('submit button should be disable at the start', async () => {
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Submit/i })).toBeDisabled();
    });
  });
});
