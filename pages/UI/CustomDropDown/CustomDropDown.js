import React, { useState } from 'react'
import upArrow from '../../../public/images/CustomDropDown/arrowUp.svg'
import downArrow from '../../../public/images/CustomDropDown/arrowDown.svg'
import { CustomRadioButton } from "../CustomRadioButton/CustomRadioButton"

export const CustomDropDown = ({ label, buttonsLabels, handleValue }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [radioValue, setRadioValue] = useState('')

  const handleRadioValue = (value) => {
    setRadioValue(value)
    handleValue(value)
  }

  console.log(isOpen)
  const dropDownStatusStyle = isOpen ? 'drop-down__button_open' : 'drop-down__button_close'
  const arrowImg = isOpen ? upArrow.src : downArrow.src

  return (
    <div className="dropdown__wrapper">
      <div onClick={() => { setIsOpen(!isOpen) }} className={`drop-down__button ${dropDownStatusStyle}`}>
        <div className="d-flex">
          <p className="tag-text">{label}</p>
          <img className="drop-down__arrow-img" class src={arrowImg} />
        </div>
      </div>
      <div className="drop-down__custom-radio">
        {isOpen ? <CustomRadioButton buttonsLabels={buttonsLabels} handleValue={handleRadioValue} /> : ''}
      </div>
    </div>
  )
}
