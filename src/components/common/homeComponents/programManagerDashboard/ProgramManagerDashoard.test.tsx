import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import ProgramManagerDashboard from './ProgramManagerDashboard';

describe('ProgramManagerDashboard component', () => {
  describe('Render method', () => {
    it('should have h3 tag with metric label', () => {
      render(
        <Provider>
          <ProgramManagerDashboard />
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
