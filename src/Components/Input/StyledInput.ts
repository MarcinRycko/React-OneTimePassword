import styled from 'styled-components';

const StyledInput = styled.input<{ disabled?: boolean }>`
  width: 40px;
  height: 40px;
  font-size: 30px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  border: solid grey 2px;
  color: grey;

  &:focus {
    color: black;
  }
`;

export default StyledInput;
