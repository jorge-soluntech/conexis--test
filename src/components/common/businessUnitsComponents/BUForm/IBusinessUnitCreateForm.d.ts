declare namespace IBusinessUnitCreateForm {
  export interface IProps {
    showError: boolean;
    messageError: string;
    setShowError: Function;
    onSubmit: Function | Promise;
    clearInformationFields: Function | Promise;
    clearOwnerFields: Function | Promise;
    phoneError: boolean;
    create: boolean;
    emailValidationRules: {
      required?: boolean | undefined;
      type?: RuleType | undefined;
      validator: (_: RuleObject, value: string) => Promise<void>;
    }[];
    numberValidationRules: {
      required?: boolean | undefined;
      type?: RuleType | undefined;
      validator: (_: RuleObject, value: string) => Promise<void>;
    }[];
    phoneValidationRules: {
      required?: boolean | undefined;
      type?: RuleType | undefined;
      validator: (_: RuleObject, value: string) => Promise<void>;
    }[];
    form: FormInstance<any>;
    loading: boolean;
  }
}

export { IBusinessUnitCreateForm };
