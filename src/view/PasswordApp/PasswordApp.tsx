import React from 'react';
import Button from '../../Components/Button/Button';
import { PasswordAppProps } from './types';
import { StyledWrapper } from '../../Components/Wrapper/StyledWrapper';
import Checkbox from '../../Components/Checkbox/Checkbox';
import MessageBox from '../../Components/MessageBox/MessageBox';
import InputsBox from '../../Components/InputsBox/InputsBox';

const PasswordApp: React.FC<PasswordAppProps> = ({
  state,
  handleChange,
  inputRef,
  handleCheckbox,
  handleOnClick,
  handleKeyUp,
  handleSubmit,
  state: {
    activeElement,
    isPasswordVisible,
    isFormComplete,
    isPasswordCorrect,
  },
}) => {
  return (
    <>
      <StyledWrapper type="formWrapper">
        <MessageBox isPasswordCorrect={isPasswordCorrect} />
        <InputsBox
          state={state}
          activeElement={activeElement}
          inputRef={inputRef}
          handleChange={handleChange}
          handleKeyUp={handleKeyUp}
          handleOnClick={handleOnClick}
        />
        <Checkbox
          id="isPasswordVisible"
          onChange={handleCheckbox}
          isPasswordVisible={isPasswordVisible}
        >
          Show password
        </Checkbox>
        <Button disabled={isFormComplete} onClick={handleSubmit}>
          Login In
        </Button>
      </StyledWrapper>
    </>
  );
};

export default PasswordApp;
