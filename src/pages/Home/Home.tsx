import { useState, useEffect } from 'react';
import { fetchRooms } from '../../apis/fetchRooms';
import { RoomType } from '../../types/roomType';
import { Head, SearchBox, ErrorModal, Loading } from '../../components';
import {
  HomeTopHeader,
  Poster,
  Featured,
  PosterLower,
  BannerBottom,
} from '../../containers';
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
      <Head
        title="Hotel and Accomodations booking site"
        description="Book hotel, bed & breakfast, cabin, apartments and cabins within Bergen area."
      />
      <TopSection>
        <SearchBox />
        <HomeTopHeader />
        <Spacer />
      </TopSection>
      <LowerSection>
        <Poster />
        <Featured rooms={featuredRooms} />
        <PosterLower />
        <BannerBottom />
      </LowerSection>
    </>
  );
};

export default Home;
