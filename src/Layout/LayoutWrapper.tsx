import Topbar from './Topbar';
import { Container, Wrapper } from './LayoutWrapper.styles';

const LayoutWrapper = ({ children }: any) => {
  return (
    <Container>
      <Topbar />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default LayoutWrapper;
