import React, { useState } from 'react';

import Link from 'next/link';

import { SwiperSlide } from 'swiper/react';

import { StrapiServiceInstance } from '../../Service/CMSAPI';

import { motion } from 'framer-motion';

import { CustomAccordion } from '../../components/UI/CustomAccordion/CustomAccordion';
import { CustomButton } from '../../components/UI/customButton/CustomButton';
import { CustomRadioButton } from '../../components/UI/CustomRadioButton/CustomRadioButton';
import { BaseCard } from '../../components/BaseCard/BaseCard';
import { CustomSlider } from '../../components/UI/customSlider/CustomSlider';
import { CustomModal } from '../../components/UI/CustomModal/CustomModal';
import { CustomForm } from '../../components/UI/CustomForm/CustomForm';

import { CustomBreadCrumb } from '../../components/Breadcrumbs/CustomBreadCrumb';
import { deleteAllSymbolsExpectNumbers } from '../../utils/deleteAllSymbolsExpectNumbers';

export async function getStaticPaths() {
  const paths = await StrapiServiceInstance.getAllIds('productCard');

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const currentUrl = context.params;

  const currentProduct = await StrapiServiceInstance.getProduct(
    deleteAllSymbolsExpectNumbers(currentUrl.productCard)
  );

  let similarProducts = await StrapiServiceInstance.getSimilarProducts(
    currentProduct.attributes.category
  );

  const {
    name,
    structure,
    document,
    description,
    worth,
    storage_condition,
    category,
    consistency,
    other_info,
  } = currentProduct.attributes;

  const mediumImageUrl = currentProduct.attributes.img.data.attributes.url;

  similarProducts = similarProducts.filter(
    (similarProduct) => similarProduct.attributes.name !== name
  );

  similarProducts = similarProducts.map((similarProduct) => {
    return {
      id: similarProduct.id,
      gost: similarProduct.attributes.document,
      name: similarProduct.attributes.name,
      src: similarProduct.attributes.img.data.attributes.url,
    };
  });

  return {
    props: {
      name,
      structure,
      description,
      worth,
      storage_condition,
      mediumImageUrl,
      document,
      similarProducts,
      category,
      consistency,
      other_info,
    },
    revalidate: StrapiServiceInstance.timeToRebuild,
  };
};

export default function productCard({
  name,
  document,
  structure,
  description,
  worth,
  storage_condition,
  mediumImageUrl,
  similarProducts,
  category,
  consistency,
  other_info,
}) {
  const [modalActive, setModalActive] = useState(false);
  const [volumeValue, setVolumeValue] = useState('');

  similarProducts = similarProducts.slice(0, 3);

  function addParametrs() {
    return (
      <div className="product-card__parametrs-table">
        {other_info.map((el) => (
          <div className="product-card__parametrs-item" key={el.name}>
            <p className="product-card__parametr-name text-1">{el.name}</p>
            <p className="product-card__parametr-desc text-1">{el.value}</p>
          </div>
        ))}
      </div>
    );
  }

  const similarSliderBreakPoint = {
    gapxl: 20,
    slidesPerViewXl: 3.5,
    slidesPerViewMd: 2.5,
    slidesPerViewXs: 1.2,
  };

  const productCardAccordionContent = [
    {
      title: 'Структура',
      desc: structure,
    },
    {
      title: 'Описание',
      desc: description,
    },
    {
      title: 'Хранение',
      desc: storage_condition,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-card-breadcrumbs-container">
        <div className="container">
          <CustomBreadCrumb category={category} consistency={consistency} />
        </div>
      </div>
      <section className="product-card container">
        <div className="product-card__main-info">
          <div className="product-card__image-block">
            <img
              className="product-card__image"
              src={`${StrapiServiceInstance.baseURL}${mediumImageUrl}`}
              alt={name}
            />
          </div>
          <div className="product-card__text-info">
            <p className="product-card__gost card-caption">{document}</p>
            <h5 className="product-card__product-name">{name}</h5>
            <p className="product-card__product-desc text-1">{worth}</p>
            <div className="product-card__voluem-options">
              <p className="caption-2 product-card__voluem-text">Объём</p>
              <CustomRadioButton
                handleValue={setVolumeValue}
                buttonsLabels={['5 л.', '10 л.', '25 л.']}
              />
            </div>
            <CustomButton
              onClick={() => {
                setModalActive(true);
              }}
              label="Оставить заявку"
            />
            <div className="product-card__accordion">
              <CustomAccordion accordionList={productCardAccordionContent} />
            </div>
          </div>
        </div>
        <div className="product-card__parametrs">
          <h5>Показатели</h5>
          {addParametrs()}
        </div>

        <div className="product-card__similar">
          <h3>Похожие продукты</h3>
          <div className="product-card__similar-list">
            {similarProducts.map((el) => {
              return (
                <>
                  <Link href={`/productCard/${el.id}`}>
                    <a>
                      <BaseCard
                        key={el.id}
                        img={`${StrapiServiceInstance.baseURL}${el.src}`}
                        name={el.name}
                        gost={el.gost}
                        imgStyles="product-card__similar-item-img"
                      />
                    </a>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <div className="product-card__similar-slider">
        <CustomSlider
          swiperWrapperStyle=""
          swiperItemStyles=""
          slideImgStyle=""
          breakpointsObj={similarSliderBreakPoint}
        >
          {similarProducts.map((el) => (
            <SwiperSlide key={el.id}>
              <Link href={`/productCard/${el.id}`}>
                <a>
                  <BaseCard
                    img={`${StrapiServiceInstance.baseURL}${el.src}`}
                    name={el.name}
                    gost={el.gost}
                    imgStyles="product-card__similar-item-img"
                  />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </CustomSlider>
      </div>
      <CustomModal active={modalActive} setActive={setModalActive}>
        <h2>Оставьте заявку</h2>
        <p className="text-1">В ближайщее время наш менеджер свяжется с Вами</p>
        <CustomForm buttonLabel="Отправить" setActive={setModalActive} />
      </CustomModal>
    </motion.div>
  );
}
