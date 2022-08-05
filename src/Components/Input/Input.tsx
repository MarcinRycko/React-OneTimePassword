import StyledInput from './StyledInput';
import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      inputData: { value, index, isDisabled },
      state: { isPasswordVisible },
      onChange,
      handleOnClick,
      handleKeyUp,
    },
    ref
  ) => {
    return (
      <>
        {
          <StyledInput
            value={value}
            maxLength={1}
            onClick={handleOnClick}
            type={isPasswordVisible ? 'text' : 'password'}
            ref={ref}
            onChange={onChange}
            id={`${index}`}
            onKeyUp={handleKeyUp}
            disabled={isDisabled}
          />
        }
      </>
    );
  }
);

export default Input;
