import React, { useState, useMemo, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { StrapiServiceInstance } from '../Service/CMSAPI';
import { StrapiHandlerInstance } from '../Service/CMSAPIHandler';

import { CustomFilters } from '../components/UI/customFilters/CustomFilters';
import { BaseCard } from '../components/BaseCard/BaseCard';

import Link from 'next/link';
import { FiltersValueContext } from "./_app";
import { motion } from 'framer-motion';
import { translitRuEn } from "../utils/translitGenerator";

export const getStaticProps = async () => {
  const res = await StrapiServiceInstance.getProducts();

  return {
    props: {
      items: res.data,
    },
    revalidate: StrapiServiceInstance.timeToRebuild,
  };
};

export default function Catalog({ items }) {
  const filtersValueController = useContext(FiltersValueContext);
  const productWordsDeclination = ['продукт', 'продукта', 'продуктов'];

  const createdCatalog = StrapiHandlerInstance.handleCatalog(items);

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
    const filteredCatalog = [...createdCatalog];
    const appliedFilters = Object.entries(filtersValueController.filterValue);

    for (let i = 0; i < appliedFilters.length; i++) {
      const filterKey = [appliedFilters[i][0]];
      if (filtersValueController.filterValue[filterKey]) {
        filteredCatalog = filteredCatalog.filter(
          (el) => el[filterKey] === filtersValueController.filterValue[filterKey]
        );
      }
    }
    return filteredCatalog;
  };

  const filteredValues = useMemo(() =>
    filterProducts(),
    [productWordsDeclination, filtersValueController.filterValue]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="catalog-page container">
        <div className="catalog-page__heading">
          <h1>Продукция</h1>
          <a className="catalog-page__download-link btn-link">
            {downloadArrow} Скачать каталог
          </a>
        </div>
        <CustomFilters
          productWordsDeclination={productWordsDeclination}
          filterValue={filtersValueController.filterValue}
          filteredValue={filteredValues}
          setFilterValue={filtersValueController.setFilterValue}
        />
        <AddChosenFilter
          inProp={inProp}
          filterValue={filtersValueController.filterValue}
          setInProp={setInProp}
          setFilterValue={filtersValueController.setFilterValue}
        />

        <TransitionGroup className="catalog-page__products-list">
          {filteredValues.map((el) => (
            <CSSTransition
              key={el.id}
              in={inProp}
              timeout={300}
              classNames="filter-transition"
              unmountOnExit
            >
              <Link href={`/productCard/${translitRuEn(el.name)}-${el.id}`}>
                <a>
                  <BaseCard
                    img={el.image}
                    name={el.name}
                    gost={el.gost}
                    imgStyles="catalog-page__products-item-img"
                  />
                </a>
              </Link>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
    </motion.div >
  );
}

const AddChosenFilter = ({ // TODO: separate component
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
