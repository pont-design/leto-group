import React, { useState } from 'react';

import { CustomDropDown } from '../customDropDown/CustomDropDown';

import { filters } from '../../../assets/mockFilters';

export const CustomFilters = ({
  productsAmount,
  filterValue,
  setFilterValue,
}) => {
  // function getFilterItem() {
  //   filters.map((el) => {
  //     const test = Object.entries(el);
  //     console.log(test);
  //     return test.map((filter) => {
  //       console.log(filter);
  //       return (
  //         <CustomDropDown
  //           label={filter[0]}
  //           buttonsLabels={filter[1]}
  //           handleValue={console.log(1)}
  //         />
  //       );
  //     });
  //   });
  // }

  const test = () => {
    return filters.map((el) => (
      <CustomDropDown
        key={el.title}
        label={el.title}
        buttonsLabels={el.categories}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    ));
  };

  return (
    <div className="filters-container">
      <div className="filter-container__filters">
        <p className="tag-text">Фильтры</p> {test()}
      </div>
      <p className="tag-text filter-container__amount">{productsAmount}</p>
    </div>
  );
};
