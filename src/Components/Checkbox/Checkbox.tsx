import { CheckboxProps } from './types';
import { StyledWrapper } from '../Wrapper/StyledWrapper';

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  children,
  isPasswordVisible,
  onChange,
}) => {
  return (
    <>
      <StyledWrapper>
        <input
          type="checkbox"
          id={id}
          onChange={onChange}
          defaultChecked={isPasswordVisible}
        />
        <label htmlFor={id}>{children}</label>
      </StyledWrapper>
    </>
  );
};

export default Checkbox;
