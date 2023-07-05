import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import CityZipFields from './CityZipFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('CityZipFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <CityZipFields name="city" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelCountry = screen.getByLabelText(formCreate.labelCity);
    const placeholderInput = screen.getByPlaceholderText(
      formCreate.placeholderCity
    );

    expect(placeholderInput).toBeInTheDocument();
    expect(labelCountry).toBeInTheDocument();
  });
});
