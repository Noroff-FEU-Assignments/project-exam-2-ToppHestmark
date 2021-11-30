import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1920px;
  padding: 2em 4em;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 2.5rem;
`;

export const Wrapper = styled.div`
  padding: 2em 0;
  display: flex;
  gap: 2em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div<{ image: string }>`
  width: 100%;
  padding: 2em;
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (min-width: 992px) {
    padding: 4em;
  }
`;

export const InnerTitle = styled.h3`
  font-weight: 400;
  font-size: 3rem;
  padding-bottom: 0.4em;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.5px 1px 2px ${({ theme }) => theme.colors.navy};

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;
