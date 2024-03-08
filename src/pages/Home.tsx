
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as apiClient from '../api-client';
import Carousel from '../components/Carousel'; // Assuming you have a Carousel component
import { HotelType } from '../../../back-end/src/models/hotel';


const Home = () => {
  const { hotelId } = useParams();


  const { data: hotel, isLoading, isError } = useQuery<HotelType, Error>(
    ['fetchMyHotelById', hotelId],
    () => apiClient.fetchMyHotelById(hotelId || ''),
    {
      enabled: !!hotelId,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !hotel) {
    return <p>Error loading hotel data.</p>;
  }

  return (
    <div>
      <h1>{hotel.name}</h1>
      <Carousel hotels={[hotel]} />
      {/* Additional hotel details or actions can be added here */}
    </div>
  );
};

export default Home;
