import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { FormGroup, Button, FormControl } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { RoomType } from '../../types/roomType';
import { DateTime } from 'luxon';
import {
  LIMIT_STAYS,
  MIN_STAYS,
  MIN_GUESTS,
  MAX_GUESTS,
} from '../../constants/stays';

import {
  Container,
  PriceHead,
  Slash,
  Spacing,
  TotalPrice,
} from './GuestDateSelect.styles';

interface GuestDateSelectProps {
  room: RoomType;
}

const GuestDateSelect: React.FC<GuestDateSelectProps> = ({ room }) => {
  const history = useHistory();
  const [dateFrom, setDateFrom] = useState<Date | any>(new Date());
  const [dateTo, setDateTo] = useState<Date | any>(dateFrom);
  const [guests, setGuests] = useState<number | string>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const minimumStays = DateTime.fromJSDate(dateFrom)
    .plus({ days: MIN_STAYS })
    .toJSDate();
  const limitStays = DateTime.fromJSDate(dateFrom)
    .plus({ days: LIMIT_STAYS })
    .toJSDate();
  const dateStart = DateTime.fromJSDate(dateFrom);
  const dateEnd = DateTime.fromJSDate(dateTo);
  const durationOfStays: any = dateEnd
    .diff(dateStart, 'days')
    .toObject()
    .days?.toFixed(0);

  const submitBooking = () => {
    // console.log('Date start: ', dateStart);
    // console.log('Date end: ', dateEnd);
    // console.log('Total price: ', totalPrice);
    // console.log('Duration of stays: ', durationOfStays);
    console.log('Guests: ', guests);

    const bookingRequest = {
      fromDate: dateStart,
      toDate: dateEnd,
      lengthOfStays: durationOfStays,
      numberOfGuests: guests,
      total: totalPrice,
    };

    history.push(`/enquiry/${room?.id}`, { property: room });
  };

  const doNothing = (e) => e.target.blur();

  useEffect(() => {
    setDateTo(minimumStays);
  }, [dateFrom]);

  useEffect(() => {
    const calculatedPrice = parseInt(durationOfStays) * room?.price_per_night;

    setTotalPrice(calculatedPrice);
  }, [dateFrom && dateEnd]);

  return (
    <Container>
      <PriceHead>
        <span>
          <h3>$ {room?.price_per_night} </h3>
        </span>
        <span>
          {' '}
          <Slash>/</Slash>{' '}
        </span>
        <p>night</p>
      </PriceHead>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="From"
          value={dateFrom}
          minDate={new Date()}
          onChange={(newValue) => {
            setDateFrom(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </LocalizationProvider>
      <Spacing />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="To"
          value={dateTo}
          minDate={dateFrom || minimumStays}
          maxDate={limitStays}
          onChange={(newValue) => {
            setDateTo(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </LocalizationProvider>
      <Spacing />

      <FormGroup>
        <FormControl>
          <TextField
            type="number"
            variant="standard"
            label="Guests"
            error={guests < MIN_GUESTS ? true : false}
            value={guests}
            helperText={guests < MIN_GUESTS ? 'Invalid number' : ''}
            onChange={(e) => setGuests(e.target.value)}
            onWheel={doNothing}
          />
        </FormControl>
        <Spacing />

        <TotalPrice>
          {' '}
          <span>Total:</span>{' '}
          <span>$ {isNaN(totalPrice) ? 0 : totalPrice}</span>{' '}
        </TotalPrice>

        <Button onClick={submitBooking}>RESERVE</Button>
      </FormGroup>
    </Container>
  );
};

export default GuestDateSelect;
