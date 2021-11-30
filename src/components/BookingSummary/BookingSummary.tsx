import React from 'react';
import { DateTime } from 'luxon';
import { IBookings } from '../../types/bookings';
import { AMERICAN_DATE_FORMAT } from '../../constants/dateFormat';
import Numbers from '../../utils/Numbers';
import {
  Row,
  LastRow,
  TextLeft,
  TextRight,
  Specifications,
} from './BookingSummary.styles';

interface Props {
  booking: IBookings | undefined;
}

const BookingSummary: React.FC<Props> = (props) => {
  const { booking } = props;

  const totalPrice = Numbers.formatPrice(booking ? booking?.subtotal : 0);
  const bookingDate = DateTime.fromISO(`${booking?.created_at}`).toFormat(
    AMERICAN_DATE_FORMAT
  );

  return (
    <>
      <Row>
        <TextLeft> Property: </TextLeft>
        <TextRight> {booking?.hotel_name} </TextRight>
      </Row>
      <Row>
        <TextLeft> Booking ID: </TextLeft>
        <TextRight> {booking?.booking_id} </TextRight>
      </Row>
      <Row>
        <TextLeft> Booking Date: </TextLeft>
        <TextRight> {bookingDate} </TextRight>
      </Row>
      <Row>
        <TextLeft> From/To: </TextLeft>
        <TextRight>
          {' '}
          {booking?.date_from} / {booking?.date_to}
        </TextRight>
      </Row>
      <Row>
        <TextLeft> Guests: </TextLeft>
        <TextRight> {booking?.number_of_guests} </TextRight>
      </Row>
      <Row>
        <TextLeft> Fullname: </TextLeft>
        <TextRight>
          {booking?.firstname} {booking?.lastname}
        </TextRight>
      </Row>
      <Row>
        <TextLeft> Email: </TextLeft>
        <TextRight> {booking?.email} </TextRight>
      </Row>
      <Row>
        <TextLeft> Phone: </TextLeft>
        <TextRight> {booking?.phone_number} </TextRight>
      </Row>
      <Specifications>
        <TextLeft> Specifications: </TextLeft>
        <div> {booking?.enquiry_specifications} </div>
      </Specifications>
      <Row>
        <TextLeft> </TextLeft>
        <TextRight> {booking?.length_of_stays} nights</TextRight>
      </Row>
      <LastRow>
        <TextLeft> Total: </TextLeft>
        <TextRight>$ {totalPrice}</TextRight>
      </LastRow>
    </>
  );
};

export default BookingSummary;
