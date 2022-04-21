import React, { useState, useMemo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { CustomFilters } from '../../components/UI/customFilters/CustomFilters';
import { BaseCard } from '../../components/BaseCard/BaseCard';

import { mockCatalog } from '../../assets/mockCatalog';
import mockBaseCard from '../../public/images/ProductCard/mockBaseCard.jpg';

export default function Catalog() {
  const productWordsDeclination = ['продукт', 'продукта', 'продуктов'];

  const [filterValue, setFilterValue] = useState({
    Категория: '',
    Консистенция: '',
  });

  const [inProp, setInProp] = useState(false);

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

  const filterProducts = () => {
    const filteredCatalog = [...mockCatalog];
    const appliedFilters = Object.entries(filterValue);

    for (let i = 0; i < appliedFilters.length; i++) {
      const filterKey = [appliedFilters[i][0]];
      if (filterValue[filterKey]) {
        filteredCatalog = filteredCatalog.filter(
          (el) => el[filterKey] === filterValue[filterKey]
        );
      }
    }
    return filteredCatalog;
  };

  const filteredValues = useMemo(
    () => filterProducts(),
    [productWordsDeclination, filterValue]
  );

  return (
    <section className="catalog-page container">
      <div className="catalog-page__heading">
        <h1>Продукция</h1>
        <a className="catalog-page__download-link">
          {downloadArrow} Скачать каталог
        </a>
      </div>

      <CustomFilters
        productWordsDeclination={productWordsDeclination}
        filterValue={filterValue}
        filteredValue={filteredValues}
        setFilterValue={setFilterValue}
      />

      {
        <AddChosenFilter
          inProp={inProp}
          filterValue={filterValue}
          setInProp={setInProp}
          setFilterValue={setFilterValue}
        />
      }

      <TransitionGroup className="catalog-page__products-list">
        {filteredValues.map((el) => (
          <CSSTransition
            key={el.id}
            in={inProp}
            timeout={300}
            classNames="filter-transition"
            unmountOnExit
          >
            <BaseCard img={mockBaseCard.src} name={el.name} gost={el.gost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
}

const AddChosenFilter = ({
  inProp,
  filterValue,
  setInProp,
  setFilterValue,
}) => {
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

  const removeFilter = (label) => {
    setFilterValue({ ...filterValue, [label]: '' });
    setInProp(false);
  };

  return (
    <TransitionGroup className="catalog-page__chosen-filters-list">
      {Object.entries(filterValue).map(
        (el) =>
          el[1] && (
            <CSSTransition
              in={inProp}
              timeout={300}
              classNames="filter-transition"
              unmountOnExit
              key={el[0]}
            >
              <div
                onClick={() => removeFilter(el[0])}
                className="catalog-page__chosen-filter"
              >
                <p className="tag-text">{el[1]}</p>
                {removeFilterImg}
              </div>
            </CSSTransition>
          )
      )}
    </TransitionGroup>
  );
};
