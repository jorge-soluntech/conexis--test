import { render, screen } from '@testing-library/react';

import { AppConfig } from '@/utils/AppConfig';

import ExampleComponentTitle from './exampleComponent';

describe('ExampleComponentTitle component', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<ExampleComponentTitle title={AppConfig.title} />);

      const heading = screen.getByRole('heading', {
        name: AppConfig.title,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
