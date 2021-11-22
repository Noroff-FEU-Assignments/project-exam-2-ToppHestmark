import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40vh;
`;

export const HeaderText = styled.h1`
  font-weight: 400;
  font-size: 3.75rem;

  @media screen and (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const SubTitle = styled.p`
  padding: 0.3em 0;
  font-size: 1.1rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 0.975rem;
  }
`;
