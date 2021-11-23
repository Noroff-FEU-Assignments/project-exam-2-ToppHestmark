import { useLocation } from 'react-router-dom';
import { Heading, BookingSummary } from '../../components';
import { IBookings } from '../../types/bookings';
import { Wrapper } from './Summary.styles';

interface ISummaryState {
  bookingSummary: IBookings;
}

const Summary = () => {
  const { state } = useLocation<ISummaryState>();
  const enquirySummary = state?.bookingSummary;

  return (
    <>
      <Heading align="center"> Successfully booked!</Heading>
      <Wrapper>
        <BookingSummary booking={enquirySummary} />
      </Wrapper>
    </>
  );
};

export default Summary;
