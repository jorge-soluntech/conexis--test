import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import RecruiterDashboard from './RecruiterDashboard';

describe('RecruiterDashboard component', () => {
  it('should render row cards', () => {
    render(
      <Provider>
        <RecruiterDashboard />
      </Provider>
    );

    const heading = screen.getByTestId('test-welcome');

    expect(heading).toBeInTheDocument();
  });
});
