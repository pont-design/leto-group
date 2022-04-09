import { CustomAccordion } from '../../components/CustomAccordeon';
import { mockProductCard } from '../../assets/mockProductCard';

import cardImage from '../../public/img/product-image.svg';

export default function productCrad() {
  function addParametrs() {
    // for (let key in mockProductCard.indicators) {
    //   return (
    //     <p className="text1">
    //       {key}:{mockProductCard.indicators[key]}
    //     </p>
    //   );
    // }
    const indicatorsArr = Object.entries(mockProductCard.indicators);
    console.log(indicatorsArr);

    return indicatorsArr.map((el) => (
      <p>
        {el[0]}: {el[1]}
      </p>
    ));
  }

  return (
    <div className="product-card">
      <div className="product-card__main-info">
        <div className="product-card__image-block">
          <img
            className="product-card__image"
            src={cardImage.src}
            alt={mockProductCard.name}
          />
        </div>
        <div className="product-card__text-info">
          <p className="product-card__gost card-caption">
            {mockProductCard.gost}
          </p>
          <h5 className="product-card__product-name">{mockProductCard.name}</h5>
          <p className="product-card__product-desc text1">
            {mockProductCard.desc}
          </p>
          <div className="product-card__voluem-options">
            <p className="caption2">Объём</p>
          </div>
          <button>Оставить заявку</button>
          <CustomAccordion
            title={'Структура'}
            content={mockProductCard.structure}
          />
          <CustomAccordion
            title={'Описание'}
            content={mockProductCard.description}
          />
          <CustomAccordion
            title={'Упаковка'}
            content={mockProductCard.packaging}
          />
        </div>
      </div>
      <div className="product-card__parametrs">
        <h5>Показатели</h5>
        {addParametrs()}
      </div>
    </div>
  );
}
