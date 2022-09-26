type TState = {
  password: string;
  inputsQuantity: number;
  activeInputsIndexes: number[];
  activeInputsState: string[];
  isPasswordVisible: boolean;
  isFormComplete: boolean;
  isPasswordCorrect: boolean | null;
  activeElement: number;
};

type PasswordAppProps = {
  state: TState;
  inputRef?: React.ForwardedRef<HTMLInputElement>;
  handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number): void;
  handleCheckbox(): void;
  handleOnClick(e: React.MouseEvent<HTMLElement>): void;
  handleSubmit(e: React.SyntheticEvent): void;
  handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>): void;
};

export { PasswordAppProps, TState };
