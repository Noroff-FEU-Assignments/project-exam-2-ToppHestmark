import { useState, useEffect } from 'react';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { SearchBox } from '../../components';
import { HomeTopHeader, Poster, Featured } from '../../containers';
import { TopSection, Spacer, LowerSection } from './Home.styles';

const Home = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setError(null);

      const allRooms: any = await fetchRooms(setError, '');
      setRooms(allRooms);
    })();
  }, []);

  return (
    <>
      <TopSection>
        <SearchBox />
        <HomeTopHeader />
        <Spacer />
      </TopSection>
      <LowerSection>
        <Poster />
        <Featured rooms={rooms} />
        <Spacer />
      </LowerSection>
    </>
  );
};

export default Home;
