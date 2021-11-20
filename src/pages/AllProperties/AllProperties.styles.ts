import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  padding: 1.25em 0;
  display: grid;
  grid-template-columns: 32% 65%;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.h4`
  font-size: 1.625rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const PriceTag = styled.div`
  display: flex;
  justify-content: flex-end;

  h3 {
    font-weight: 500;
    font-size: 1.4rem;
  }

  p {
    margin-top: 0.25em;
  }
`;

export const Slash = styled.div`
  font-size: 1.4rem;
  font-weight: 100;
  padding: 0 0.15em;
`;

export const BoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Included = styled.p<{ show: boolean }>`
  color: ${({ theme }) => theme.colors.success};
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-size: 0.875rem;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const LinkButton = styled.button`
  padding: 0.625em 1em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_light};
  }
`;
