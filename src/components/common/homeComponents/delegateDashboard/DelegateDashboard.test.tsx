import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import DelegateDashboard from './DelegateDashboard';

describe('BuyerAdministratorDashboard component', () => {
  it('should render row cards', () => {
    render(
      <Provider>
        <DelegateDashboard />
      </Provider>
    );

    const heading = screen.getByTestId('test-welcome');
    // expect(heading).toHaveTextContent('Welcome back, !');

    expect(heading).toBeInTheDocument();
  });
});
