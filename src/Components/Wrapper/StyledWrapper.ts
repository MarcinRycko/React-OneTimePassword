import styled, { css } from 'styled-components';

const StyledWrapper = styled.form<{ type?: string }>`
  ${(props) => {
    switch (props.type) {
      case 'inputWrapper':
        return css`
          display: flex;
          justify-content: flex-start;
          align-content: center;
          flex-wrap: wrap;
          gap: 5px;
          width: 100%;
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
