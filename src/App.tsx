import GlobalStyle from './styles/GlobalStyle';
import PasswordFields from './view/PasswordApp/PasswordApp';
import usePasswordInputs from './hooks/usePasswordInputs/usePasswordInputs';
import useInputFocus from './hooks/useInputFocus/useInputFocus';

const App: React.FC = () => {
  const {
    state,
    handleChange,
    handleCheckbox,
    handleOnClick,
    handleKeyUp,
    handleSubmit,
  } = usePasswordInputs('password');
  const { inputRef } = useInputFocus();

  return (
    <>
      <GlobalStyle />
      <PasswordFields
        state={state}
        handleChange={handleChange}
        inputRef={inputRef}
        handleCheckbox={handleCheckbox}
        handleOnClick={handleOnClick}
        handleKeyUp={handleKeyUp}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
