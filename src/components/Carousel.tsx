import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';

interface CarouselProps {
  slides: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center">
            <img src={slide.image} alt={slide.title} className="w-[600px] h-[400px] object-cover" />
            <h2 className="text-xl font-bold mt-4">{slide.title}</h2>
            <p className="text-gray-700 dark:text-gray-400">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
