import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';

import {
  Container,
  InfoWrapper,
  LinkButton,
  Card,
  Row,
  PriceTag,
  Slash,
  TitleText,
  BoxBottom,
  Included,
  Image,
} from './AllProperties.styles';

const AllProperties = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);

  useEffect(() => {
    (async () => {
      const allRooms: any = await fetchRooms('');
      setRooms(allRooms);
    })();
  }, []);

  return (
    <Container>
      <h1>Bergen: {rooms.length} properties</h1>

      {rooms?.map((room) => (
        <>
          <Card key={room?.id}>
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
                <div>
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
                  <Typography variant="caption">
                    {' '}
                    Includes tax and charges{' '}
                  </Typography>
                </div>
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
                  <NavLink to={`/property-details/${room?.id}`}>
                    <LinkButton>Learn More</LinkButton>
                  </NavLink>
                </BoxBottom>
              </Row>
            </InfoWrapper>
          </Card>
          <Divider />
        </>
      ))}
    </Container>
  );
};

export default AllProperties;
