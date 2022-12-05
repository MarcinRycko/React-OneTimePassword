import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 250px;
  padding: 10px;
  margin: 20px 5px 5px;
  border: none;
  border-radius: 0.25rem;
  background-color: gray;
  color: #f3f3f3;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px gray;
  }
  &:disabled {
    cursor: auto;
    background-color: lightgray;
    &:hover {
      box-shadow: none;
    }
  }
`;

export { StyledButton };
