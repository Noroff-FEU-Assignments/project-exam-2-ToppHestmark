import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { GuestDateSelect, ImagesCarousel, ErrorModal } from '../../components';
import { Typography } from '@mui/material';
import {
  Container,
  Row,
  BtnLink,
  Title,
  Chip,
  LocationIcon,
  UIWrapper,
} from './PropertyDetails.styles';
import { ButtonPrimaryLink } from '../../styles/Button/Button.styles';

interface IDParam {
  id: string | undefined;
}

const PropertyDetails = () => {
  const { id } = useParams<IDParam>();
  const history = useHistory();
  const [room, setRoom] = useState<RoomType>();
  const [error, setError] = useState<any>(null);

  !id && history.push('/');

  const goBack = () => history.goBack();

  useEffect(() => {
    (async () => {
      setError(null);
      const room: any = await fetchRooms(setError, id);
      setRoom(room);
    })();
  }, []);

  if (error) return <ErrorModal error={error} message={error?.statusText} />;

  return (
    <Container>
      <BtnLink>
        <ButtonPrimaryLink onClick={goBack}>Go Back</ButtonPrimaryLink>
      </BtnLink>
      <Row>
        <Chip> {room?.property_type} </Chip> <Title> {room?.Title} </Title>
      </Row>
      <Typography variant="body1"> {room?.subtitle} </Typography>
      <Row>
        <LocationIcon />
        <Typography variant="body1"> {room?.neighbourhood} </Typography>
      </Row>
      <UIWrapper>
        <ImagesCarousel room={room} />
        <GuestDateSelect room={room} />
      </UIWrapper>
    </Container>
  );
};

export default PropertyDetails;
