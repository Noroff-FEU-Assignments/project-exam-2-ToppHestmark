import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { manageBooking } from '../../apis/manageBooking';
import { IBookings } from '../../types/bookings';
import { Heading, BookingSummary } from '../../components';
import { Wrapper } from './BookingDetail.styles';

export interface IParam {
  id: string | undefined;
}

const BookingDetail = () => {
  const { id } = useParams<IParam>();
  const history = useHistory();
  const [auth] = useContext<any>(AuthContext);
  const [booking, setBooking] = useState<IBookings>();
  const [error, setError] = useState<any>(null);
  const token = auth?.jwt;

  !id && history.push('/');

  useEffect(() => {
    (async () => {
      const getBookings: any = await manageBooking('GET', token, setError, id);
      setBooking(getBookings);
    })();
  }, []);

  return (
    <div>
      <Heading align="center">Booking details </Heading>
      <Wrapper>
        <BookingSummary booking={booking} />
      </Wrapper>
    </div>
  );
};

export default BookingDetail;
