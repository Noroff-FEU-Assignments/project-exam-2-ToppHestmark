import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const Container = styled.div<{ state: boolean }>`
  display: ${({ state }) => (state ? 'block' : 'none')};
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const BoxWrapper = styled(Box)`
  .MuiLinearProgress-root {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Progressbar = styled(LinearProgress)`
  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
