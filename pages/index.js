import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { SwiperSlide } from 'swiper/react';

import { StrapiServiceInstance } from '../Service/CMSAPI';

import { CustomLink } from '../components/UI/customLink/CustomLink';
import { CustomSlider } from '../components/UI/customSlider/CustomSlider';
import { CustomButton } from '../components/UI/customButton/CustomButton';
import { BaseCard } from '../components/BaseCard/BaseCard';

import mockImage from '../public/images/ProductCard/mockBaseCard.jpg';
import mainImg from '../public/images/StartPage/start-page-main-img.jpg';
import numbersImg from '../public/images/StartPage/start-page-numbers-img.jpg';
import sliderFirstImg from '../public/images/StartPage/start-page-slider-img1.jpg';
import qualitativeProduction from '../public/images/StartPage/start-page-qualitative-product.jpg';

import {
  startPageAnimation,
  startPageAnimationSecond,
} from '../assets/animations/animations';

export const getStaticProps = async () => {
  const res = await StrapiServiceInstance.getProducts();

  return {
    props: {
      items: res.data,
    },
    revalidate: StrapiServiceInstance.timeToRebuild,
  };
};

function index({ items }) {
  const catalogLink = '/catalog';

  function getGost(str) {
    if (str) {
      const gost = str.split(' ');
      return `${gost[0]} ${gost[1]}`;
    }
  }

  const productionSliderBreakPoint = {
    gapxl: 24,
    slidesPerViewXl: 3.2,
    slidesPerViewMd: 2.2,
    slidesPerViewXs: 1.2,
  };

  const factorySliderContent = [
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
  ];

  const factorySliderBreakPoint = {
    gapxl: 40,
    slidesPerViewXl: 1.5,
    slidesPerViewMd: 1.5,
    slidesPerViewXs: 1.2,
  };

  return (
    <section className="start-page">
      <div className="container">
        <div className="start-page__main-block">
          <h1 className="start-page__main-heading">
            Только <br /> натуральный продукт
          </h1>
          <div className="start-page__main-img-wrapper">
            <img
              className="start-page__main-img"
              src={mainImg.src}
              alt="main-img"
            />
          </div>
        </div>
        <div className="start-page__about-block">
          <div className="start-page__about-text">
            <p className="text-4">
              Международная сертификация и полная интеграция в технологическую
              цепочку Sanovo Technology group.
            </p>
          </div>
          <div className="start-page__about-caption">
            <p className="text-1">
              В арсенале завода «ЛЕТО» используется самое современное
              оборудование изготовленное датской компанией SANOVO, являющиеся
              мировым лидером в этой отрасли
            </p>
            <CustomLink label="Наши процессы" />
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimation}
          className="start-page__number-block"
        >
          <h2>Наши показатели</h2>
          <div className="start-pahe__number-img">
            <img src={numbersImg.src} alt="factory" />
          </div>
          <div className="start-page__number-text">
            <div className="start-page__number-item">
              <p className="text-2">
                При проектировании завода, учитывался самый передовой опыт
                европейских производителей яичных продуктов. Который основан на
                самых высоких требованиях пищевой безопасности.
              </p>
            </div>
            <div className="start-page__number-item">
              <p className="text-numbers">70 000 000 +</p>
              <p className="text-1 start-page__number-item-desc">
                Продаём упаковок в год
              </p>
            </div>
            <div className="start-page__number-item">
              <p className="text-numbers">3000 Га</p>
              <p className="text-1 start-page__number-item-desc">
                Рабочая площадь преприятия
              </p>
            </div>
            <div className="start-page__number-item">
              <p className="text-numbers">SANOVO</p>
              <p className="text-1 start-page__number-item-desc">
                Завод оборудован современной техникой датской компании
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={startPageAnimationSecond}
        className="start-page__production-block"
      >
        <h2 className="start-page__production-heading container">Продукция</h2>
        <CustomSlider
          breakpointsObj={productionSliderBreakPoint}
          swiperWrapperStyle="start-page__production-slider"
        >
          {items.map((el) => (
            <SwiperSlide key={el.id}>
              <Link href={`/productCard/${el.id}`}>
                <a>
                  <BaseCard
                    img={`${StrapiServiceInstance.baseURL}${el.attributes.img.data.attributes.formats.medium.url}`}
                    name={el.attributes.name}
                    gost={el.attributes.document}
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </CustomSlider>
        <div className="start-page__production-nav">
          <Link href={catalogLink}>
            <a>
              <CustomButton
                styles="start-page__button-nav"
                label="Вся продукция"
              />
            </a>
          </Link>
        </div>
      </motion.div>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimation}
          className="start-page__certification-wrapper"
        >
          <div className="start-page__certification__imgs-wrapper">
            <h2>Качественная продукция</h2>
            <div className="start-page__certification__imgs">
              <img
                className="start-page__certification__imgs_img"
                src={mockImage.src}
              />
              <img
                className="start-page__certification__imgs_img"
                src={mockImage.src}
              />
              <img
                className="start-page__certification__imgs_img"
                src={mockImage.src}
              />
            </div>
          </div>
          <div className="start-page__certification-description">
            <p className="text-2 start-page__certification-description_subtitle">
              Высокое и стабильное качество продукции ГПЯ – самые современные
              технологии и стандарты работы позволяют как замещать импорт и
              развивать рынок продукции ГПЯ, так и экспортировать продукты на
              целевые экспортные рынки
            </p>
            <CustomLink label="Наши процессы" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={startPageAnimationSecond}
        className="start-page__certification-slider"
      >
        <CustomSlider
          list={factorySliderContent}
          swiperWrapperStyle="start-page__certification-swiper-wrapper"
          swiperItemStyles="start-page__certification-swiper-item"
          slideImgStyle=""
          breakpointsObj={factorySliderBreakPoint}
        />
      </motion.div>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="start-page__last-block"
        >
          <div className="start-page__last-block-text">
            <h1>Мы производим качественный продукт</h1>
            <p className="text-1">
              Использование аттестованного технологического процесса полного
              цикла и наличие двух лабораторий позволяет осуществлять экспорт
              высококачественной продукции
            </p>
            <CustomLink label="Наши процессы" />
          </div>
          <motion.div
            variants={startPageAnimationSecond}
            className="start-page__last-block-img-wrapper"
          >
            <img src={qualitativeProduction.src} alt="factory" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default index;
