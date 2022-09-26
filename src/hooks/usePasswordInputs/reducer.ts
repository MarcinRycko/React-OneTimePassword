import { Reducer } from 'react';
import { TState, TAction } from './types';

const reducer: Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'GENERATE_INPUTS_QUANTITY':
      return {
        ...state,
        inputsQuantity: action.payload,
      };

    case 'GENERATE_ACTIVE_INPUTS_INDEXES':
      return { ...state, activeInputsIndexes: action.payload };

    case 'GENERATE_ACTIVE_INPUTS_STATE':
      return { ...state, activeInputsState: action.payload };

    case 'INPUT_CHANGE':
      const { value, index } = action.payload;
      state.activeInputsState[index] = value;
      return { ...state };

    case 'HANDLE_CHECKBOX':
      return {
        ...state,
        isPasswordVisible: !state.isPasswordVisible,
      };

    case 'HANDLE_ONCLICK':
      return {
        ...state,
        activeElement: parseInt(action.payload),
      };

    case 'IS_FORM_COMPLETE':
      return {
        ...state,
        isFormComplete: action.payload,
      };

    case 'SUBMIT':
      return {
        ...state,
        isPasswordCorrect: action.payload,
      };

    case 'NEXT_ITEM':
      const newActiveElement = state.activeInputsState.findIndex(
        (el) => el === ''
      );
      return {
        ...state,
        activeElement: newActiveElement,
      };

    case 'PREV_ITEM':
      const { inputLength, keyCode } = action.payload;
      if (keyCode === 8 && inputLength === 0) {
        const activeElements = state.activeInputsState.filter(
          (el) => el !== ''
        );
        const newActiveElement = state.activeInputsState.lastIndexOf(
          activeElements[activeElements.length - 1]
        );
        return {
          ...state,
          activeElement: newActiveElement,
        };
      }
      return { ...state };

    default:
      throw new Error();
  }
};

export default reducer;
