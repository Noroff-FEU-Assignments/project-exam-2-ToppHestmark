import { ISummary } from './Summary.types';
import { useLocation } from 'react-router-dom';

interface ISummaryState {
  bookingSummary: ISummary;
}

const Summary = () => {
  const { state } = useLocation<ISummaryState>();
  const {
    firstname,
    lastname,
    booking_id,
    email,
    hotel_name,
    length_of_stays,
    subtotal,
    created_at,
    number_of_guests,
    phone_number,
    date_from,
    date_to,
  } = state?.bookingSummary;

  return (
    <div>
      <h1>Summary page</h1>
      <p> {booking_id} </p>
      <p> {hotel_name} </p>
      <p> {firstname} </p>
      <p> {lastname} </p>
      <p> {email} </p>
      <p> {length_of_stays} </p>
      <p> {phone_number} </p>
      <p> {subtotal} </p>
      <p> {created_at} </p>
      <p> {number_of_guests} </p>
      <p> {date_from} </p>
      <p> {date_to} </p>
    </div>
  );
};

export default Summary;
