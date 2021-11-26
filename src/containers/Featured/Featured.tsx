import { RoomType } from '../../types/roomType';
import { Container, Card, Image } from './Featured.styles';

interface IFeaturedProps {
  rooms: RoomType[];
}

const Featured: React.FC<IFeaturedProps> = (props) => {
  const { rooms } = props;

  return (
    <Container>
      {rooms.map((room) => (
        <Card key={room.id}>
          <Image image={room.image_01} />
        </Card>
      ))}
    </Container>
  );
};

export default Featured;
