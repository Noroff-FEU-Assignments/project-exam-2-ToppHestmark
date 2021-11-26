import styled from 'styled-components/macro';
import { ButtonPrimaryLight } from '../../styles/Button/Button.styles';
import banner from '../../assets/images/banner_dark.jpg';
// Image from: https://unsplash.com/photos/jrMsv-0o0bw - by Lachlan Gowen

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    margin: 1em 4em;
  }
`;

export const Banner = styled.div`
  min-height: 80vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;
  position: relative;
  z-index: 1;
  ${({ theme }) => theme.includes.layoutSpacing}

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgb(15, 15, 15, 0.66);

    @media screen and (min-width: 768px) {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  @media screen and (min-width: 768px) {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  @media screen and (min-width: 1200px) {
    background-position: bottom center;
  }
`;

export const HeaderWrapper = styled.div`
  min-height: 80vh;
  margin: 0 auto;
  padding: 0 1.125em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.5px 0px 1px rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin-left: -0.05em;
  font-weight: 500;
  font-size: 4rem;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const SubTitle = styled.p`
  padding: 0.3em 0;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.7px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    font-size: 0.975rem;
  }
`;

export const ButtonLight = styled(ButtonPrimaryLight)`
  padding: 0.7em 2.5em;
  margin: 2em 0;
`;
