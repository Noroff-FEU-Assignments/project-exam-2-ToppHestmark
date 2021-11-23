import { Typography } from '@mui/material';
import { ButtonPrimary } from '../../styles/Button/Button.styles';
import { RoomType } from '../../types/roomType';
import {
  Wrapper,
  InfoWrapper,
  Row,
  PriceTag,
  Slash,
  TitleText,
  CaptionText,
  BoxMiddle,
  GhostText,
  BoxBottom,
  Included,
  Image,
} from './PropertiesCardItem.styles';

interface Props {
  room: RoomType;
  redirectToDetail: (roomId) => void;
}

const PropertiesCardItem: React.FC<Props> = (props) => {
  const { room, redirectToDetail } = props;

  return (
    <Wrapper>
      <Image src={room?.image_01} alt={room?.Title} />
      <InfoWrapper>
        <Row>
          {' '}
          <TitleText> {room?.Title} </TitleText>{' '}
          <Typography variant="subtitle2"> {room?.guest_review} </Typography>
        </Row>
        <Row>
          <div>
            <CaptionText> {room?.room_type} </CaptionText>
            <CaptionText> {room?.bed_type} </CaptionText>
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
            <ButtonPrimary onClick={() => redirectToDetail(room.id)}>
              Learn More
            </ButtonPrimary>
          </BoxBottom>
        </Row>
      </InfoWrapper>
    </Wrapper>
  );
};

export default PropertiesCardItem;
