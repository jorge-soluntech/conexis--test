/* eslint-disable testing-library/no-node-access */
import { fireEvent } from '@testing-library/react';

import renderPropComponentTester from '@/utils/testUtils/mockRenderPropComponent';

import Dots from './Dots';
import type { IDots } from './IDots';

jest.mock(
  '../../tableComponent/rowActionComponents/RowActionWrapper',
  () => 'RowActionWrapper'
);

describe('render row action Dots and action menu', () => {
  test('Once clicked a dropdown is shown and the "Delete" action is expected to be in the menu options', () => {
    // Create mock render props
    const item: any = {
      jobId: 'jobId',
      status: 'Template',
      dropdownVisible: true,
      handleModalDispatch: jest.fn(),
      handleDropdownVisibleChange: jest.fn(),
    };

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const result = renderPropComponentTester<IDots.IProps>({
      Component: Dots,
      renderProp: item,
      testId: 'threeDotsSvg',
    });

    fireEvent.click(result);
    const foo = document.querySelector('.ant-dropdown');
    const deleteSpan = foo?.querySelector(
      'span.ant-dropdown-menu-title-content span'
    );

    expect(deleteSpan?.textContent).toBe('Delete');
    expect(result).toBeInTheDocument();
  });
});
