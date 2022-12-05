import GlobalStyle from '../styles/GlobalStyle';
import usePasswordInputs from '../hooks/usePasswordInputs/usePasswordInputs';
import useInputFocus from '../hooks/useInputFocus/useInputFocus';
import Button from '../Components/Button/Button';
import Checkbox from '../Components/Checkbox/Checkbox';
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import InputsContainer from '../Components/InputsContainer/InputsContainer';
import { PasswordAppProps } from './types';
import { StyledPasswordApp } from './StyledPasswordApp';

const PasswordApp: React.FC<PasswordAppProps> = ({ password, onSuccess }) => {
  const {
    state,
    state: { isPasswordCorrect, isPasswordVisible, isFormComplete },
    handleChange,
    handleCheckbox,
    handleOnClick,
    handleKeyUp,
    handleSubmit,
  } = usePasswordInputs(password, onSuccess);
  const { inputRef } = useInputFocus();

  return (
    <>
      <GlobalStyle />
      <StyledPasswordApp>
        <InputsContainer
          state={state}
          inputRef={inputRef}
          handleChange={handleChange}
          handleKeyUp={handleKeyUp}
          handleOnClick={handleOnClick}
        />
        <ErrorMessage isPasswordCorrect={isPasswordCorrect} />
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
      </StyledPasswordApp>
    </>
  );
};

export default PasswordApp;
