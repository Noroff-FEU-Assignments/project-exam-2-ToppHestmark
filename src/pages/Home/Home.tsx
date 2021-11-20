import { SearchBox } from '../../components';
import { HeaderContainer, HeaderText, SubTitle } from './Home.styles';

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderText>For your next holiday</HeaderText>
        <SubTitle>Find hotels, B&B and guesthouses</SubTitle>
        <SearchBox />
      </HeaderContainer>
    </>
  );
};

export default Home;
