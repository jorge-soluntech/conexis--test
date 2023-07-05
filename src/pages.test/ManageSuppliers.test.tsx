import { render } from '@testing-library/react';

import ManageSuppliers from '@/pages/home/suppliers';
import Provider from '@/utils/reduxProvider';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('ManageSuppliers page', () => {
  describe('Render method', () => {
    it('renders Suppliers table unchanged', () => {
      const { container } = render(
        <Provider>
          <ManageSuppliers />
        </Provider>
      );

      expect(container).toBeInTheDocument();
    });
  });
});
