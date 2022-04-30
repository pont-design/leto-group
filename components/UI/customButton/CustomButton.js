import React from 'react'

export const CustomButton = ({ onClick, label, styles }) => {

  const customButtonStyles = `btn-text custom-button ${styles ? styles : ''}`

  return (
    <button className={customButtonStyles} onClick={onClick}>{label}</button>
  )
}
