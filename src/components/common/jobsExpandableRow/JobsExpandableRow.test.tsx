import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import JobsExpandableRowDetails from './index';

const {
  jobApprovals: { expandable },
} = locales;

const record = {
  key: '5054',
  jobTitle: 'Job Healthcare 1',
  positionType: 'Temporary',
  plannedStartDate: '11 Jun 2023',
  plannedEndDate: '29 Jun 2023',
  numberPositions: '1',
  skillCategory: 'Healthcare',
  hiringManager: {
    id: '70e2ea72-b8cc-4f49-b498-cd443341092f',
    full_name: 'Buyer Administrator',
    email: 'jheidy@soluntech.com',
  },
  workAddress: '-',
  province: '-',
  country: '-',
  postalCode: '-',
  targetRate: '610.00',
  businessUnit: '123',
  jobComments: '-',
  supplierDistributionList: '-',
  salaryHigh: '-',
  salaryLow: '-',
  jobDescription: '-',
  jobDescriptionAttachment: 'Attachment.txt',
  workShifts: [],
};

describe('JobsExpandableRowDetails', () => {
  beforeEach(() => {
    render(
      <Provider>
        <JobsExpandableRowDetails {...{ record }} />
      </Provider>
    );
  });

  it('should display the title "Salary Target High"', () => {
    const title = screen.getByText(expandable.salaryTargetHigh);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Created On"', () => {
    const title = screen.getByText(expandable.createdOn);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "GL Code"', () => {
    const title = screen.getByText(expandable.glCode);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Cost Centers"', () => {
    const title = screen.getByText(expandable.glCode);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Business Unit"', () => {
    const title = screen.getByText(expandable.businessUnit);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Comments"', () => {
    const title = screen.getByText(expandable.comments);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Supplier Distribution List"', () => {
    const title = screen.getByText(expandable.supplierDistributionList);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Job Summary"', () => {
    const title = screen.getByText(expandable.jobSummary);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Your Responsibilities"', () => {
    const title = screen.getByText(expandable.yourResponsibilities);
    expect(title).toBeInTheDocument();
  });

  it('should display the title "Job Summary Attachment"', () => {
    const title = screen.getByText(expandable.jobSummaryAttachment);
    expect(title).toBeInTheDocument();
  });

  it('should display the title Job Summary Attachment', () => {
    const title = screen.getByText(expandable.jobSummaryAttachment);
    expect(title).toBeInTheDocument();
  });
});
