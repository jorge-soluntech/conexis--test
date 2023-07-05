import type { FormInstance, RuleObject } from 'antd/es/form';

const useFormPostJob = () => {
  const configItem = (
    textError: string,
    fields: any,
    formInstance?: FormInstance,
    type?: any,
    validatorEmptyAllFields?: any
  ) => ({
    rules: [
      {
        type,
        required: true,
        validator: (_: RuleObject, value: string) => {
          const emptyAllMandatories = Object.values(
            formInstance?.getFieldsValue(fields)
          );
          return validatorEmptyAllFields(value, textError, emptyAllMandatories);
        },
      },
    ],
  });
  return { configItem };
};

export default useFormPostJob;
