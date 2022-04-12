import React from 'react'

export const CustomButton = ({ onClick, label }) => {

  return (
    <button className="btn-text custom-button" onClick={onClick}>{label}</button>
  )
}
