import { SearchBox } from '../../components';
import { Banner, HeaderWrapper, HeaderText, SubTitle } from './Home.styles';

const Home = () => {
  return (
    <>
      <Banner>
        <HeaderWrapper>
          <HeaderText>For your next holiday</HeaderText>
          <SubTitle>Find hotels, B&B and guesthouses</SubTitle>
          <SearchBox />
        </HeaderWrapper>
      </Banner>
    </>
  );
};

export default Home;
