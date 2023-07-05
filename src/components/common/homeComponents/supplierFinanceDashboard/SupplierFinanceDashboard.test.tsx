import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import SupplierFinanceDashboard from './SupplierFinanceDashboard';

describe('SupplierFinanceDashboard component', () => {
  describe('Render method', () => {
    it('should render row cards', () => {
      render(
        <Provider>
          <SupplierFinanceDashboard />
        </Provider>
      );

      const heading = screen.getByTestId('test-welcome');

      expect(heading).toBeInTheDocument();
    });
  });
});
