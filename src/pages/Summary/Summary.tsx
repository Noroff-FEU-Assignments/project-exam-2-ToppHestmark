import { useLocation } from 'react-router-dom';
import { Heading, BookingSummary } from '../../components';
import { IBookings } from '../../types/bookings';
import { Wrapper, BtnWrapper, Button } from './Summary.styles';

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
        <BtnWrapper>
          <Button onClick={handlePrint}>Print</Button>
        </BtnWrapper>
      </Wrapper>
    </>
  );
};

export default Summary;
