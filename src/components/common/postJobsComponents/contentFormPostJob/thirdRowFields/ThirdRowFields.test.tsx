import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import NumberPositionsTypeFields from './ThirdRowFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('NumberPositionsTypeFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <NumberPositionsTypeFields name="thirdRow" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelNumberPosition = screen.getByLabelText(
      formCreate.labelNumberPositions
    );
    const placeholderInput = screen.getByPlaceholderText(
      formCreate.placeholderNumberPositions
    );

    expect(placeholderInput).toBeInTheDocument();
    expect(labelNumberPosition).toBeInTheDocument();
  });
});
