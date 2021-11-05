import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';

import { fetchRooms } from '../apis/fetchRooms';
import { RoomType } from '../types/roomType';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const Home = () => {
  const [rooms, setRooms] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<RoomType[]>([]);
  const loading = open && options.length === 0;
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);

  const handleSelectedRoom = (room) => {
    setSelectedRoom(room);
  };

  useEffect(() => {
    let active = true;

    if (!loading) return undefined;

    (async () => {
      await sleep();

      const allRooms = await fetchRooms('');
      setRooms(allRooms);

      if (active) setOptions([...rooms]);
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      isOptionEqualToValue={(option, value) => option.Title === value.Title}
      getOptionLabel={(option) => option.Title}
      options={options}
      loading={loading}
      value={selectedRoom}
      onChange={(_event, room) => handleSelectedRoom(room)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Properties"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Home;
