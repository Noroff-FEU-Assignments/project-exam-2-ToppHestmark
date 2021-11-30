import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import {
  ButtonPrimary,
  ButtonOutlined,
} from '../../styles/Button/Button.styles';
import { RoomType } from '../../types/roomType';
import { formatPrice } from '../../utils/numbers';
import {
  Wrapper,
  InfoWrapper,
  Row,
  PriceTag,
  Slash,
  TitleText,
  CaptionText,
  LocationIcon,
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
  const [auth] = useContext<any>(AuthContext);
  const history = useHistory();
  const price = formatPrice(room ? room.price_per_night : 0);

  const redirectToManage = (roomId) => {
    history.push('/manage-property/' + roomId, { property: room });
  };

  return (
    <Wrapper>
      <Image
        onClick={() => redirectToDetail(room.id)}
        src={room?.image_01}
        alt={room?.Title}
      />
      <InfoWrapper>
        <Row>
          {' '}
          <TitleText onClick={() => redirectToDetail(room.id)}>
            {room?.Title}
          </TitleText>
          <Typography variant="subtitle2"> {room?.guest_review} </Typography>
        </Row>
        <Row>
          <div>
            <CaptionText>
              <LocationIcon />
              {room?.neighbourhood}
            </CaptionText>
            <CaptionText> {room?.room_type} </CaptionText>
          </div>
          <BoxMiddle>
            <PriceTag>
              <h3>$ {price} </h3> &nbsp;
              <Slash>/</Slash>
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
            {auth ? (
              <ButtonOutlined onClick={() => redirectToManage(room.id)}>
                Manage property
              </ButtonOutlined>
            ) : (
              <ButtonPrimary onClick={() => redirectToDetail(room.id)}>
                Learn More
              </ButtonPrimary>
            )}
          </BoxBottom>
        </Row>
      </InfoWrapper>
    </Wrapper>
  );
};

export default PropertiesCardItem;
