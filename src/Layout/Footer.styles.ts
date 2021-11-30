import styled from 'styled-components/macro';
import { neverGonnaGiveYouUp } from '../constants/externalLinks';

export const Container = styled.footer`
  ${({ theme }) => theme.includes.layoutSpacing};
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6em 0 2em 0;
`;
export const Title = styled.h4`
  font-weight: 400;
  font-size: 1.25rem;
  padding: 0.3em 0;
`;

export const Link = styled.a.attrs(() => ({
  target: '_blank',
  href: neverGonnaGiveYouUp,
}))`
  color: ${({ theme }) => theme.colors.navy};
  opacity: 0.85;
  text-decoration: none;
`;

export const Lower = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em 0 1em 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const IconsBox = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 768px) {
    padding-top: 1em;
  }
`;

export const LinkIcon = styled.a.attrs(() => ({
  target: '_blank',
  href: neverGonnaGiveYouUp,
}))`
  color: ${({ theme }) => theme.colors.navy};
  opacity: 0.85;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
  }
`;
