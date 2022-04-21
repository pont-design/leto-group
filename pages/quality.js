import React from 'react'
import CustomAccordionNumerable from "../components/UI/customAccordionNumerable/CustomAccordionNumerable"
import { CustomLink } from "../components/UI/CustomLink/customLink"

import { CustomSlider } from '../components/UI/customSlider/CustomSlider'

import mockImage from '../public/images/ProductCard/mockBaseCard.jpg'

function Quality() {

  const description = <div className="certificates__slider-img-description">
    <p className="text-2">Lorem Ipsum</p>
    <p className="link-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>

  const list = [{ imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description },
  { imgSrc: mockImage.src, description }]


  const qualitySliderBreakPoint = {
    gapxl: 24,
    slidesPerViewXl: 4.2,
    slidesPerViewMd: 4.2,
    slidesPerViewXs: 4.2,
  };

  return (
    <>
      <section className="container">
        <div className="quality-hero-text">
          <h3 className="quality-hero-text__text">
            Сертификация продукции по международным стандартам: для целей экспорта
          </h3>
        </div>
        <div className="quality-hero-img">
          <img src={mockImage.src} />
        </div>
        <div className="quality-certification-wrapper">
          <div className="quality-certification__imgs-wrapper">
            <h2>Мы производим качественный продукт</h2>
            <div className="quality-certification__imgs">
              <img className="quality-certification__imgs_img" src={mockImage.src} />
              <img className="quality-certification__imgs_img" src={mockImage.src} />
              <img className="quality-certification__imgs_img" src={mockImage.src} />
            </div>
          </div>
          <div className="quality-certification-description">
            <p className="caption-1 quality-certification-description_title">Аттестованный технологический процесс полного цикла и наличие двух лабораторий. </p>
            <p className="text-2 quality-certification-description_subtitle">Высокое и стабильное качество продукции ГПЯ – самые современные технологии и стандарты работы позволяют как замещать импорт и развивать рынок продукции ГПЯ, так и экспортировать продукты на целевые экспортные рынки</p>
          </div>
        </div>
        <div className="quality-steps-wrapper">
          <div className='quality-steps-description'>
            <h2>Многоступенчатый контроль качества </h2>
            <CustomAccordionNumerable list={[{ title: 'Приезд фуры', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" }, { title: '456', content: '654' }]} />
          </div>
          <div className='quality-steps-img-wrapper'>
            <img src={mockImage.src} />
          </div>

        </div>
        <div className="quality-certification-integration">
          <div className="quality-certification-integration__hero-text">
            <p className="text-3">Международная сертификация и полная интеграция в технологическую цепочку Sanovo Technology group</p>
          </div>
          <div className="quality-process-description">
            <div className="quality-process-description__content">
              <div className="quality-process-description__content-linked">
                <p className="text-1">
                  Все входное сырье и готовая продукция тестируется в собственной аккредитованной лаборатории, реализованной по самым современным стандартам и требованиям
                </p>
                <CustomLink label='Наши процессы' />
              </div>
              <p className="text-1">
                Контроль и управление всеми технологическими процессами с одного компьютера, а так же контроль за всеми процессами дистанционно
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="certificates">
        <div className="container">
          <h2>Сертификаты</h2>
        </div>
        <div className="certificates__slider-wrapper">
          <CustomSlider list={list}
            swiperWrapperStyle='quality-swiper-wrapper'
            slideImgStyle='quality-swiper-slide'
            breakpointsObj={qualitySliderBreakPoint}
          />
        </div>
      </div >
    </>

  )
}

export default Quality