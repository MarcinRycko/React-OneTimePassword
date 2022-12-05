import styled from 'styled-components';

const StyledInput = styled.input<{ disabled?: boolean }>`
  width: 20px;
  height: 20px;
  border: solid grey 2px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};
  font-size: 15px;
  color: grey;
  text-align: center;

  @media only screen and (min-width: 566px) {
    width: 30px;
    height: 30px;
    font-size: 22px;
  }
  @media only screen and (min-width: 1024px) {
    width: 40px;
    height: 40px;
    font-size: 30px;
  }

  &:focus {
    color: black;
  }
`;

export default StyledInput;
