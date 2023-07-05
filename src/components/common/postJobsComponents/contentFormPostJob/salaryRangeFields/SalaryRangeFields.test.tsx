import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import SalaryRangeFields from './SalaryRangeFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('SalaryRangeFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <SalaryRangeFields name="salaryRange" />
      </Provider>
    );
  });

  test('render field', () => {
    const placeholderInput = screen.getByPlaceholderText(
      formCreate.placeholderSalaryHigh
    );
    expect(placeholderInput).toBeInTheDocument();
  });
});
