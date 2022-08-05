type InputProps = {
  inputData: TInputDataElement;
  ref?: React.ForwardedRef<HTMLInputElement>;
  state: TState;
  onChange(e: React.ChangeEvent<HTMLInputElement>, i?: number): void;
  handleOnClick(e: React.MouseEvent<HTMLElement>): void;
  handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void;
};

type TState = {
  password: string;
  inputData: TInputDataElement[];
  isPasswordVisible: boolean;
  isFormComplete: boolean;
  isPasswordCorrect: boolean | null;
  activeElement: number;
};

type TInputDataElement = {
  index: number;
  value: string;
  isDisabled: boolean;
};

export { InputProps };
