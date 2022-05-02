import { CustomAccordion } from '../../components/UI/CustomAccordion/CustomAccordion';

import { CustomButton } from '../../components/UI/customButton/CustomButton';
import { CustomRadioButton } from '../../components/UI/CustomRadioButton/CustomRadioButton';
import { BaseCard } from '../../components/BaseCard/BaseCard';
import { CustomSlider } from '../../components/UI/customSlider/CustomSlider';

import { StrapiServiceInstance } from '../../Service/CMSAPI';
import { getGostFromString } from '../../utils/getGostfromString';
import { CustomBreadCrumb } from '../../components/Breadcrumbs/CustomBreadCrumb';

import mockImg from '../../public/images/ProductCard/mockBaseCard.jpg';

export async function getStaticPaths() {
  const paths = await StrapiServiceInstance.getAllIds('productCard');

  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const id = context.params;

  const currentProduct = await StrapiServiceInstance.getProduct(id.productCard);

  let similarProducts = await StrapiServiceInstance.getSimilarProducts(
    currentProduct.data.attributes.category
  );

  console.log(currentProduct.data.attributes.img);

  const {
    name,
    document,
    structure,
    description,
    worth,
    storage_condition,
    category,
    consistency,
  } = currentProduct.data.attributes;

  // const indicators = currentProduct.data.attributes.other_info;

  const mediumImageUrl = currentProduct.data.attributes.img.data.attributes.url;

  const gost = getGostFromString(document);

  similarProducts = similarProducts.data.map((similarProduct) => {
    console.log(similarProduct);
    return {
      id: similarProduct.id,
      gost: `ГОСТ - 1234`,
      name: similarProduct.attributes.name,
      // src: similarProduct.attributes.img.data.attributes.url,
      src: mockImg.src,
    };
  });

  return {
    props: {
      // indicators,
      name,
      structure,
      description,
      worth,
      storage_condition,
      mediumImageUrl,
      gost,
      similarProducts,
      category,
      consistency,
    },
    revalidate: StrapiServiceInstance.timeToRebuild,
  };
};

export default function productCard({
  // indicators,
  name,
  gost,
  structure,
  description,
  worth,
  storage_conditions,
  mediumImageUrl,
  similarProducts,
  category,
  consistency,
}) {
  // function addParametrs() {
  //   const indicatorsArr = Object.entries(indicators);

  //   return (
  //     <div className="product-card__parametrs-table">
  //       {indicatorsArr.map((el) => (
  //         <div className="product-card__parametrs-item">
  //           <p className="product-card__parametr-name text-1">{el[0]}</p>
  //           <p className="product-card__parametr-desc text-1">{el[1]}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  const similarSliderContent = similarProducts.map((el) => {
    return {
      imgSrc: el.src,
      description: (
        <div className="product-card__similar-slider-desc">
          <p className="card-caption">{el.gost}</p>
          <h6>{el.name}</h6>
        </div>
      ),
    };
  });

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
      title: 'Упаковка',
      desc: storage_conditions,
    },
  ];

  return (
    <>
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
            <p className="product-card__gost card-caption">
              {`ГОСТ - ${gost}`}
            </p>
            <h5 className="product-card__product-name">{name}</h5>
            <p className="product-card__product-desc text-1">{worth}</p>
            <div className="product-card__voluem-options">
              <p className="caption-2 product-card__voluem-text">Объём</p>
              <CustomRadioButton buttonsLabels={['5 л.', '10 л.', '25 л.']} />
            </div>
            <CustomButton label="Оставить заявку" />
            <div className="product-card__accordion">
              <CustomAccordion list={productCardAccordionContent} />
            </div>
          </div>
        </div>
        <div className="product-card__parametrs">
          <h5>Показатели</h5>
          {/* {addParametrs()} */}
        </div>

        <div className="product-card__similar">
          <h3>Может такое возьмёте?</h3>
          <div className="product-card__similar-list">
            {similarProducts.map((el) => {
              return (
                <>
                  <BaseCard
                    key={el.id}
                    img={`${StrapiServiceInstance.baseURL}${el.src}`}
                    name={el.name}
                    gost={el.gost}
                  />
                </>
              );
            })}
          </div>
          <div className="product-card__similar-slider">
            <CustomSlider
              list={similarSliderContent}
              swiperWrapperStyle=""
              swiperItemStyles=""
              slideImgStyle=""
              breakpointsObj={similarSliderBreakPoint}
            />
          </div>
        </div>
      </section>
    </>
  );
}
