import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';

import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import {
  Container,
  Wrapper,
  SearchInput,
  SubmitButton,
} from './SearchBox.styles';
import { ErrorModal } from '../../components';

const SearchBox = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [error, setError] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<RoomType[]>([]);
  const loading = open && options.length === 0;
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const history = useHistory();

  const handleSelectedRoom = (room: RoomType | null) => {
    setSelectedRoom(room);
  };

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    if (!selectedRoom) return;

    history.push(`/property-details/${selectedRoom?.id}`);
  };

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  useEffect(() => {
    let active = true;

    (async () => {
      await sleep();
      setError(null);

      const allRooms: any = await fetchRooms(setError, '');
      setRooms(allRooms);

      if (!loading) return undefined;
      if (active) setOptions([...rooms]);
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);

  if (error) return <ErrorModal error={error} message={error?.statusText} />;

  return (
    <Container component="form" onSubmit={(e) => handleRoomSubmit(e)}>
      <Wrapper>
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
            <SearchInput
              {...params}
              InputProps={{
                placeholder: 'Search properties',
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
        <SubmitButton>Go</SubmitButton>
      </Wrapper>
    </Container>
  );
};

export default SearchBox;
