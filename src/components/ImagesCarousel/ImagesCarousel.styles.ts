import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1em 0;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Slide = styled.div<{ xPosition: number }>`
  width: 100%;
  display: flex;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => `translateX(${props.xPosition}px)`};
  aspect-ratio: 5/4;

  ${({ theme }) => theme.includes.boxShadow}

  * img {
    width: 100%;
    height: auto;
  }
`;

export const Button = styled.img<{ side: string }>`
  position: absolute;
  top: 50%;
  z-index: 5;
  cursor: pointer;
  scale: 2.5;
  transform: translateY(-50%);
  left: ${(props) => props.side === 'prev' && 5}px;
  right: ${(props) => props.side === 'next' && 5}px;
`;
