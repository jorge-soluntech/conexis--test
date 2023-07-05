import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import FieldHiringManager from './FieldHiringManager';

const {
  postNewJob: { formCreate },
} = locales;

describe('FieldHiringManager', () => {
  beforeEach(() => {
    render(
      <Provider>
        <FieldHiringManager name="hiringManager" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelHiringManager = screen.getByLabelText(
      formCreate.labelHiringManager
    );
    const placeholderInput = screen.getByText(
      formCreate.placeholderHiringManager
    );

    expect(placeholderInput).toBeInTheDocument();
    expect(labelHiringManager).toBeInTheDocument();
  });
});
