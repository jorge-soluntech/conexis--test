import { render } from '@testing-library/react';

import Custom404 from '@/pages/404';
import Provider from '@/utils/reduxProvider';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('404 page', () => {
  it('should render the component', () => {
    const { container } = render(
      <Provider>
        <Custom404 />
      </Provider>
    );

    expect(container).toBeInTheDocument();
  });
});
