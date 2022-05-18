import React from 'react';

export const CustomTextField = ({
  inputName,
  placeholder,
  isFullField,
  setCurrentFormData,
  type,
  test,
  style,
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
      {...test(inputName, { required: true })}
      style={style}
    />
  );
};
