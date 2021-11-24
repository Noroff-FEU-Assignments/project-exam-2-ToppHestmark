import styled from 'styled-components/macro';
import banner from '../../assets/images/banner.jpg';

export const Banner = styled.header`
  max-width: 1920px;
  margin: 0 auto;
  min-height: 65vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgb(95, 95, 95, 0.6);
  }

  @media screen and (min-width: 1200px) {
    background-position: bottom center;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 1300px;
  min-height: 65vh;
  margin: 0 auto;
  padding: 0 1.125em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0.5px 0px 1px rgba(255, 255, 255, 0.6);
`;

export const HeaderText = styled.h1`
  margin-left: -0.05em;
  font-weight: 500;
  font-size: 3.75rem;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const SubTitle = styled.p`
  padding: 0.3em 0;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.7px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 0.975rem;
  }
`;
