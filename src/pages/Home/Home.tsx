import { useState, useEffect } from 'react';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { SearchBox, ErrorModal } from '../../components';
import { HomeTopHeader, Poster, Featured } from '../../containers';
import { TopSection, Spacer, LowerSection } from './Home.styles';

const Home = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [error, setError] = useState<any>(null);
  const featuredRooms = rooms.filter((room) => room.featured);

  useEffect(() => {
    (async () => {
      setError(null);

      const allRooms: any = await fetchRooms(setError, '');
      setRooms(allRooms);
    })();
  }, []);

  return (
    <>
      {error && <ErrorModal error={error} message={error?.statusText} />}
      <TopSection>
        <SearchBox />
        <HomeTopHeader />
        <Spacer />
      </TopSection>
      <LowerSection>
        <Poster />
        <Featured rooms={featuredRooms} />
        <Spacer />
      </LowerSection>
    </>
  );
};

export default Home;
