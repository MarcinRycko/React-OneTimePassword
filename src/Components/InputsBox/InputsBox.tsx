import { InputsBoxProps } from './types';
import Input from '../Input/Input';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

const InputsBox: React.FC<InputsBoxProps> = ({
  state,
  state: { inputData },
  activeElement,
  inputRef,
  handleChange,
  handleKeyUp,
  handleOnClick,
}) => {
  return (
    <>
      <StyledWrapper type="inputWrapper">
        {inputData.map((el, index) => {
          return (
            <Input
              inputData={el}
              state={state}
              ref={index === activeElement ? inputRef : null}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index)
              }
              handleOnClick={handleOnClick}
              handleKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyUp(e)
              }
              key={index}
            />
          );
        })}
      </StyledWrapper>
    </>
  );
};

export default InputsBox;
