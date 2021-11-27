import { useState } from 'react';
import Carousel from './Carousel';
import { RoomType } from '../../types/roomType';
import { Container } from './ImagesCarousel.styles';

// Ref: https://medium.com/suyeonme/react-how-to-build-an-image-slider-with-hooks-in-react-decd4a3ab152
interface ImagesCarouselProps {
  room: RoomType | undefined;
}

const ImagesCarousel: React.FC<ImagesCarouselProps> = ({ room }) => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const images: any[] = [
    room?.image_01,
    room?.image_02,
    room?.image_03,
    room?.image_04,
  ];

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClicknext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    <Container>
      <Carousel
        title={room?.Title}
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Container>
  );
};

export default ImagesCarousel;
