import { useRef, useEffect } from 'react';

const useInputFocus = () => {
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  });

  return { inputRef };
};

export default useInputFocus;
