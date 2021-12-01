import { useState } from 'react';
import { RoomType } from '../../types/roomType';
import {
  Container,
  ArrowLeft,
  ArrowRight,
  ImageWrap,
  Image,
} from './ImageSlider.styles';

interface ImagesSliderProps {
  room: RoomType | undefined;
}

// Big thanks Brian for showing us how to make a image slide
// Ref: https://www.youtube.com/watch?v=l1MYfu5YWHc

const ImageSlider: React.FC<ImagesSliderProps> = ({ room }) => {
  const [current, setCurrent] = useState<number>(0);

  const images: any[] = [
    { image: room?.image_01 },
    { image: room?.image_02 },
    { image: room?.image_03 },
    { image: room?.image_04 },
  ];
  const length = images.length;

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <Container>
      <ArrowLeft onClick={prevSlide} />
      <ArrowRight onClick={nextSlide} />
      {images?.map((img, idx) => (
        <ImageWrap key={idx} index={idx} current={current}>
          {idx === current && <Image src={img.image} alt={room?.Title} />}
        </ImageWrap>
      ))}
    </Container>
  );
};

export default ImageSlider;
