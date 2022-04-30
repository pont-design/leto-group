import React from 'react'
import CustomAccordionNumerable from "../components/UI/customAccordionNumerable/CustomAccordionNumerable"
import { CustomAccordionPure } from "../components/UI/customAccordionPure/CustomAccordionPure"
import { CustomLink } from "../components/UI/CustomLink/customLink"

import { motion } from 'framer-motion';

import CustomAccordionNumerable from '../components/UI/customAccordionNumerable/CustomAccordionNumerable';
import { CustomLink } from '../components/UI/CustomLink/customLink';
import { CustomSlider } from '../components/UI/customSlider/CustomSlider';

import mockImage from '../public/images/ProductCard/mockBaseCard.jpg';
import mainImg from '../public/images/QualityPage/quality-main-img.jpg';
import controlImg from '../public/images/QualityPage/quality-control-img.jpg';

import { startPageAnimation } from '../assets/animations/animations';

function Quality() {
  const description = (
    <div className="certificates__slider-img-description">
      <p className="text-2">Lorem Ipsum</p>
      <p className="link-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );

  const list = [
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
    { imgSrc: mockImage.src, description },
  ];

  const qualitySliderBreakPoint = {
    gapxl: 24,
    slidesPerViewXl: 1,
    slidesPerViewMd: 2,
    slidesPerViewXs: 1,
  };

  return (
    <>
      <section className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="quality-hero-text"
        >
          <motion.h3
            variants={startPageAnimation}
            className="quality-hero-text__text"
          >
            Сертификация продукции по международным стандартам: для целей
            экспорта
          </motion.h3>
        </motion.div>
        <div className="quality-hero-img">
          <img src={mainImg.src} />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimation}
          className="quality-certification-wrapper"
        >
          <div className="quality-certification__imgs-wrapper">
            <h2>Мы производим <br /> качественный продукт</h2>
            <div className="quality-certification__imgs">
              <img
                className="quality-certification__imgs_img"
                src={mockImage.src}
              />
              <img
                className="quality-certification__imgs_img"
                src={mockImage.src}
              />
              <img
                className="quality-certification__imgs_img"
                src={mockImage.src}
              />
            </div>
          </div>
          <div className="quality-certification-description">
            <p className="caption-1 quality-certification-description_title">
              Аттестованный технологический процесс полного цикла и наличие двух
              лабораторий.{' '}
            </p>
            <p className="text-2 quality-certification-description_subtitle">
              Высокое и стабильное качество продукции ГПЯ – самые современные
              технологии и стандарты работы позволяют как замещать импорт и
              развивать рынок продукции ГПЯ, так и экспортировать продукты на
              целевые экспортные рынки
            </p>
          </div>
        </motion.div>
        <div className="quality-steps-wrapper">
          <div className="quality-steps-description">
            <h2>Многоступенчатый контроль качества </h2>
            <CustomAccordionPure accordionList={[{ title: '123', content: '321' }, { title: '123', content: '321' }, { title: '123', content: '321' }]} />
          </div >
          <div className="quality-steps-img-wrapper">
            <img src={controlImg.src} />
          </div>
        </div >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimation}
          className="quality-certification-integration"
        >
          <div className="quality-certification-integration__hero-text">
            <p className="text-3">
              Международная сертификация и полная интеграция в технологическую
              цепочку Sanovo Technology group
            </p>
          </div>
          <div className="quality-process-description">
            <div className="quality-process-description__content">
              <div className="quality-process-description__content-linked">
                <p className="text-1">
                  Все входное сырье и готовая продукция тестируется в
                  собственной аккредитованной лаборатории, реализованной по
                  самым современным стандартам и требованиям
                </p>
                <div className="quality-process-description__content-linked_link">
                  <CustomLink label="Наши процессы" />
                </div>
              </div>
              <p className="text-1">
                Контроль и управление всеми технологическими процессами с одного
                компьютера, а так же контроль за всеми процессами дистанционно
              </p>
              <div className="quality-process-description__content-linked_link-mobile">
                <CustomLink label="Наши процессы" />
              </div>
            </div>
          </div>
        </motion.div>
      </section >
      <div className="certificates">
        <div className="container">
          <h2>Сертификаты</h2>
        </div>
        <div className="certificates__slider-wrapper">
          <CustomSlider
            list={list}
            swiperWrapperStyle="quality-swiper-wrapper"
            slideImgStyle="quality-swiper-slide"
            breakpointsObj={qualitySliderBreakPoint}
          />
        </div>
      </div>
    </>
  );
}

export default Quality;
