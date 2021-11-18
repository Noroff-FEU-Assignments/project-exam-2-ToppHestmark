import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';
import { boxShadow } from '../../styles/mixins';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${boxShadow}
`;

const Slide = styled.div<{ xPosition: number }>`
  display: flex;
  width: 100%;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => `translateX(${props.xPosition}px)`};
  aspect-ratio: 5/4;

  * img {
    width: 100%;
    height: 100%;
  }
`;

interface CarouselProps {
  title: string;
  images: any[];
  setWidth: (width) => void;
  xPosition: number;
  handleClickPrev: () => void;
  handleClicknext: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  title,
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) => {
  const slideRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    if (slideRef.current) {
      const width: number = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [window.onresize, setWidth]);

  return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt={title} key={i} />
        ))}
      </Slide>

      <Buttons
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
};
export default Carousel;
