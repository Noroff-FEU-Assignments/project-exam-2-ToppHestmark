import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { manageBooking } from '../../apis/manageBooking';
import { IBookings } from '../../types/bookings';
import { Heading, BookingSummary, ErrorModal } from '../../components';
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
  const token = auth?.jwt;

  !id && history.push('/');

  const goBack = () => history.goBack();

  const handleCancelBooking = async () => {
    const confirm = window.confirm(
      'Are you sure about canceling this enquiry?'
    );
    if (!confirm) return;

    setError(null);
    const cancelBooking: any = await manageBooking(
      'DELETE',
      token,
      setError,
      id
    );

    if (cancelBooking?.updated_at) {
      history.push('/bookings');
    }
  };

  useEffect(() => {
    (async () => {
      setError(null);
      const getBookings: any = await manageBooking('GET', token, setError, id);
      setBooking(getBookings);
    })();
  }, []);

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

      {error && <ErrorModal error={error} message={error?.statusText} />}
    </div>
  );
};

export default BookingDetail;
