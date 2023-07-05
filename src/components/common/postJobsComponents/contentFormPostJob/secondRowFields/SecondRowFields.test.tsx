import { render, screen } from '@testing-library/react';
import React from 'react';

import locales from '@/locales/en/en.json';
import Provider from '@/utils/reduxProvider';

import JobTitleSkillFields from './SecondRowFields';

const {
  postNewJob: { formCreate },
} = locales;

describe('JobTitleSkillFields', () => {
  beforeEach(() => {
    render(
      <Provider>
        <JobTitleSkillFields name="secondRow" />
      </Provider>
    );
  });

  test('render field', () => {
    const labelJobTitle = screen.getByLabelText(formCreate.labelJobTitle);
    const placeholderInput = screen.getByPlaceholderText(
      formCreate.placeholderJobTitle
    );

    expect(placeholderInput).toBeInTheDocument();
    expect(labelJobTitle).toBeInTheDocument();
  });
});
