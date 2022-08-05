type TInputDataElement = {
  index: number;
  value: string;
  isDisabled: boolean;
};

type TState = {
  password: string;
  inputData: TInputDataElement[];
  isPasswordVisible: boolean;
  isFormComplete: boolean;
  isPasswordCorrect: boolean | null;
  activeElement: number;
};

type InputsBoxProps = {
  state: TState;
  activeElement: number;
  handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number): void;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  handleOnClick(e: React.MouseEvent<HTMLElement>): void;
  handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void;
};

export { InputsBoxProps };
