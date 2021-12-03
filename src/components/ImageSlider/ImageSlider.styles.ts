import styled from 'styled-components/macro';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageWrapProps {
  index: number;
  current: number;
}

export const Container = styled.section`
  height: 100%;
  position: relative;
  ${({ theme }) => theme.includes.flexCenter}
`;

export const ArrowLeft = styled(ArrowBackIosIcon)`
  ${({ theme }) => theme.includes.iconButton}
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 45%;
  left: 28px;
  bottom: 55%;
  user-select: none;
`;

export const ArrowRight = styled(ArrowForwardIosIcon)`
  ${({ theme }) => theme.includes.iconButton}
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  z-index: 2;
  top: 45%;
  right: 28px;
  bottom: 55%;
  user-select: none;
`;

const slide = `
  opacity: 0.6;
  transition-duration: 0.75s ease;
  scale: 0.99;
`;

const slideActive = `
  opacity: 1;
  transition-duration: 0.75s;
  transform: scale(1.00);
`;

export const ImageWrap = styled.div<ImageWrapProps>`
  width: fit-content;
  ${({ index, current }) => (index === current ? slideActive : slide)}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
