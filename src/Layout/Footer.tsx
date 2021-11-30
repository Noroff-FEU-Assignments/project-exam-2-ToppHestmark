import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Container,
  Upper,
  Title,
  Lower,
  IconsBox,
  LinkIcon,
} from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Upper>
        <Title>Made in heaven by</Title>
        <Typography variant="body2">'Topp' Suphachai Hestmark</Typography>
      </Upper>
      <Lower>
        <Typography variant="body2">© {year} Holidaze Group inc.</Typography>
        <IconsBox>
          <LinkIcon>
            <FacebookIcon />
          </LinkIcon>
          <LinkIcon>
            <TwitterIcon />
          </LinkIcon>
          <LinkIcon>
            <InstagramIcon />
          </LinkIcon>
          <LinkIcon>
            <LinkedInIcon />
          </LinkIcon>
        </IconsBox>
      </Lower>
    </Container>
  );
};

export default Footer;
