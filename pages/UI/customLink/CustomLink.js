import React, { useState } from 'react'
import arrowGreen from '../../../public/images/customLink/arrowGreen.svg'
import arrowRed from '../../../public/images/customLink/arrowRed.svg'

export const CustomLink = ({ label }) => {
  const [isHover, setIsHover] = useState(false);

  const arrow = isHover ? arrowRed.src : arrowGreen.src;
  const labelStyle = isHover ? 'customLink-label_hover' : 'customLink-label_default'
  return (
    <div className="d-flex" onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} >
      <h6 className={labelStyle}>{label}</h6>
      <img src={arrow} />
    </div>
  )
}
