import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// type list = Array<{imgSrc : string, description: JSX}>

export const CustomSlider = ({ list, swiperWrapperStyle, slideImgStyle, spaceBetween, slidesPerView, }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={swiperWrapperStyle}
    >
      {list.map((slide) => {
        return <SwiperSlide  >
          <img className={['slider-slide-img', slideImgStyle].join(' ')}
            src={slide.imgSrc}
          />
          {slide.description}
        </SwiperSlide>
      })}
    </Swiper>
  )
}
