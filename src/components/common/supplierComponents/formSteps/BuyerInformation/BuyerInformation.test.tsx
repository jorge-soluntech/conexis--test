import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import BuyerInformation from './BuyerInformation';

const setup = () =>
  render(
    <Provider>
      <BuyerInformation />
    </Provider>
  );

beforeEach(() => {});

describe('Buyer Information Form', () => {
  it('should render the Form Fields and buttons', () => {
    setup();
    expect(screen.getByText('Assigned buyers')).toBeInTheDocument();
  });
});
