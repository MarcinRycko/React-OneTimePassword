import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  children,
  isPasswordVisible,
  onChange,
}) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          id={id}
          onChange={onChange}
          defaultChecked={isPasswordVisible}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    </>
  );
};

export default Checkbox;
