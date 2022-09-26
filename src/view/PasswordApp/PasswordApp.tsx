import Button from '../../Components/Button/Button';
import { PasswordAppProps } from './types';
import { StyledWrapper } from '../../Components/Wrapper/StyledWrapper';
import Checkbox from '../../Components/Checkbox/Checkbox';
import MessageContainer from '../../Components/MessageContainer/MessageContainer';
import InputsContainer from '../../Components/InputsContainer/InputsContainer';

const PasswordApp: React.FC<PasswordAppProps> = ({
  state,
  handleChange,
  inputRef,
  handleCheckbox,
  handleOnClick,
  handleKeyUp,
  handleSubmit,
  state: { isPasswordVisible, isFormComplete, isPasswordCorrect },
}) => {
  return (
    <>
      <StyledWrapper type="formWrapper">
        <MessageContainer isPasswordCorrect={isPasswordCorrect} />
        <InputsContainer
          state={state}
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
