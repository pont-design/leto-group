import React from 'react'

export const CustomTextArea = ({ inputName, placeholder, isFullField, setCurrentFormData }) => {

  const textAreaStyles = `${isFullField && 'custom-text-area__full-field'} custom-text-area text-1 ' }`

  return (
    <textarea placeholder={placeholder}
      className={textAreaStyles}
      onChange={(e) => { setCurrentFormData(e.target.value, inputName) }}
    />
  )
}