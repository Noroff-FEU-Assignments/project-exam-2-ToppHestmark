import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { Heading, GuestDateSelect, ImagesCarousel } from '../../components';
import { UIWrapper } from './PropertyDetails.styles';

interface IDParam {
  id: string | undefined;
}

const PropertyDetails = () => {
  const { id } = useParams<IDParam>();
  const history = useHistory();
  const [room, setRoom] = useState<RoomType | any>();

  !id && history.push('/');

  useEffect(() => {
    (async () => {
      const room: any = await fetchRooms(id);
      setRoom(room);
    })();
  }, []);

  return (
    <>
      <Heading align="flex-start"> {room?.Title} </Heading>

      <h2> {room?.Title} </h2>
      <p> {room?.subtitle} </p>
      <UIWrapper>
        <ImagesCarousel room={room} />
        <GuestDateSelect room={room} />
      </UIWrapper>
    </>
  );
};

export default PropertyDetails;
