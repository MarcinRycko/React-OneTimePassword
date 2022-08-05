import { useReducer, useRef, useEffect } from 'react';
import reducer from './reducer';

const initialState = {
  password: '',
  inputData: [],
  isPasswordVisible: false,
  isFormComplete: false,
  isPasswordCorrect: null,
  activeElement: 0,
};

const useReduce = (password: string) => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: e.target.value,
      index: index,
    });
  };

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch({
      type: 'HANDLE_ONCLICK',
      id: e.currentTarget.id,
    });
  };

  const handleCheckbox = () => {
    dispatch({
      type: 'HANDLE_CHECKBOX',
    });
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch({
      type: 'PREV_ITEM',
      inputLength: e.target.value.length,
      keyCode: e.keyCode,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    dispatch({
      type: 'SUBMIT',
      event: e,
    });
  };

  useEffect(() => {
    dispatch({
      type: 'INITIATE_STATE',
      password: password,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: 'IS_FORM_COMPLETE',
    });
    dispatch({ type: 'NEXT_ITEM' });
  }, [state.inputData]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  });

  return {
    state,
    handleChange,
    handleOnClick,
    handleCheckbox,
    handleKeyUp,
    handleSubmit,
    inputRef,
  };
};

export default useReduce;
