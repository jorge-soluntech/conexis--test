import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import BuyerFinanceDashboard from './BuyerFinanceDashboard';

describe('BuyerAdministratorDashboard component', () => {
  it('should render row cards', () => {
    render(
      <Provider>
        <BuyerFinanceDashboard />
      </Provider>
    );

    const heading = screen.getByTestId('test-welcome');
    // expect(heading).toHaveTextContent('Welcome back, !');

    expect(heading).toBeInTheDocument();
  });
});
