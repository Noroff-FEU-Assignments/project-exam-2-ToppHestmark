import { Container, Left, Right, TopText, Title } from './Poster.styles';
import { ButtonPrimaryDark as Button } from '../../styles/Button/Button.styles';
import posterImage from '../../assets/images/poster_01.jpg';
// Image ref: https://unsplash.com/photos/v4bCFqVM9Gs - by Nathan Oakley on Unsplash
import { neverGonnaGiveYouUp } from '../../constants/externalLinks';

const Poster = () => {
  return (
    <Container>
      <Left>
        <TopText>Promotion</TopText>
        <Title>Holiday season deals</Title>
        <a href={neverGonnaGiveYouUp} target="_blank">
          <Button> Check this out</Button>
        </a>
      </Left>
      <Right>
        <img src={posterImage} alt="Poster image" />
      </Right>
    </Container>
  );
};

export default Poster;
