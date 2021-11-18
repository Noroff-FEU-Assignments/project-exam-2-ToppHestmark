import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { GuestDateSelect, ImagesCarousel } from '../../components';
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
    <div>
      <h1> Property Details </h1>

      <h2> {room?.Title} </h2>
      <p> {room?.subtitle} </p>
      <UIWrapper>
        <ImagesCarousel room={room} />
        <GuestDateSelect room={room} />
      </UIWrapper>
    </div>
  );
};

export default PropertyDetails;
