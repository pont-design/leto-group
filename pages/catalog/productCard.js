import { CustomAccordion } from '../../src/components/CustomAccordeon/CustomAccordeon';
import { mockProductCard } from '../../assets/mockProductCard';

import cardImage from '../../public/img/product-image.svg';

export default function productCrad() {
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
            title={'Test'}
            content={'TETETETGGFGHFFHJFDJFJFGJ'}
          />
        </div>
      </div>
    </div>
  );
}
