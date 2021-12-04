import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 2em;
  margin: 4em 4em;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media screen and (max-width: 992px) {
    margin: 4em;
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 768px) {
    margin: 3em 2em;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1920px) {
    margin: 4em auto;
    width: 1920px;
  }
`;

export const Left = styled.div`
  flex: 0.5;
  padding: 1em;
  text-align: center;
  ${({ theme }) => theme.includes.flexCenter}
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 3em;
  }
`;

export const TopText = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  opacity: 0.85;
`;

export const Title = styled.h3`
  padding: 0.2em 0;
  font-size: 4rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    padding: 0.7em 0;
    font-size: 3rem;
  }
`;

export const Right = styled.div`
  flex: 0.5;
  ${({ theme }) => theme.includes.flexCenter}

  img {
    width: 100%;
    max-width: 500px;
    padding: 2em;
    aspect-ratio: 1/1;
    height: auto;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
      padding: 1em;
    }
  }
`;
