import { useHistory } from 'react-router-dom';
import { IBookings } from '../../types/bookings';
import { AMERICAN_DATE_FORMAT } from '../../constants/dateFormat';
import { DateTime } from 'luxon';
import {
  Wrapper,
  TitleRow,
  Title,
  DateText,
  BookingId,
  Row,
  RowText,
  Button,
} from './BookingListItem.styles';

interface Props {
  booking: IBookings;
}

const BookingListItem: React.FC<Props> = (props) => {
  const { booking } = props;
  const history = useHistory();
  const dateBooked = DateTime.fromISO(`${booking.published_at}`).toFormat(
    AMERICAN_DATE_FORMAT
  );

  const goToBookingDetails = () => {
    history.push(`/booking-detail/${booking.id}`);
  };

  return (
    <Wrapper>
      <TitleRow>
        <Title> {booking.hotel_name} </Title>
        <div>
          <BookingId>Ref: {booking.booking_id} </BookingId>
          <DateText>{dateBooked}</DateText>
        </div>
      </TitleRow>
      <Row>
        <RowText>{booking.date_from}</RowText>
        <RowText> - </RowText>
        <RowText>{booking.date_to}</RowText>
      </Row>
      <Row>
        <RowText> {booking.number_of_guests} Guests</RowText>
        <RowText>- {booking.length_of_stays} nights</RowText>
      </Row>

      <Button onClick={goToBookingDetails}>Details</Button>
    </Wrapper>
  );
};

export default BookingListItem;
