type InputProps = {
  isDisabled: boolean;
  id?: string;
  value?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  isPasswordVisible?: boolean;
  onChange?(e: React.ChangeEvent<HTMLInputElement>, i?: number): void;
  handleOnClick?(e: React.MouseEvent<HTMLElement>): void;
  handleKeyUp?(e: React.KeyboardEvent<HTMLInputElement>): void;
};

export { InputProps };
