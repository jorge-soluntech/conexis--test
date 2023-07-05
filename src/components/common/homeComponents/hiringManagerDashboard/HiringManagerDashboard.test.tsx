import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import HiringManagerDashboard from './HiringManagerDashboard';

describe('HiringManagerDashboard component', () => {
  it('should render row cards', () => {
    render(
      <Provider>
        <HiringManagerDashboard />
      </Provider>
    );

    const heading = screen.getByTestId('test-welcome');
    // expect(heading).toHaveTextContent('Welcome back, !');

    expect(heading).toBeInTheDocument();
  });
});
