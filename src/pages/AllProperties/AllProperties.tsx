import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { Heading } from '../../components';

import {
  Container,
  InfoWrapper,
  LinkButton,
  Card,
  Row,
  PriceTag,
  Slash,
  TitleText,
  BoxMiddle,
  GhostText,
  BoxBottom,
  Included,
  Image,
} from './AllProperties.styles';

const AllProperties = () => {
  const history = useHistory();
  const [rooms, setRooms] = useState<RoomType[]>([]);

  const redirectToDetail = (roomId) => {
    history.push(`/property-details/${roomId}`);
  };

  useEffect(() => {
    (async () => {
      const allRooms: any = await fetchRooms('');
      setRooms(allRooms);
    })();
  }, []);

  return (
    <Container>
      <Heading align="left">Bergen: {rooms.length} properties</Heading>

      {rooms?.map((room) => (
        <div key={room?.id}>
          <Card>
            <Image src={room?.image_01} alt={room?.Title} />
            <InfoWrapper>
              <Row>
                {' '}
                <TitleText> {room?.Title} </TitleText>{' '}
                <Typography variant="subtitle2">
                  {' '}
                  {room?.guest_review}{' '}
                </Typography>
              </Row>
              <Row>
                <div>
                  <Typography variant="subtitle2">
                    {' '}
                    {room?.room_type}{' '}
                  </Typography>
                  <Typography variant="caption"> {room?.bed_type} </Typography>
                </div>
                <BoxMiddle>
                  <PriceTag>
                    <span>
                      <h3>$ {room?.price_per_night} </h3>
                    </span>
                    <span>
                      {' '}
                      <Slash>/</Slash>{' '}
                    </span>
                    <p>night</p>
                  </PriceTag>
                  <GhostText> Includes tax and charges </GhostText>
                </BoxMiddle>
              </Row>
              <Row>
                <BoxBottom>
                  <Included show={room?.wifi}>Wifi</Included>
                  <Included show={room?.breakfast_included}>
                    Breakfast included
                  </Included>
                  <Included show={room?.free_cancellation}>
                    Free cancellation
                  </Included>
                </BoxBottom>
                <BoxBottom>
                  <LinkButton onClick={() => redirectToDetail(room?.id)}>
                    Learn More
                  </LinkButton>
                </BoxBottom>
              </Row>
            </InfoWrapper>
          </Card>
          <Divider />
        </div>
      ))}
    </Container>
  );
};

export default AllProperties;
