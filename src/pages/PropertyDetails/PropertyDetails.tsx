import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import {
  Head,
  GuestDateSelect,
  ImageSlider,
  ErrorModal,
  Loading,
} from '../../components';
import { PropertyDescription } from '../../containers';
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
  const [loading, setLoading] = useState<boolean>(true);
  const [auth] = useContext<any>(AuthContext);

  !id && history.push('/');

  const goBack = () => history.goBack();
  const editProperty = (roomId) =>
    history.push('/manage-property/' + roomId, { property: room });

  useEffect(() => {
    (async () => {
      setError(null);

      error && setLoading(false);
      const room: any = await fetchRooms(setError, id);
      setRoom(room);
      setLoading(false);
    })();
  }, []);

  if (error) return <ErrorModal error={error} message={error?.statusText} />;
  if (loading) return <Loading state={loading} />;

  return (
    <Container>
      <Head title={room?.Title} description={room?.description} />
      <BtnLink>
        <ButtonPrimaryLink rel="noopener" onClick={goBack}>
          Go Back
        </ButtonPrimaryLink>
        {auth && (
          <ButtonPrimaryLink
            rel="noopener"
            onClick={() => editProperty(room?.id)}
          >
            Edit this property
          </ButtonPrimaryLink>
        )}
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
        <ImageSlider room={room} />
        <GuestDateSelect room={room} />
        <PropertyDescription room={room} />
      </UIWrapper>
    </Container>
  );
};

export default PropertyDetails;
