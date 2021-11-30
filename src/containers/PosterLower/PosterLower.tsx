import image1 from '../../assets/images/poster_02.jpg';
import image2 from '../../assets/images/poster_03.jpg';
// Image 01 ref: https://unsplash.com/photos/mqN-EV9rNlY - by Benjamin Davies
// Image 02 ref: https://unsplash.com/photos/C0jolb5ay0c - by Daniel Thiele

import { neverGonnaGiveYouUp } from '../../constants/externalLinks';
import { ButtonPrimaryLight as Button } from '../../styles/Button/Button.styles';
import {
  Container,
  Wrapper,
  Title,
  Box,
  InnerTitle,
} from './PosterLower.styles';

const PosterLower = () => {
  return (
    <Container>
      <Title>Activities</Title>
      <Wrapper>
        <Box image={image1}>
          <InnerTitle>Plan your trip</InnerTitle>
          <a href={neverGonnaGiveYouUp} target="_blank">
            <Button>Packages</Button>
          </a>
        </Box>
        <Box image={image2}>
          <InnerTitle>On the road</InnerTitle>
          <a href={neverGonnaGiveYouUp} target="_blank">
            <Button>Car Rentals</Button>
          </a>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default PosterLower;
