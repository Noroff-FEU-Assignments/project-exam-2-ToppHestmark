import { useState, useEffect } from 'react';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { SearchBox, ErrorModal, Loading } from '../../components';
import { HomeTopHeader, Poster, Featured, PosterLower } from '../../containers';
import { TopSection, Spacer, LowerSection } from './Home.styles';

const Home = () => {
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const featuredRooms = rooms?.filter((room) => room.featured);

  useEffect(() => {
    (async () => {
      setError(null);

      const allRooms: any = await fetchRooms(setError, '');
      setRooms(allRooms);
      setLoading(false);
    })();
  }, []);

  error && <ErrorModal error={error} message={error?.statusText} />;
  if (loading) return <Loading state={loading} />;

  return (
    <>
      <TopSection>
        <SearchBox />
        <HomeTopHeader />
        <Spacer />
      </TopSection>
      <LowerSection>
        <Poster />
        <Featured rooms={featuredRooms} />
        <PosterLower />
      </LowerSection>
    </>
  );
};

export default Home;
