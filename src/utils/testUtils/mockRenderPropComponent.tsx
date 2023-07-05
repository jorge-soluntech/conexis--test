// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import type { ComponentType } from 'react';

import Provider from '@/utils/reduxProvider';

export type RenderPropComponentArgs<T> = {
  Component: ComponentType<any>;
  renderProp: T;
  testId?: string;
};
/**
 * @paramType {object} args
 * @property {ComponentType<any>} Component this can be either a function or class component
 * @property {T} renderProp this is the render props you are passing to the child component the Type is inferred by what is passed to this generic function.
 * @property {string} testId this is an optional test string you expect to find on any of the child components
 * @returns HTMLElement
 */
const renderPropComponentTester = <T,>({
  Component,
  renderProp,
  testId,
}: RenderPropComponentArgs<T>) => {
  render(
    <Provider>
      <Component {...renderProp} />
    </Provider>
  );
  return screen.getByTestId(testId ?? '');
};

export default renderPropComponentTester;
