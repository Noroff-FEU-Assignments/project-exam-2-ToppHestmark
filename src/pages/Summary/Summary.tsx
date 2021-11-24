import { useLocation } from 'react-router-dom';
import { Heading, BookingSummary } from '../../components';
import { IBookings } from '../../types/bookings';
import { Wrapper, Button } from './Summary.styles';
// import { ButtonPrimary as Print } from '../../styles/Button/Button.styles';

interface ISummaryState {
  bookingSummary: IBookings;
}

const Summary = () => {
  const { state } = useLocation<ISummaryState>();
  const enquirySummary = state?.bookingSummary;

  const handlePrint = () => window.print();

  return (
    <>
      <Heading align="center"> Booking confirmation</Heading>
      <Wrapper>
        <BookingSummary booking={enquirySummary} />
        <Button onClick={handlePrint}>Print</Button>
      </Wrapper>
    </>
  );
};

export default Summary;
