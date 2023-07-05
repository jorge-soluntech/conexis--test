import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import SupplierAdministratorDashboard from './SupplierAdministratorDashboard';

describe('SupplierAdministratorDashboard component', () => {
  describe('Render method', () => {
    it('should have h3 tag with metric label', () => {
      render(
        <Provider>
          <SupplierAdministratorDashboard />
        </Provider>
      );

      const heading = screen.getByRole('heading', {
        name: 'Metrics',
        level: 3,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
