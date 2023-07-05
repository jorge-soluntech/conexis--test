import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import BUnitsGLCodesFields from './BUnitsGLCodesFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('BUnitsGLCodesFields component', () => {
  beforeEach(() => {
    render(
      <Provider>
        <BUnitsGLCodesFields name="bussinessUnits" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelBUnits = screen.getByLabelText(formCreate.labelBUnits);
    const placeholderInput = screen.getByText(formCreate.placeholderBUnits);

    expect(placeholderInput).toBeInTheDocument();
    expect(labelBUnits).toBeInTheDocument();
  });
});
