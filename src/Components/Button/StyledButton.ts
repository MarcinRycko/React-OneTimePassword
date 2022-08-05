import styled from 'styled-components';

const StyledButton = styled.button`
  width: 250px;
  border: none;
  padding: 10px;
  margin: 5px;
  display: block;
  text-decoration: none;
  background-color: gray;
  color: #f3f3f3;
  text-align: center;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 20px;
  &:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px gray;
  }
  &:disabled {
    background-color: lightgray;
    cursor: auto;
    &:hover {
      box-shadow: none;
    }
  }
`;

export { StyledButton };
