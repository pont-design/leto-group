import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const SliderWrapper = ({
  listOfElems,
  swiperWrapperStyle,
  breakpointsObj,
}) => {
  return (
    <Swiper
      className={swiperWrapperStyle}
      breakpoints={{
        320: {
          spaceBetween: breakpointsObj.gapXs,
        },
        768: {
          spaceBetween: breakpointsObj.gapMd,
        },
        1280: {
          spaceBetween: breakpointsObj.gapXl,
        },
      }}
    >
      {listOfElems.map((slide) => {
        return (
          <SwiperSlide >
            {slide}
          </SwiperSlide>
        );
      })}
    </Swiper >

  );
};
