/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

// import { useRouter } from 'next/router';
import { AuthProvider } from '@/application/authContext';
import Provider from '@/utils/reduxProvider';

import OnboardingActivities from './OnboardingActivities';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: '',
      push: jest.fn(),
    };
  },
}));

describe('OnboardingActivities component', () => {
  const setup = () =>
    render(
      <AuthProvider>
        <Provider>
          <OnboardingActivities />
        </Provider>
      </AuthProvider>
    );

  it('there must be a title edit', () => {
    setup();
    expect(
      screen.getByRole('heading', {
        name: /Edit standard Onboarding Activities/i,
      })
    ).toBeInTheDocument();
  });
});
