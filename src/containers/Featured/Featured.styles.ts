import styled from 'styled-components/macro';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Container = styled.div`
  padding: 1em 0;
`;

export const TitleRow = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2em;

  @media (min-width: 768px) {
    padding: 0 4em;
    flex-direction: row;
  }
  @media (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 2.5rem;
`;

export const ArrowBox = styled.div`
  display: flex;
  gap: 0.5em;

  @media (max-width: 768px) {
    padding-top: 1.625em;
    justify-content: space-between;
  }
`;

export const ArrowLeft = styled(KeyboardArrowLeftIcon)`
  ${({ theme }) => theme.includes.iconButton};
  border: 0.5px solid ${({ theme }) => theme.colors.gray};
`;

export const ArrowRight = styled(KeyboardArrowRightIcon)`
  ${({ theme }) => theme.includes.iconButton};
  border: 0.5px solid ${({ theme }) => theme.colors.gray};
`;

export const Row = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  overscroll-behavior-x: initial;
  scrollbar-width: none;
  scroll-padding: 0;
  gap: 2em;
  margin: 2em 0;
  padding: 0 2em;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    margin: 2em 4em;
    padding: 0;
  }
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

export const Card = styled.div`
  width: 200px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const Image = styled.div<{ image: string }>`
  width: 200px;
  height: 160px;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    ${({ theme }) => theme.includes.boxShadow}
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 208px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    height: 240px;
  }
`;

export const Hotel = styled.h4`
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1em 0.2em 0.2em 0.2em;
  opacity: 0.85;
`;

export const Caption = styled.p`
  font-weight: 300;
  font-size: 0.975rem;
  padding: 0 0.25em;
`;
export const Price = styled.b`
  color: ${({ theme }) => theme.colors.success};
  font-size: 1.0125rem;
  font-weight: 800;
`;
