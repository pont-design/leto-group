import React from 'react'
import PropTypes from 'prop-types';

export const CustomOutlinedButton = ({ onClick, label, isButtonSmall }) => {
  const customOutlinedButtonStyles = isButtonSmall ? 'btn-text-2 custom-outlined-button custom-outlined-button_small' :
    'btn-text custom-outlined-button custom-outlined-button_large'

  return (
    <button className={customOutlinedButtonStyles} onClick={onClick}>{label}</button>
  )
}

CustomOutlinedButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  isButtonSmall: PropTypes.bool.isRequired
};
