import StyledInput from './StyledInput';
import React from 'react';
import { InputProps } from './types';

const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      isDisabled,
      value,
      id,
      isPasswordVisible,
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
            id={id}
            onKeyUp={handleKeyUp}
            disabled={isDisabled}
          />
        }
      </>
    );
  }
);

export default Input;
