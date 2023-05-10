'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface Props {
  images: string[]
  name: string
}

export default function Carousel({ images, name }: Props) {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <Swiper
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className="w-[320px] md:w-[340px] md:rounded-md"
    >
      {images.map((url) => (
        <SwiperSlide key={url}>
          <div className="relative h-[250px] md:h-[270px] overflow-hidden">
            <Image
              src={url}
              alt={`${name} illustrative image`}
              fill
              priority={url.includes('Fashion-Ecommerce-1')}
              sizes="320px, (min-width: 768px) 340px"
              className="object-cover rounded-t-md md:rounded-md"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
