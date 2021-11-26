import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  overscroll-behavior-x: initial;
  scrollbar-width: none;
  scroll-padding: 0;
  margin: 0 4em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 320px;
  margin: 0.5em;
`;

export const Image = styled.div<{ image: string }>`
  width: 400px;
  height: 320px;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
