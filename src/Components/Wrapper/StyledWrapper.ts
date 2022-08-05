import styled, { css } from 'styled-components';

const StyledWrapper = styled.div<{ type?: string }>`
  ${(props) => {
    switch (props.type) {
      case 'inputWrapper':
        return css`
          width: 100%;
          min-width: 500px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 30px;
          margin-bottom: 20px;
        `;
      case 'formWrapper':
        return css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `;
      default:
        return css``;
    }
  }}
`;

export { StyledWrapper };
