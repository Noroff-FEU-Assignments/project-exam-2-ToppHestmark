import styled from 'styled-components/macro';
import { ButtonPrimaryLight } from '../../styles/Button/Button.styles';

export const Container = styled.div<{ image: string }>`
  width: 100%;
  min-height: 500px;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    filter: sepia(20%);
  }

  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
    background-image: url(${({ image }) => image});
    background-position: center;
    background-size: cover;
  }

  @media screen and (min-width: 992px) {
    padding: 0 4em;

    img {
      overflow-y: hidden;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  @media screen and (min-width: 1920px) {
    ${({ theme }) => theme.includes.layoutSpacing}
    width: 100%;
  }
`;

export const Box = styled.div`
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 400;
  padding-bottom: 1em;

  @media screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;

export const Button = styled(ButtonPrimaryLight)`
  min-width: 200px;
`;
