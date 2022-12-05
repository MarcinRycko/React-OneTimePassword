import { InputsContainerProps } from './types';
import Input from '../Input/Input';
import { StyledInputContainer } from './StyledInputsContainer';

const InputsContainer: React.FC<InputsContainerProps> = ({
  state: {
    inputsQuantity,
    activeInputsIndexes,
    activeInputsState,
    isPasswordVisible,
    activeElement,
  },
  inputRef,
  handleChange,
  handleKeyUp,
  handleOnClick,
}) => {
  return (
    <>
      <StyledInputContainer>
        {[...new Array(inputsQuantity)].map((_, index) => {
          const activeInputIndex = activeInputsIndexes.indexOf(index);

          if (!activeInputsIndexes.includes(index))
            return <Input isDisabled={true} key={index} />;

          return (
            <Input
              key={index}
              isDisabled={false}
              value={activeInputsState[activeInputIndex]}
              id={`${activeInputIndex}`}
              isPasswordVisible={isPasswordVisible}
              ref={activeInputIndex === activeElement ? inputRef : null}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, activeInputIndex)
              }
              handleOnClick={handleOnClick}
              handleKeyUp={handleKeyUp}
            />
          );
        })}
      </StyledInputContainer>
    </>
  );
};

export default InputsContainer;
