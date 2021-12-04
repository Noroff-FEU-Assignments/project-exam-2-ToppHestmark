import { useHistory } from 'react-router-dom';
import { Container, Box, Title, Button } from './BannerBottom.styles';
import image from '../../assets/images/banner_bottom.jpg';
// Image ref: https://unsplash.com/photos/p0ZvBVpW3KY - by Sam Manns

const BannerBottom = () => {
  const history = useHistory();

  const goToContact = () => history.push('/contact');

  return (
    <Container image={image}>
      <img src={image} alt="Bottom banner for Holidaze" />
      <Box>
        <Title>Question about booking?</Title>
        <Button onClick={goToContact}>Ask us</Button>
      </Box>
    </Container>
  );
};

export default BannerBottom;
