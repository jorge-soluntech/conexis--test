import type { Rule } from 'antd/es/form';

import usePhoneNumber from '@/components/hooks/usePhoneNumber';
import useValidateFields from '@/components/hooks/useValidateFields';

import type { TInput } from './Inputs';

/** Custom hook to handle the logic in the CustomInput component
 * @returns the number of columns, the rules and custom classNames
 */
export const useInput = ({
  numberOfColumns,
  type,
  required,
  errorMsg,
}: TInput.Hook) => {
  const { onChangePhoneNumber } = usePhoneNumber();

  const columnsWidthBySize = {
    lg: numberOfColumns === 1 ? 12 : 24,
    sm: 24,
    xs: 24,
    md: numberOfColumns === 1 ? 12 : 24,
  };

  const {
    ruleValidator,
    emptyFieldValidator,
    emailFieldValidator,
    phoneFieldValidator,
    multiSelectValidator,
  } = useValidateFields();

  let rules: Rule[] | undefined;
  let className = '';
  let getValueFromEvent: ((...args: any) => any) | undefined;

  if (type === 'email') {
    rules = [ruleValidator(false, 'email', emailFieldValidator, errorMsg)];
  }
  if ((type === 'text' || type === 'select') && required) {
    rules = [ruleValidator(true, 'string', emptyFieldValidator, errorMsg)];
  }
  if (type === 'phone') {
    rules = [ruleValidator(false, 'string', phoneFieldValidator, errorMsg)];
    getValueFromEvent = onChangePhoneNumber;
  }
  if (type === 'multiSelect') {
    rules = [ruleValidator(true, 'string', multiSelectValidator, errorMsg)];
    className = 'form_item';
  }

  return {
    rules,
    columnsWidthBySize,
    getValueFromEvent,
    className,
  };
};
