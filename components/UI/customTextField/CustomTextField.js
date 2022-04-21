import React from 'react'

export const CustomTextField = ({ inputName, placeholder, isFullField, setCurrentFormData }) => {

  const customTextFieldStyles = `custom-text-field text1 ${isFullField && 'custom-text-field__full-field'}`

  return (
    <input placeholder={placeholder}
      className={customTextFieldStyles}
      onChange={(e) => { setCurrentFormData(e.target.value, inputName) }}
    />
  )
}
