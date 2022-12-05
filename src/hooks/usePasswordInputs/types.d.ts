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

type TAction =
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'GENERATE_INPUTS_QUANTITY'; payload: number }
  | { type: 'GENERATE_ACTIVE_INPUTS_INDEXES'; payload: number[] }
  | { type: 'GENERATE_ACTIVE_INPUTS_STATE'; payload: string[] }
  | { type: 'INPUT_CHANGE'; payload: { value: string; index: number } }
  | { type: 'HANDLE_ONCLICK'; payload: string }
  | { type: 'HANDLE_CHECKBOX' }
  | {
      type: 'PREV_ITEM';
      payload: { inputLength: number; keyCode: number };
    }
  | { type: 'NEXT_ITEM' }
  | { type: 'IS_FORM_COMPLETE'; payload: boolean }
  | {
      type: 'SUBMIT';
      payload: boolean;
    };

export { TState, TAction };
