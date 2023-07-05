import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import FormCandidatesCreate from './FormCandidatesCreate';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: '',
      push: jest.fn(),
    };
  },
}));

describe('Form FormCandidatesCreate Component', () => {
  const setup = () =>
    render(
      <Provider>
        <FormCandidatesCreate />
      </Provider>
    );

  it('submit button should be present at the start', async () => {
    setup();
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Submit/i })
      ).toBeInTheDocument();
    });
  });

  it('should display matching error when dataform is invalid', async () => {
    setup();

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      const label = screen.getByLabelText('First name', {
        exact: false,
      });
      return expect(label).toBeInTheDocument();
    });
  });
});
