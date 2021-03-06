import React, { useState, useEffect, useRef } from 'react';
import { CustomRadioButton } from '../CustomRadioButton/CustomRadioButton';

export const CustomDropDown = ({
  label,
  buttonsLabels,
  filterValue,
  setFilterValue,
  onClickOutside,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const closeDropDown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        closeDropDown();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  const handleRadioValue = (value) => {
    setFilterValue({ ...filterValue, [label]: value });
  };

  const arrowImg = (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.42 0.589965L6 5.16997L10.59 0.589966L12 1.99997L6 7.99997L-6.16331e-08 1.99997L1.42 0.589965Z"
        fill="black"
      />
    </svg>
  );

  const dropDownStatusStyle = isOpen
    ? 'drop-down__button_open'
    : 'drop-down__button_close';
  const arrowClasses = isOpen ? 'dropdown__label_up' : 'dropdown__label_down';
  const classesDropDownCustomRadioButton = isOpen
    ? 'custom-radio-button_open'
    : 'custom-radio-button_close';

  return (
    <div ref={ref} className="dropdown__wrapper">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`drop-down__button ${dropDownStatusStyle}`}
      >
        <div className={`d-flex dropdown__label ${arrowClasses}`}>
          <p className="tag-text dropdown__text">{label}</p>
          {arrowImg}
        </div>
      </div>
      <div className="drop-down__custmo-radio-wrapper">
        <div
          className={`drop-down__custom-radio ${classesDropDownCustomRadioButton}`}
        >
          <CustomRadioButton
            buttonsLabels={buttonsLabels}
            handleValue={handleRadioValue}
          />
        </div>
      </div>
    </div>
  );
};
