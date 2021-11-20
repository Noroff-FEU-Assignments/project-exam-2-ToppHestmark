import ArrowLeft from '../../assets/icons/arrow_left.svg';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import { Button } from './ImagesCarousel.styles';

const Buttons = ({ handleClickPrev, handleClicknext }) => {
  return (
    <>
      <Button src={ArrowLeft} side="prev" onClick={handleClickPrev} />
      <Button src={ArrowRight} side="next" onClick={handleClicknext} />
    </>
  );
};
export default Buttons;
