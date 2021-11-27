import styled from 'styled-components/macro';
import RoomIcon from '@mui/icons-material/Room';

export const Container = styled.section`
  ${({ theme }) => theme.includes.layoutSpacing};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0.375em 0;
`;

export const BtnLink = styled.p`
  padding: 1em 0;
`;

export const Chip = styled.p`
  width: fit-content;
  height: fit-content;
  padding: 0.25em 0.5em;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`;

export const Title = styled.h1`
  width: fit-content;
  font-weight: 500;
  font-size: 2.5rem;
  padding: 0 0.3em;
  margin-top: -0.1em;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const LocationIcon = styled(RoomIcon)`
  font-size: 1.25rem !important;
  color: ${({ theme }) => theme.colors.gray};
`;

export const UIWrapper = styled.section`
  grid-gap: 1.625em;

  @media screen and (min-width: 992px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 59% 39%;
  }
`;
