import { Reducer } from 'react';
import { TState, TAction } from './types';
import Validator from '../utils/validator';
import Randomizer from '../utils/randomizer';

const reducer: Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      const { value, index } = action;
      return {
        ...state,
        inputData: [
          ...state.inputData.slice(0, index),
          { ...state.inputData[index], value: value },
          ...state.inputData.slice(index + 1),
        ],
      };

    case 'SUBMIT':
      const { event } = action;
      event.preventDefault();
      const isPasswordCorrect = Validator.isPasswordCorrect(
        state.password,
        state.inputData
      );
      return {
        ...state,
        isPasswordCorrect: isPasswordCorrect,
      };

    case 'HANDLE_ONCLICK':
      const { id } = action;
      return {
        ...state,
        activeElement: parseInt(id),
      };

    case 'HANDLE_CHECKBOX':
      return {
        ...state,
        isPasswordVisible: !state.isPasswordVisible,
      };

    case 'PREV_ITEM':
      const { keyCode, inputLength } = action;
      if (keyCode === 8 && inputLength === 0) {
        const activeElements = state.inputData.filter(
          (el) => el.value !== '' && el.isDisabled === false
        );
        const newActiveElement = state.inputData.lastIndexOf(
          activeElements[activeElements.length - 1]
        );
        return {
          ...state,
          activeElement: newActiveElement,
        };
      }
      return { ...state };

    case 'NEXT_ITEM':
      const newActiveElement = state.inputData.findIndex((el) => {
        return el.value === '' && el.isDisabled === false;
      });
      return {
        ...state,
        activeElement: newActiveElement,
      };

    case 'INITIATE_STATE':
      const { password } = action;
      const disabledInputIndexes = Randomizer.getDisabledInputIndexes(password);
      const inputsDataLength =
        disabledInputIndexes[disabledInputIndexes.length - 1];
      const inputData = [...new Array(inputsDataLength)].map((_, i) => {
        return {
          index: i,
          value: '',
          isDisabled: disabledInputIndexes.includes(i) ? true : false,
        };
      });
      return {
        ...state,
        password: password,
        inputData: inputData,
      };

    case 'IS_FORM_COMPLETE':
      return {
        ...state,
        isFormComplete: Validator.isFormComplete(state.inputData),
      };

    default:
      throw new Error();
  }
};

export default reducer;
