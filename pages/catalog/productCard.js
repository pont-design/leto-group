import { CustomAccordion } from '../../components/CustomAccordeon';
import { mockProductCard } from '../../assets/mockProductCard';

import { CustomButton } from '../UI/CustomButton/CustomButton';
import { CustomRadioButton } from '../UI/CustomRadioButton/CustomRadioButton';
import { BaseCard } from '../UI/BaseCard/BaseCard';

import mockProduct from '../../public/img/mockProduct.jpg';
import mockBaseCard from '../../public/img/mockBaseCard.jpg';

export default function productCrad() {
  function addParametrs() {
    const indicatorsArr = Object.entries(mockProductCard.indicators);

    return indicatorsArr.map((el) => (
      <div className="product-card__parametrs-item">
        <p className="product-card__parametr-name text1">{el[0]}</p>
        <p className="product-card__parametr-desc text1">{el[1]}</p>
      </div>
    ));
  }

  return (
    <div className="product-card">
      <div className="product-card__main-info">
        <div className="product-card__image-block">
          <img
            className="product-card__image"
            src={mockProduct.src}
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
            <p className="caption2 product-card__voluem-text">Объём</p>
            <CustomRadioButton buttonsLabels={['5 л.', '10 л.', '25 л.']} />
          </div>
          <CustomButton label={'Оставить заявку'} />
          <div className="product-card__accordion">
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
      </div>
      <div className="product-card__parametrs">
        <h5>Показатели</h5>
        {addParametrs()}
      </div>
      <div className="product-card__similar">
        <h3>Может такое возьмёте?</h3>
        <div className="product-card__similar-list">
          {mockProductCard.similar.map((el) => {
            return (
              <BaseCard img={mockBaseCard.src} name={el.name} gost={el.gost} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
