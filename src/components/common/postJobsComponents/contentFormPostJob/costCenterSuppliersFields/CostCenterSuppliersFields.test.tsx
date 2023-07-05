import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import CostCenterSuppliersFields from './CostCenterSuppliersFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('CostCenterSuppliersFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <CostCenterSuppliersFields name="constCenter" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelCostCenter = screen.getByLabelText(formCreate.labelCostCenters);
    const placeholderInput = screen.getByText(formCreate.placeholderCostCenter);

    expect(placeholderInput).toBeInTheDocument();
    expect(labelCostCenter).toBeInTheDocument();
  });
});
