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

type TAction =
  | { type: 'INPUT_CHANGE'; value: string; index: number }
  | { type: 'HANDLE_ONCLICK'; id: string }
  | { type: 'HANDLE_CHECKBOX' }
  | {
      type: 'PREV_ITEM';
      inputLength: number;
      keyCode: number;
    }
  | { type: 'SUBMIT'; event: React.SyntheticEvent }
  | { type: 'IS_FORM_COMPLETE' }
  | { type: 'NEXT_ITEM' }
  | { type: 'INITIATE_STATE'; password: string };

export { TState, TAction };
