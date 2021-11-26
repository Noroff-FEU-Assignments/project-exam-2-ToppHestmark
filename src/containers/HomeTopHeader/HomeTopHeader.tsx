import { useHistory } from 'react-router-dom';
import {
  Container,
  Banner,
  HeaderWrapper,
  HeaderText,
  SubTitle,
  ButtonLight,
} from './HomeTopHeader.styles';

const HomeTopHeader = () => {
  const history = useHistory();

  const goToAllProperties = () => history.push('/all-properties');

  return (
    <Container>
      <Banner>
        <HeaderWrapper>
          <HeaderText>For your next holiday</HeaderText>
          <SubTitle>Find hotels, B&B and guesthouses</SubTitle>
          <ButtonLight onClick={goToAllProperties}>Start explore</ButtonLight>
        </HeaderWrapper>
      </Banner>
    </Container>
  );
};

export default HomeTopHeader;
