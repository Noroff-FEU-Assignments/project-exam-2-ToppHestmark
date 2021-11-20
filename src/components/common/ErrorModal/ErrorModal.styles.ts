import styled from 'styled-components/macro';
import Box from '@mui/material/Box';
import { boxShadow } from '../../../styles/mixins';

export const Wrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: 4px;

  ${boxShadow};
`;
