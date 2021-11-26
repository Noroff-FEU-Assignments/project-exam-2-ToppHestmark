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

export const iconButton = css`
  font-size: 2.625rem !important;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
