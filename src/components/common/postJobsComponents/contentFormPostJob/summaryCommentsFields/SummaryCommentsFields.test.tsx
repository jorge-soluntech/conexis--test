import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import SummaryCommentsFields from './SummaryCommentsFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('SummaryCommentsFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <SummaryCommentsFields name="summary" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelJobSummary = screen.getByLabelText(formCreate.labelJobSummary);
    expect(labelJobSummary).toBeInTheDocument();
  });
});
