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

type PasswordAppProps = {
  state: TState;
  handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number): void;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  handleCheckbox(): void;
  handleOnClick(e: React.MouseEvent<HTMLElement>): void;
  handleSubmit(e: React.SyntheticEvent): void;
  handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void;
};

export { PasswordAppProps, TState };
