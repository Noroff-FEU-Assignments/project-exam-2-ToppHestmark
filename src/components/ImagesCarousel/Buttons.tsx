import styled from 'styled-components/macro';
import ArrowLeft from '../../assets/icons/arrow_left.svg';
import ArrowRight from '../../assets/icons/arrow_right.svg';

const Button = styled.img<{ side: string }>`
  position: absolute;
  top: 50%;
  z-index: 5;
  cursor: pointer;
  scale: 2.5;
  transform: translateY(-45%);
  left: ${(props) => props.side === 'prev' && 5}px;
  right: ${(props) => props.side === 'next' && 5}px;
`;

const Buttons = ({ handleClickPrev, handleClicknext }) => {
  return (
    <>
      <Button src={ArrowLeft} side="prev" onClick={handleClickPrev} />
      <Button src={ArrowRight} side="next" onClick={handleClicknext} />
    </>
  );
};
export default Buttons;
