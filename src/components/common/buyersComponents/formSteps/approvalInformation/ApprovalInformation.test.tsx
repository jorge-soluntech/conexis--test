/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';

import Provider from '@/utils/reduxProvider';

import ApprovalInformation from './ApprovalInformation';

beforeEach(() => {
  render(
    <Provider>
      <ApprovalInformation />
    </Provider>
  );
});

describe('ApprovalInformation', () => {
  it('should render the correct labels', () => {
    expect(screen.getByLabelText('Jobs require approval?')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Submissions require approval?')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Contracts require final approval?')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Access to applicant tracking module?')
    ).toBeInTheDocument();
  });
});
