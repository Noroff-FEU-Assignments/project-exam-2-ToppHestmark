import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider } from '@mui/material';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { Heading, PropertiesCardItem, ErrorModal } from '../../components';
import { Container } from './AllProperties.styles';

const AllProperties = () => {
  const history = useHistory();
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [error, setError] = useState<any>(null);

  const redirectToDetail = (roomId) => {
    history.push('/property-details/' + roomId);
  };

  useEffect(() => {
    (async () => {
      setError(null);
      const allRooms: any = await fetchRooms(setError, '');
      setRooms(allRooms);
    })();
  }, []);

  if (error) return <ErrorModal error={error} message={error?.statusText} />;

  return (
    <Container>
      <Heading align="flex-start"> {rooms?.length} properties</Heading>

      {rooms?.map((room) => (
        <div key={room?.id}>
          <PropertiesCardItem room={room} redirectToDetail={redirectToDetail} />
          <Divider />
        </div>
      ))}
    </Container>
  );
};

export default AllProperties;
