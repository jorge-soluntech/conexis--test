declare namespace TInput {
  type Component = {
    name: string;
    label: string;
    placeholder: string;
    aditionalInfo?: JSX.Element;
    numberOfColumns?: 1 | 2;
    type?: InputTypes;
    options?: TOptions[];
    required?: boolean;
    errorMsg?: string;
  } & (
    | {
        type: 'select';
        options: TOptions[]; // options is required when type is 'select'
      }
    | ({
        type?: Exclude<InputTypes, 'select'>;
      } & (
        | {
            required?: true;
            errorMsg: string;
          }
        | {
            required?: false;
            errorMsg?: string;
          }
      ))
  );
  type Hook = {
    numberOfColumns: number;
    type: InputTypes;
    required: boolean | undefined;
    errorMsg: string;
  };
  type InputTypes =
    | 'text'
    | 'email'
    | 'phone'
    | 'date'
    | 'select'
    | 'textArea'
    | 'multiSelect';
  type TOptions = {
    label: string;
    value: string | boolean | number;
  };
}

export { TInput };
