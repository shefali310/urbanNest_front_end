
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HotelType } from "../../../back-end/src/models/hotel";

interface CarouselProps {
  hotels: HotelType[];
}

const Carousel: React.FC<CarouselProps> = ({ hotels }) => {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };

  console.log('Hotels:', hotels);

  return (
    <div className='content'>
      <Slider {...sliderSettings}>
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-item">
            <h2>{hotel.name}</h2>
            <img alt={hotel.name} src={hotel.imageUrls[0]} width="100" height="100" />
            <p>{hotel.description}</p>
           
           
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
