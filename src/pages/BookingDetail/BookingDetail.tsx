import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { manageBooking } from '../../apis/manageBooking';
import { IBookings } from '../../types/bookings';
import { Heading, BookingSummary, ErrorModal, Loading } from '../../components';
import { Wrapper, BtnWrapper, MailLink } from './BookingDetail.styles';
import { ButtonOutlinedDanger as Delete } from '../../styles/Button/Button.styles';
import { ButtonPrimary as Back } from '../../styles/Button/Button.styles';

export interface IParam {
  id: string | undefined;
}

const BookingDetail = () => {
  const { id } = useParams<IParam>();
  const history = useHistory();
  const [auth] = useContext<any>(AuthContext);
  const [booking, setBooking] = useState<IBookings>();
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const token = auth?.jwt;

  !id && history.push('/');

  const goBack = () => history.goBack();

  const handleCancelBooking = async () => {
    const confirm = window.confirm(
      'Are you sure about canceling this enquiry?'
    );
    if (!confirm) return;
    setError(null);
    setLoading(true);

    const cancelBooking: any = await manageBooking(
      'DELETE',
      token,
      setError,
      id
    );

    error && setLoading(false);
    if (cancelBooking?.updated_at) {
      setLoading(false);
      return history.push('/bookings');
    }
  };

  useEffect(() => {
    (async () => {
      setError(null);

      const getBookings: any = await manageBooking('GET', token, setError, id);
      setBooking(getBookings);
      setLoading(false);
    })();
  }, []);

  if (error) return <ErrorModal error={error} message={error?.statusText} />;
  if (loading) return <Loading state={loading} />;

  return (
    <div>
      <Heading align="center">Booking details </Heading>
      <Wrapper>
        <BookingSummary booking={booking} />
        <BtnWrapper>
          <MailLink
            href={`mailto:${booking?.email}?subject=Booking: ${booking?.hotel_name}`}
          >
            Reply enquiry
          </MailLink>
          <Delete onClick={handleCancelBooking}>Cancel booking</Delete>
          <Back onClick={goBack}>Back</Back>
        </BtnWrapper>
      </Wrapper>
    </div>
  );
};

export default BookingDetail;
