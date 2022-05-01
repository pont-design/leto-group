import React from 'react';

import { CustomDropDown } from '../customDropDown/CustomDropDown';

import { filters } from '../../../assets/mockFilters';

import { amountDeclination } from "../../../utils/amountDeclination";
import { SliderWrapper } from "../../SliderWrapper/SliderWrapper";

export const CustomFilters = ({
  productWordsDeclination,
  filterValue,
  setFilterValue,
  filteredValue
}) => {

  const factorySliderBreakPoint = {
    gapxl: 1,
    gapXs: 16,
    gapMd: 16,
    gapXl: 16
  };

  const filtersElems = filters.map((el) => (
    <CustomDropDown
      key={el.title}
      label={el.title}
      buttonsLabels={el.categories}
      filterValue={filterValue}
      setFilterValue={setFilterValue}
    />
  ))

  const getAmountDeclination = (words) => {
    return `${words.length} ${amountDeclination(words.length, productWordsDeclination)}`;
  };

  return (
    <div className="filters-container">
      <div className="filter-container__filters">
        <p className="tag-text">Фильтры</p>
        <div className="filter-container-swiper-quality">
          <SliderWrapper
            listOfElems={filtersElems}
            breakpointsObj={factorySliderBreakPoint}
            swiperWrapperStyle='filter-container-swiper-quality'
          />
        </div>
      </div>

      <p className="tag-text filter-container__amount">
        {getAmountDeclination(filteredValue)}
      </p>
    </div>
  );
};
