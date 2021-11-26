import { css } from 'styled-components';

export const boxShadow = css`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const layoutSpacing = css`
  padding: 0 2em;
  margin: 0 auto;
  max-width: 1920px;

  @media screen and (max-width: 768px) {
    padding: 0 1em;
  }
`;
