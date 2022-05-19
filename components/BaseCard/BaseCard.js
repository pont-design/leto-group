import React from 'react';

export const BaseCard = ({ img, name, gost, imgStyles }) => {
  return (
    <div className="base-card">
      <div className={`base-card__img ${imgStyles}`}>
        <img src={img} alt={name} />
      </div>
      <div className="base-card__text">
        <p className="card-caption base-card__gost">{gost}</p>
        <strong>
          <h6 className="base-card__name">{name}</h6>
        </strong>
      </div>
    </div>
  );
};
