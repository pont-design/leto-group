import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// type list = Array<{slide : JSX}>

export const SliderWrapper = ({
  listOfElems,
  swiperWrapperStyle,
  breakpointsObj,
}) => {
  return (
    <div className="custom-swiper-wrapper-wrapper ">
      <Swiper
        className={swiperWrapperStyle}
        breakpoints={{
          320: {
            slidesPerView: breakpointsObj.slidesPerViewXs,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: breakpointsObj.slidesPerViewMd,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: breakpointsObj.slidesPerViewXl,
            spaceBetween: breakpointsObj.gapxl,
          },
        }}
      >
        {listOfElems.map((slide) => {
          return (
            <>
              <SwiperSlide>
                {slide}
              </SwiperSlide>
            </>
          );
        })}

      </Swiper>
    </div >
  );
};
