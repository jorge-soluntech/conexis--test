/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

// import { useRouter } from 'next/router';
import { AuthProvider } from '@/application/authContext';
import Provider from '@/utils/reduxProvider';

import Settings from './Settings';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: '',
      push: jest.fn(),
    };
  },
}));

describe('Settings component', () => {
  const setup = () =>
    render(
      <AuthProvider>
        <Provider>
          <Settings />
        </Provider>
      </AuthProvider>
    );

  it('There must be a My account title', () => {
    setup();
    expect(
      screen.getByRole('heading', {
        name: /My account/i,
      })
    ).toBeInTheDocument();
  });
});
