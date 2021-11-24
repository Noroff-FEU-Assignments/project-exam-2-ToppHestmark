import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Heading, BookingListItem, ErrorModal } from '../../components';
import { manageBooking } from '../../apis/manageBooking';
import { IBookings } from '../../types/bookings';
import { Container, Wrapper } from './Bookings.styles';

const Bookings = () => {
  const history = useHistory();
  const [auth] = useContext<any>(AuthContext);
  const token = auth?.jwt;
  const [allBookings, setAllBookings] = useState<IBookings[]>([]);
  const [error, setError] = useState<any>(null);
  const sortedBookings: IBookings[] = allBookings?.sort(
    (a, b) =>
      Number(new Date(b.published_at)) - Number(new Date(a.published_at))
  );

  !auth && history.push('/');

  useEffect(() => {
    (async () => {
      setError(null);
      const getBookings: any = await manageBooking('GET', token, setError);
      setAllBookings(getBookings);
    })();
  }, []);

  if (error) return <ErrorModal error={error} message={error?.statusText} />;

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
    </Container>
  );
};

export default Bookings;
