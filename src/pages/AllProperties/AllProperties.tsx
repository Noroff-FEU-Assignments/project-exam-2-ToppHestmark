import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider } from '@mui/material';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { Heading, PropertiesCardItem } from '../../components';

import { Container } from './AllProperties.styles';

const AllProperties = () => {
  const history = useHistory();
  const [rooms, setRooms] = useState<RoomType[]>([]);

  const redirectToDetail = (roomId) => {
    history.push('/property-details/' + roomId);
  };

  useEffect(() => {
    (async () => {
      const allRooms: any = await fetchRooms('');
      setRooms(allRooms);
    })();
  }, []);

  return (
    <Container>
      <Heading align="flex-start">Bergen: {rooms?.length} properties</Heading>

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
