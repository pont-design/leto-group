import React, { useState } from 'react';

import { CustomFilters } from '../../components/UI/CustomFilters/CustomFilters';
import { CustomRadioButton } from '../../components/UI/CustomRadioButton/CustomRadioButton';
import { BaseCard } from '../../components/BaseCard/BaseCard';

import { mockCatalog } from '../../assets/mockCatalog';
import mockBaseCard from '../../public/images/ProductCard/mockBaseCard.jpg';

export default function productCrad() {
  const [filterValue, setFilterValue] = useState({
    Категория: '',
    Консистенция: '',
  });

  const removeFilterImg = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.97398 8.00016L12.6673 11.6935V12.6668H11.694L8.00065 8.9735L4.30732 12.6668H3.33398V11.6935L7.02732 8.00016L3.33398 4.30683V3.3335H4.30732L8.00065 7.02683L11.694 3.3335H12.6673V4.30683L8.97398 8.00016Z"
        fill="#18181B"
      />
    </svg>
  );

  const downloadArrow = (
    <svg
      className="catalog-page__download-arrow"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
    </svg>
  );

  const removeFilter = (label) => {
    setFilterValue({ ...filterValue, [label]: '' });
    // console.log(label);
  };

  const addChosenFilter = () => {
    return Object.entries(filterValue).map((el) =>
      el[1] ? (
        <div
          key={el[0]}
          onClick={() => removeFilter(el[0])}
          className="catalog-page__chosen-filter"
        >
          <p className="tag-text">{el[1]}</p>
          {removeFilterImg}
        </div>
      ) : (
        ''
      )
    );
  };

  const filterProducts = () => {
    const applyiedFilters = Object.entries(filterValue).map((el) => el[1]);
    console.log(applyiedFilters);
    const test = [...mockCatalog];
    const test1 = test.filter(
      (el) =>
        el.Категория === filterValue.Категория ||
        el.Консистенция === filterValue.Консистенция
    );
    console.log(test1);
  };

  filterProducts();

  return (
    <section className="catalog-page">
      <div className="catalog-page__heading">
        <h1>Продукция</h1>
        <a className="catalog-page__download-link">
          {downloadArrow} Скачать каталог
        </a>
      </div>
      <CustomFilters
        productsAmount={28}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <div className="catalog-page__chosen-filters-list">
        {addChosenFilter()}
      </div>
      <div className="catalog-page__products-list">
        {mockCatalog.map((el) => (
          <BaseCard
            key={el.id}
            img={mockBaseCard.src}
            name={el.name}
            gost={el.gost}
          />
        ))}
      </div>
    </section>
  );
}
