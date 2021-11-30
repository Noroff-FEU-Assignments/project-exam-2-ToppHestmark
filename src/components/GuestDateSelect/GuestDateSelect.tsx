import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { FormGroup, FormControl } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { RoomType } from '../../types/roomType';
import { DateTime } from 'luxon';
import Numbers from '../../utils/Numbers';
import {
  LIMIT_STAYS,
  MIN_STAYS,
  MIN_GUESTS,
  MAX_GUESTS,
} from '../../constants/stays';

import {
  Container,
  PriceTag,
  Review,
  Slash,
  Spacing,
  SummaryText,
  TotalPrice,
  HrLine,
  MidText,
} from './GuestDateSelect.styles';
import { ButtonPrimary as Button } from '../../styles/Button/Button.styles';
import { DATE_FORMAT } from '../../constants/dateFormat';

interface GuestDateSelectProps {
  room: RoomType | any;
}

const GuestDateSelect: React.FC<GuestDateSelectProps> = ({ room }) => {
  const history = useHistory();
  const [dateFrom, setDateFrom] = useState<Date | any>(new Date());
  const [dateTo, setDateTo] = useState<Date | any>(dateFrom);
  const [guests, setGuests] = useState<number | string>(1);
  const [guestsError, setGuestsError] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const subTotal = Numbers.formatPrice(isNaN(totalPrice) ? 0 : totalPrice);

  const minimumStays = DateTime.fromJSDate(dateFrom)
    .plus({ days: MIN_STAYS })
    .toJSDate();
  const limitStays = DateTime.fromJSDate(dateFrom)
    .plus({ days: LIMIT_STAYS })
    .toJSDate();
  const dateStart = DateTime.fromJSDate(dateFrom);
  const dateEnd = DateTime.fromJSDate(dateTo);
  const duration: any = dateEnd.diff(dateStart, 'days').toObject().days;
  const durationOfStays: number = Math.round(duration);

  const handleGuestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuestsError(true);
    const value = e.target.value;

    if (typeof parseInt(value) !== 'number') return;

    setGuestsError(false);
    setGuests(parseInt(value));
  };

  const submitBooking = () => {
    if (
      Number(guests) < MIN_GUESTS ||
      Number(guests) > MAX_GUESTS ||
      guestsError ||
      !dateTo ||
      !dateFrom
    )
      return;

    const bookingDateRequest = {
      fromDate: dateStart,
      toDate: dateEnd,
      lengthOfStays: durationOfStays,
      numberOfGuests: Number(guests),
      total: totalPrice,
    };

    history.push(`/enquiry/${room?.id}`, {
      property: room,
      guestRequest: bookingDateRequest,
    });
  };

  const doNothing = (e) => e.target.blur();

  useEffect(() => {
    setDateTo(minimumStays);
  }, [dateFrom]);

  useEffect(() => {
    const calculatedPrice = durationOfStays * room?.price_per_night;

    setTotalPrice(calculatedPrice);
  }, [dateFrom && dateEnd]);

  return (
    <Container>
      <PriceTag>
        <h3>$ {room?.price_per_night} </h3> &nbsp; <Slash>/</Slash>&nbsp;
        <p>night</p>
        <Review> {room?.guest_review} </Review>
      </PriceTag>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          mask="__.__.____"
          inputFormat={DATE_FORMAT}
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
          mask="__.__.____"
          inputFormat={DATE_FORMAT}
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
            error={guests < MIN_GUESTS || guests > MAX_GUESTS ? true : false}
            value={guests}
            helperText={
              guests < MIN_GUESTS
                ? 'Invalid value'
                : guests > MAX_GUESTS
                ? `Maximum allowed guests is ${MAX_GUESTS}`
                : ''
            }
            onChange={handleGuestChange}
            onWheel={doNothing}
          />
        </FormControl>
        <Spacing />
        <Button onClick={submitBooking}>RESERVE</Button>
        <MidText>You wont be charged yet</MidText>

        <SummaryText>
          {' '}
          $ {room?.price_per_night} x {durationOfStays}{' '}
          {durationOfStays === 1 ? 'night' : 'nights'}{' '}
        </SummaryText>
        <SummaryText>Service fee and tax included</SummaryText>
        <HrLine />

        <TotalPrice>
          {' '}
          <span>Total:</span>
          <span>$ {subTotal}</span>{' '}
        </TotalPrice>
      </FormGroup>
    </Container>
  );
};

export default GuestDateSelect;
