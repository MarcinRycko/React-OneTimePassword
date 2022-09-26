import { InputsContainerProps } from './types';
import Input from '../Input/Input';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

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
      <StyledWrapper type="inputWrapper">
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
      </StyledWrapper>
    </>
  );
};

export default InputsContainer;
