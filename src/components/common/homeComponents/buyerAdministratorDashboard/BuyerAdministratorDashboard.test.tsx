import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import BuyerAdministratorDashboard from './BuyerAdministratorDashboard';

describe('BuyerAdministratorDashboard component', () => {
  it('should render row cards', () => {
    render(
      <Provider>
        <BuyerAdministratorDashboard />
      </Provider>
    );

    const heading = screen.getByTestId('test-welcome');
    // expect(heading).toHaveTextContent('Welcome back, !');

    expect(heading).toBeInTheDocument();
  });
});
