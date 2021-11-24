import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 2em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const DateText = styled.small`
  color: ${({ theme }) => theme.colors.ghost};
  font-size: 0.875rem;
  font-weight: 300;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.625rem;
`;

export const Row = styled.div`
  display: flex;
  padding: 0.1em 0;
`;

export const FrontText = styled.small`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ghost};
`;

export const UserDetail = styled.p`
  font-size: 1.0125rem;
  font-weight: 400;
  padding: 0 0.4em;
  margin-top: -0.2em;
`;

export const MessageBox = styled.p`
  padding: 1em 0;
  font-size: 1.125rem;
  font-weight: 300;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;
