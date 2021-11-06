import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchRooms } from '../apis/fetchRooms';
import { RoomType } from '../types/roomType';

interface IDParam {
  id: string | undefined;
}

const PropertyDetails = () => {
  const { id } = useParams<IDParam>();
  const history = useHistory();
  const [room, setRoom] = useState<RoomType | void>();

  !id && history.push('/');

  const redirectToBooking = () => {
    history.push(`/enquiry/${id}`, {
      property: room,
    });
  };

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

      <button onClick={redirectToBooking}>BOOK</button>
    </div>
  );
};

export default PropertyDetails;
