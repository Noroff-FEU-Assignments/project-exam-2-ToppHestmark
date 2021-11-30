import Topbar from './Topbar';
import Footer from './Footer';
import { Container } from './LayoutWrapper.styles';

const LayoutWrapper = ({ children }: any) => {
  return (
    <div>
      <Container>
        <Topbar />
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
