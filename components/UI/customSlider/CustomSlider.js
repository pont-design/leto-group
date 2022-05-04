import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// type list = Array<{imgSrc : string, description: JSX}>

export const CustomSlider = ({
  list,
  swiperWrapperStyle,
  swiperItemStyles,
  slideImgStyle,
  breakpointsObj,
  children,
}) => {
  return (
    <div className="custom-swiper-wrapper ">
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
        {children
          ? children
          : list.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className={swiperItemStyles}>
                    <img
                      className={['slider-slide-img', slideImgStyle].join(' ')}
                      src={slide.imgSrc}
                    />
                  </div>
                  {slide.description}
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};
