import React from 'react';
import Link from 'next/link';

import { CustomLink } from '../components/UI/customLink/CustomLink';
import { CustomSlider } from '../components/UI/customSlider/CustomSlider';
import { CustomButton } from '../components/UI/customButton/CustomButton';

import mockProduct from '../public/images/ProductCard/mockProduct.jpg';
import { mockCatalog } from '../assets/mockCatalog';
import mockImage from '../public/images/ProductCard/mockBaseCard.jpg';

function index() {
  const productionSliderContent = mockCatalog.map((el) => ({
    imgSrc: mockProduct.src,
    description: (
      <div className="start-page__production-slider-text">
        <p className="card-caption">{el.gost}</p>
        <h6 className="start-page__production-item-name">{el.name}</h6>
      </div>
    ),
  }));

  const productionSliderBreakPoint = {
    gapxl: 24,
    slidesPerViewXl: 3.2,
    slidesPerViewMd: 2.2,
    slidesPerViewXs: 1.2,
  };

  const factorySliderContent = [
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
    { imgSrc: mockProduct.src },
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
            Только натуральный продукт
          </h1>
          <div className="start-page__main-img-wrapper">
            <img
              className="start-page__main-img"
              src={mockProduct.src}
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
        <div className="start-page__number-block">
          <h2>Наши показатели</h2>
          <div className="start-pahe__number-img">
            <img src={mockProduct.src} alt="factory" />
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
        </div>
      </div>
      <div className="start-page__production-block">
        <h2 className="start-page__production-heading container">Продукция</h2>
        <CustomSlider
          list={productionSliderContent}
          breakpointsObj={productionSliderBreakPoint}
          swiperWrapperStyle="start-page__production-slider"
        />
        <div className="start-page__production-nav">
          <Link href="/catalog/catalog">
            <CustomButton
              styles="start-page__button-nav"
              label="Вся продукция"
            />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="start-page__certification-wrapper">
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
        </div>
      </div>
      <div className="start-page__certification-slider">
        <CustomSlider
          list={factorySliderContent}
          swiperWrapperStyle="start-page__certification-swiper-wrapper"
          swiperItemStyles="start-page__certification-swiper-item"
          slideImgStyle=""
          breakpointsObj={factorySliderBreakPoint}
        />
      </div>
      <div className="container">
        <div className="start-page__last-block">
          <div className="start-page__last-block-text">
            <h1>Мы производим качественный продукт</h1>
            <p className="text-1">
              Использование аттестованного технологического процесса полного
              цикла и наличие двух лабораторий позволяет осуществлять экспорт
              высококачественной продукции
            </p>
            <CustomLink label="Наши процессы" />
          </div>
          <div className="start-page__last-block-img-wrapper">
            <img src={mockProduct.src} alt="factory" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
