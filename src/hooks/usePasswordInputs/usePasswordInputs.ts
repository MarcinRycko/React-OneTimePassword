import { useReducer, useEffect } from 'react';
import Randomizer from '../../utils/randomizer';
import Validator from '../../utils/validator';
import reducer from './reducer';
import initialState from './initialState';

const usePasswordInputs = (password: string, onSuccess: () => void) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { value: e.target.value, index: index },
    });
    dispatch({ type: 'NEXT_ITEM' });
  };

  const handleCheckbox = () => {
    dispatch({
      type: 'HANDLE_CHECKBOX',
    });
  };

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch({
      type: 'HANDLE_ONCLICK',
      payload: e.currentTarget.id,
    });
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch({
      type: 'PREV_ITEM',
      payload: { inputLength: e.target.value.length, keyCode: e.keyCode },
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      Validator.isPasswordCorrect(
        state.password,
        state.activeInputsState,
        state.activeInputsIndexes
      )
    ) {
      onSuccess();
    }
    dispatch({
      type: 'SUBMIT',
      payload: Validator.isPasswordCorrect(
        state.password,
        state.activeInputsState,
        state.activeInputsIndexes
      ),
    });
  };

  useEffect(() => {
    dispatch({
      type: 'SET_PASSWORD',
      payload: password,
    });
    dispatch({
      type: 'GENERATE_INPUTS_QUANTITY',
      payload: password.length + Randomizer.getRandomInt(2, 6),
    });
    dispatch({
      type: 'GENERATE_ACTIVE_INPUTS_INDEXES',
      payload: Randomizer.getActiveInputsIndexes(password),
    });
  }, [password]);

  useEffect(() => {
    dispatch({
      type: 'GENERATE_ACTIVE_INPUTS_STATE',
      payload: [...new Array(state.activeInputsIndexes.length)].fill(''),
    });
  }, [state.activeInputsIndexes]);

  useEffect(() => {
    dispatch({
      type: 'IS_FORM_COMPLETE',
      payload: Validator.isFormComplete(state.activeInputsState),
    });
  }, [JSON.stringify(state.activeInputsState)]);

  return {
    state,
    handleChange,
    handleOnClick,
    handleCheckbox,
    handleKeyUp,
    handleSubmit,
  };
};

export default usePasswordInputs;
