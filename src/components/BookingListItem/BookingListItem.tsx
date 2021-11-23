import { useHistory } from 'react-router-dom';
import { IBookings } from '../../types/bookings';
import { Wrapper, Title, Row, RowText } from './BookingListItem.styles';

interface Props {
  booking: IBookings;
}

const BookingListItem: React.FC<Props> = (props) => {
  const { booking } = props;
  const history = useHistory();

  const goToBookingDetails = () => {
    history.push(`/booking-detail/${booking.id}`);
  };

  return (
    <Wrapper>
      <Title> {booking.hotel_name} </Title>
      <Row>
        <RowText>{booking.date_from}</RowText>
        <RowText> - </RowText>
        <RowText>{booking.date_to}</RowText>
      </Row>
      <Row>
        <RowText> {booking.number_of_guests} Guests</RowText>
        <RowText>- {booking.length_of_stays} nights</RowText>
      </Row>
      <button onClick={goToBookingDetails}>Details</button>
    </Wrapper>
  );
};

export default BookingListItem;
