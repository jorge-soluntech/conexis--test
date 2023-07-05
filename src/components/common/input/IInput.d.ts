declare namespace IInput {
  export interface IProps {
    /** The title parameter */
    icon?: string;
    inputLabel?: string;
    isLabel?: boolean;
    labelColor?: string;
    inputWidth: string;
    inputHeight: string;
    inputColor?: string;
    inputBackground?: string;
    borderColor?: string;
    inputBorderRadius?: string;
    inputFontSize?: string;
    type: 'text' | 'password' | 'email';
    id: string;
    onChange?: (string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    register?: any;
    placeholder?: string;
    rules?: any;
  }
}

export { IInput };
