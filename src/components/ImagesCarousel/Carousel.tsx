import { useRef, useEffect } from 'react';
import Buttons from './Buttons';
import { CarouselWrapper, Slide } from './ImagesCarousel.styles';

interface CarouselProps {
  title: string | undefined;
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
  }, [window.onresize, handleClickPrev, handleClicknext]);

  return (
    <CarouselWrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt={title} key={i} />
        ))}
      </Slide>

      <Buttons
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </CarouselWrapper>
  );
};
export default Carousel;
