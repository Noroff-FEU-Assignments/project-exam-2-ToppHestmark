import { RoomType } from '../../types/roomType';
import { Typography } from '@mui/material';
import { Box, Subtitle, Row, Included } from './PropertyDescription.styles';

interface Props {
  room: RoomType | any;
}

const PropertyDescription: React.FC<Props> = (props) => {
  const { room } = props;

  return (
    <Box>
      <Subtitle> {room?.room_type} </Subtitle>
      <Typography variant="body2"> {room?.bed_type} </Typography>
      <Box>
        <Typography variant="body1"> {room?.description} </Typography>
      </Box>
      <Row>
        <Included show={room?.wifi}> WIFI</Included>
        <Included show={room?.breakfast_included}> Breakfast included</Included>
        <Included show={room?.free_cancellation}> Free cancellation</Included>
      </Row>
    </Box>
  );
};

export default PropertyDescription;
