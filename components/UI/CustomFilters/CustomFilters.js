import React from 'react';

import { CustomDropDown } from '../customDropDown/CustomDropDown';

import { filters } from '../../../assets/mockFilters';

import { amountDeclination } from "../../../utils/amountDeclination";

export const CustomFilters = ({
  productWordsDeclination,
  filterValue,
  setFilterValue,
  filteredValue
}) => {

  const getAmountDeclination = (words) => {
    return `${words.length} ${amountDeclination(words.length, productWordsDeclination)}`;
  };

  return (
    <div className="filters-container">
      <div className="filter-container__filters">
        <p className="tag-text">Фильтры</p> {
          filters.map((el) => (
            <CustomDropDown
              key={el.title}
              label={el.title}
              buttonsLabels={el.categories}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
            />
          ))}
      </div>
      <p className="tag-text filter-container__amount">
        {getAmountDeclination(filteredValue)}
      </p>
    </div>
  );
};
