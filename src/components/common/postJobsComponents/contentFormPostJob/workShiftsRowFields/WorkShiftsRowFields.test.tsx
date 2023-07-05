import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import WorkShiftsRowFields from './WorkShiftsRowFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('WorkShiftsRowFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <WorkShiftsRowFields name="targetRate" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelTargetRate = screen.getByLabelText(formCreate.labelTargetRate);
    const placeholderInput = screen.getByPlaceholderText(
      formCreate.placeholderTargetRate
    );

    expect(placeholderInput).toBeInTheDocument();
    expect(labelTargetRate).toBeInTheDocument();
  });
});
