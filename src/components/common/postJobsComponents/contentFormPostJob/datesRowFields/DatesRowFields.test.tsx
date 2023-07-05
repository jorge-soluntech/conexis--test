import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import DatesRowFields from './DatesRowFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('DatesRowFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <DatesRowFields name="dates" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelStartDate = screen.getByLabelText(
      formCreate.labelPlannedStartDate
    );

    expect(labelStartDate).toBeInTheDocument();
  });
});
