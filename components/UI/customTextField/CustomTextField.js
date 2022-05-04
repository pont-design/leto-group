import React from 'react';

export const CustomTextField = ({
  inputName,
  placeholder,
  isFullField,
  setCurrentFormData,
  type,
}) => {
  const customTextFieldStyles = `custom-text-field text-1 ${
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
