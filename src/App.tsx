import GlobalStyle from './assets/GlobalStyle';
import PasswordFields from './view/PasswordApp/PasswordApp';
import useReduce from './hooks/usePasswordInputs';

const App: React.FC = () => {
  const {
    state,
    handleChange,
    inputRef,
    handleCheckbox,
    handleOnClick,
    handleKeyUp,
    handleSubmit,
  } = useReduce('password');

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
