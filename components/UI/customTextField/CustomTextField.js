import React from 'react';

export const CustomTextField = ({
  inputName,
  placeholder,
  isFullField,
  setCurrentFormData,
  type,
}) => {
  const customTextFieldStyles = `custom-text-field custom-text-field__text ${
    isFullField && 'custom-text-field__full-field'
  }`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={customTextFieldStyles}
      onChange={(e) => {
        setCurrentFormData(e.target.value, inputName);
      }}
    />
  );
};
