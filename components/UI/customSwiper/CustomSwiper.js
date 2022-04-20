import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// type list = Array<{imgSrc : string, description: JSX}>

export const CustomSwiper = ({ list, height, spaceBetween, slidesPerView, imgHeight }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      style={{ height }}
    >
      {list.map((slide) => {
        return <SwiperSlide  >
          <img style={{ objectFit: 'cover', height: imgHeight, width: '100%' }}
            src={slide.imgSrc}
          />
          {slide.description}
        </SwiperSlide>
      })}
    </Swiper>
  )
}
