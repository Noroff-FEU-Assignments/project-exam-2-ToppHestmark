import Topbar from './Topbar';
import styled from 'styled-components/macro';

const Wrapper = styled.main`
  width: 100%;
`;

const LayoutWrapper = ({ children }: any) => {
  return (
    <div>
      <Topbar />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default LayoutWrapper;
