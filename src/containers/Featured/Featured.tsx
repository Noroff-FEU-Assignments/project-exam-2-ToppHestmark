import { useHistory } from 'react-router-dom';
import { RoomType } from '../../types/roomType';
import {
  Container,
  TitleRow,
  Row,
  Title,
  ArrowBox,
  ArrowLeft,
  ArrowRight,
  Hotel,
  Card,
  Image,
  Caption,
  Price,
} from './Featured.styles';

interface IFeaturedProps {
  rooms: RoomType[];
}

const Featured: React.FC<IFeaturedProps> = (props) => {
  const { rooms } = props;
  const history = useHistory();

  const goToPropertyDetail = (id) => {
    history.push('/property-details/' + id);
  };

  const scrollLeft = () => {
    const leftQuery: any = document.querySelector('#card-0');
    leftQuery?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollRight = () => {
    const rightQuery: any = document.querySelector(`#card-${rooms.length - 1}`);
    rightQuery?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container>
      <TitleRow>
        <Title>Discover new places</Title>
        <ArrowBox>
          <ArrowLeft onClick={scrollLeft} />
          <ArrowRight onClick={scrollRight} />
        </ArrowBox>
      </TitleRow>

      <Row>
        {rooms.map((room, idx) => (
          <Card
            onClick={() => goToPropertyDetail(room.id)}
            key={room.id}
            id={`card-${idx}`}
          >
            <Image image={room.image_01} />
            <Hotel> {room.Title} </Hotel>
            <Caption> {room.subtitle} </Caption>
            <Caption>
              {' '}
              Starting from &nbsp; <Price>$ {room.price_per_night}</Price>
            </Caption>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Featured;
