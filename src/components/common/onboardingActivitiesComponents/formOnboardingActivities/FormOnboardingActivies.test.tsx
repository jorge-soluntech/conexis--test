import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { AuthProvider } from '@/application/authContext';
import Provider from '@/utils/reduxProvider';

import FormOnboardingActivities from './FormOnboardingActivities';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: '',
      push: jest.fn(),
    };
  },
}));

describe('Form Onboarding Activities Component', () => {
  const setup = () =>
    render(
      <AuthProvider>
        <Provider>
          <FormOnboardingActivities />
        </Provider>
      </AuthProvider>
    );

  it('should display matching error when dataform is invalid', async () => {
    setup();

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      const label = screen.getByLabelText('Onboarding activity 1', {
        exact: false,
      });
      return expect(label).toBeInTheDocument();
    });
  });
});
