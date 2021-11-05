import Topbar from './Topbar';
import styled from 'styled-components/macro';

const Wrapper = styled.main`
  width: 100%;
`;

const LayoutWrapper = ({ children }: any) => {
  return (
    <Wrapper>
      <Topbar />
      {children}
    </Wrapper>
  );
};

export default LayoutWrapper;
