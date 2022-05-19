import React from 'react';

export const CustomTextArea = ({
  inputName,
  placeholder,
  isFullField,
  setCurrentFormData,
  test,
}) => {
  const textAreaStyles = `${
    isFullField && 'custom-text-area__full-field'
  } custom-text-area custom-text-area__text ' }`;

  return (
    <textarea
      placeholder={placeholder}
      className={textAreaStyles}
      onChange={(e) => {
        setCurrentFormData(e.target.value, inputName);
      }}
      {...test(inputName)}
    />
  );
};
