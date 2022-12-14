import { ButtonProps } from './types';
import { StyledButton } from './StyledButton';

const Button: React.FC<ButtonProps> = ({ disabled, onClick, children }) => {
  return (
    <>
      <StyledButton disabled={!disabled} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
