import styled from 'styled-components/macro';
import RoomIcon from '@mui/icons-material/Room';

export const Wrapper = styled.div`
  padding: 1.625em 0;
  display: grid;
  grid-template-columns: 32% 65%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 1em 0 1em 0;
    margin-top: 1em;
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    filter: grayscale(0.6);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 1.625em 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 0.625em 0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const TitleText = styled.h4`
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_dark};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CaptionText = styled.p`
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
  }
`;
export const LocationIcon = styled(RoomIcon)`
  font-size: 1.125rem !important;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0.1em -0.2em -0.3em;
`;

export const PriceTag = styled.div`
  display: flex;
  justify-content: flex-end;

  h3 {
    font-weight: 500;
    font-size: 1.4rem;
  }

  p {
    margin-top: 0.15em;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.625rem;
    }
  }
`;

export const Slash = styled.div`
  font-size: 1.625rem;
  font-weight: 100;
  padding: 0 0.15em;
  margin-top: -0.3em;
`;

export const BoxMiddle = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const GhostText = styled.p`
  margin-top: -0.7em;
  font-size: 0.75rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ghost};
`;

export const BoxBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 480px) {
    padding: 0.625em 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Included = styled.p<{ show: boolean }>`
  color: ${({ theme }) => theme.colors.success};
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-size: 0.875rem;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
