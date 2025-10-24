
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import plant1 from '../../assets/image1.jpeg'; 
import plant2 from '../../assets/image2.jpg';
import plant3 from '../../assets/image3.webp';
import plant4 from '../../assets/image4.jpeg';

const PlantSlider = () => {
  const slides = [
    {
        image: plant1,
        slogan: 'Plant trees, save the environment.',
      },
      {
        image: plant2,
        slogan: 'Take care of nature, protect life.',
      },
      {
        image: plant3,
        slogan: 'Save plants for a green planet.',
      },
      {
        image: plant4,
        slogan: 'Every tree is a hope.',
      },
  ];

  return (
    <div className='w-11/12 mx-auto py-3 '>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ border: '2px solid #228B22', borderRadius: '10px' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={slide.image}
                alt={`Plant ${index + 1}`}
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <p style={{ marginTop: '20px', fontSize: '24px', color: '#228B22', fontWeight: 'bold' }}>
                {slide.slogan}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlantSlider;