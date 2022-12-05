import { ErrorMessageProps } from './types';
import {
  StyledErrorMessage,
  StyledErrorMessageText,
} from './StyledErrorMessage';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ isPasswordCorrect }) => {
  return (
    <>
      <StyledErrorMessage>
        {isPasswordCorrect === null ? null : (
          <StyledErrorMessageText>
            {!isPasswordCorrect ? 'Passowrd is incorrect' : null}
          </StyledErrorMessageText>
        )}
      </StyledErrorMessage>
    </>
  );
};

export default ErrorMessage;
