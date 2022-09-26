import { MessageContainerProps } from './types';

const MessageContainer: React.FC<MessageContainerProps> = ({
  isPasswordCorrect,
}) => {
  return (
    <>
      {isPasswordCorrect === null ? null : (
        <span>
          {isPasswordCorrect === false
            ? 'Passowrd is incorrect'
            : 'Password is correct'}
        </span>
      )}
    </>
  );
};

export default MessageContainer;
