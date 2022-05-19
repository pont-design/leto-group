import React, { useContext } from 'react'
import Link from 'next/link';
import { StrapiHandlerInstance } from "../../Service/CMSAPIHandler";
import { FiltersValueContext } from "../../pages/_app";
import { removeFilterSettings } from "../../utils/removeFilterSettings";


export const CustomBreadCrumb = ({ category, consistency }) => {

  const filtersValueController = useContext(FiltersValueContext);

  const categoryAndConsistency = `${StrapiHandlerInstance.translateCategory(category)} 
  ${StrapiHandlerInstance.translateConsistency(consistency)}`

  const translatedCategory = StrapiHandlerInstance.translateCategory(category)

  const deleteCategories = () => { //TODO : this function should be in context
    filtersValueController.setFilterValue(removeFilterSettings(filtersValueController.filterValue))
  }

  return (
    <div className="custom-breadcrumb-wrapper">
      <Link href='/catalog'><a onClick={deleteCategories} className="custom-breadcrumb-wrapper__link link-text">Каталог</a></Link>
      <p className="custom-breadcrumb-wrapper__link link-text">/</p>
      <Link href='/catalog'><a className="custom-breadcrumb-wrapper__link link-text">{translatedCategory}</a></Link>
      <p className="custom-breadcrumb-wrapper__link link-text">/</p>
      <Link href='/catalog'><a className="custom-breadcrumb-wrapper__link_active link-text">{categoryAndConsistency}</a></Link>
    </div >
  )
}
