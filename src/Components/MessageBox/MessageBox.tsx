import { MessageBoxProps } from './BoxMessage';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

const MessageBox: React.FC<MessageBoxProps> = ({ isPasswordCorrect }) => {
  return (
    <>
      <StyledWrapper>
        {isPasswordCorrect === null ? null : (
          <span>
            {isPasswordCorrect === false
              ? 'Passowrd is incorrect'
              : 'Password is correct'}
          </span>
        )}
      </StyledWrapper>
    </>
  );
};

export default MessageBox;
