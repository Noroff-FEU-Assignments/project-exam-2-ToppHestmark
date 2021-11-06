import { useState, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { RoomType } from '../types/roomType';

const Enquiry = () => {
  const { state }: any = useLocation<{ property: RoomType | undefined }>();
  const history = useHistory();
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const property: RoomType = state?.property;

  return (
    <div>
      <h1>Your're almost there.</h1>
      <h2> Enquiry for {property.Title} </h2>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="From"
          value={dateFrom}
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
          onChange={(newValue) => {
            setDateTo(newValue);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} />}
        />
      </LocalizationProvider>
      <p>Total: 999 dollar</p>
    </div>
  );
};

export default Enquiry;
