import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { FormGroup, Button, FormControl, Typography } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { fetchRooms } from '../apis/fetchRooms';
import { RoomType } from '../types/roomType';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { numberOfGuestsSchema } from '../validation/numberOfGuestsSchema';
import { DateTime } from 'luxon';
import { LIMIT_STAYS, MIN_STAYS } from '../constants/stays';

interface IDParam {
  id: string | undefined;
}

interface IGuests {
  number_of_guests: number;
}

const PropertyDetails = () => {
  const { id } = useParams<IDParam>();
  const history = useHistory();
  const [room, setRoom] = useState<RoomType | any>();
  const [dateFrom, setDateFrom] = useState<Date | any>(new Date());
  const [dateTo, setDateTo] = useState<Date | any>(null);
  const [guests, setGuests] = useState<IGuests>({
    number_of_guests: 1,
  });
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

  !id && history.push('/');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IGuests>({
    resolver: yupResolver(numberOfGuestsSchema),
  });

  const onSubmit = (data: IGuests) => {
    console.log('Date start: ', dateStart);
    console.log('Date end: ', dateEnd);
    console.log('Price per night: ', room?.price_per_night);
    console.log('Total price: ', totalPrice);
    console.log('Duration of stays: ', durationOfStays);
    console.log('Guests: ', data);
  };

  const doNothing = (e) => e.target.blur();

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setGuests({
        ...guests,
        [prop]: event.target.value,
      });
    };

  useEffect(() => {
    (async () => {
      const room: any = await fetchRooms(id);
      setRoom(room);
    })();
  }, []);

  useEffect(() => {
    const calculatedPrice = parseInt(durationOfStays) * room?.price_per_night;
    setTotalPrice(calculatedPrice);
  }, [dateFrom && dateEnd]);

  return (
    <div>
      <h1> Property Details </h1>

      <h2> {room?.Title} </h2>
      <p> {room?.subtitle} </p>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="From"
          value={dateFrom}
          minDate={new Date()}
          maxDate={dateTo}
          onChange={(newValue) => {
            setDateFrom(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </LocalizationProvider>

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

      <FormGroup>
        <FormControl sx={{ m: 1, width: '30ch' }}>
          <TextField
            type="number"
            variant="standard"
            label="Number of guests"
            error={errors?.number_of_guests ? true : false}
            value={guests?.number_of_guests}
            helperText={
              errors?.number_of_guests && errors?.number_of_guests.message
            }
            {...register('number_of_guests')}
            onChange={handleChange('number_of_guests')}
            onWheel={doNothing}
          />
        </FormControl>
        <Typography>
          {' '}
          Total price: {!isNaN(totalPrice) ? totalPrice : 0}
        </Typography>

        <Button onClick={handleSubmit(onSubmit)}>GO TO guests</Button>
      </FormGroup>
    </div>
  );
};

export default PropertyDetails;
