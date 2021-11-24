import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Heading, BookingListItem, ErrorModal } from '../../components';
import { manageBooking } from '../../apis/manageBooking';
import { IBookings } from '../../types/bookings';
import { Container, Wrapper } from './Bookings.styles';

const Bookings = () => {
  const [allBookings, setAllBookings] = useState<IBookings[]>([]);
  const [auth] = useContext<any>(AuthContext);
  const sortedBookings: IBookings[] = allBookings?.sort(
    (a, b) =>
      Number(new Date(b.published_at)) - Number(new Date(a.published_at))
  );
  const [error, setError] = useState<any>(null);
  const token = auth?.jwt;

  useEffect(() => {
    (async () => {
      setError(null);
      const getBookings: any = await manageBooking('GET', token, setError);
      setAllBookings(getBookings);
    })();
  }, []);

  return (
    <Container>
      <Heading align="center">
        {' '}
        {allBookings?.length} Bookings in total{' '}
      </Heading>
      <Wrapper>
        {sortedBookings?.map((booking, idx) => (
          <BookingListItem key={idx} booking={booking} />
        ))}
      </Wrapper>
      {error && <ErrorModal error={error} message={error?.statusText} />}
    </Container>
  );
};

export default Bookings;
