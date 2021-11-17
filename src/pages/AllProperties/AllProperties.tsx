import { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { Container } from '@mui/material';

const AllProperties = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);

  useEffect(() => {
    (async () => {
      const allRooms: any = await fetchRooms('');
      setRooms(allRooms);
    })();
  }, []);

  return (
    <Container>
      {rooms?.map((room) => {
        const {
          Title,
          bed_type,
          breakfast_included,
          description,
          featured,
          free_cancellation,
          guest_review,
          image_01,
          neighbourhood,
          price_per_night,
          property_type,
          room_type,
          subtitle,
          wifi,
          id,
        } = room;

        return (
          <div key={id}>
            <NavLink to={`/property-details/${id}`}>
              <h3> {Title} </h3>
              <h6> {subtitle} </h6>
            </NavLink>
          </div>
        );
      })}
    </Container>
  );
};

export default AllProperties;
