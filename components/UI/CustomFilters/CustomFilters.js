import React, { useState } from 'react';

import { CustomDropDown } from '../customDropDown/CustomDropDown';

import { filters } from '../../../assets/mockFilters';

export const CustomFilters = ({
  productsAmount,
  filterValue,
  setFilterValue,
  setInProp,
  onClickOutside,
}) => {
  const test = () => {
    return filters.map((el) => (
      <CustomDropDown
        key={el.title}
        label={el.title}
        buttonsLabels={el.categories}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        setInProp={setInProp}
        onClickOutside={onClickOutside}
      />
    ));
  };

  const amountDeclination = (value, words) => {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  };

  const addAmountOfProducts = (amount) => {
    return `${productsAmount} ${amountDeclination(amount, [
      'продукт',
      'продукта',
      'продуктов',
    ])}`;
  };

  return (
    <div className="filters-container">
      <div className="filter-container__filters">
        <p className="tag-text">Фильтры</p> {test()}
      </div>
      <p className="tag-text filter-container__amount">
        {addAmountOfProducts(productsAmount)}
      </p>
    </div>
  );
};
