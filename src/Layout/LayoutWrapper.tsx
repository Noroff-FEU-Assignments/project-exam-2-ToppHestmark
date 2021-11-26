import Topbar from './Topbar';
import { Container } from './LayoutWrapper.styles';

const LayoutWrapper = ({ children }: any) => {
  return (
    <Container>
      <Topbar />
      {children}
    </Container>
  );
};

export default LayoutWrapper;
