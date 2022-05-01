import React from 'react'
import Link from 'next/link';
import { StrapiHandlerInstance } from "../../Service/CMSAPIHandler";

export const CustomBreadCrumb = ({ category, consistency }) => {

  const categoryAndConsistency = `${StrapiHandlerInstance.translateCategory(category)} 
  ${StrapiHandlerInstance.translateConsistency(consistency)}`

  const translatedCategory = StrapiHandlerInstance.translateCategory(category)

  return (
    <div className="custom-breadcrumb-wrapper">
      <Link href='/catalog'><a className="custom-breadcrumb-wrapper__link link-text">Каталог</a></Link>
      <p className="custom-breadcrumb-wrapper__link link-text">/</p>
      <Link href='/catalog'><a className="custom-breadcrumb-wrapper__link link-text">{translatedCategory}</a></Link>
      <p className="custom-breadcrumb-wrapper__link link-text">/</p>
      <Link href='/catalog'><a className="custom-breadcrumb-wrapper__link_active link-text">{categoryAndConsistency}</a></Link>
    </div>
  )
}
