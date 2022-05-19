import React, { useState } from 'react';

export const CustomRadioButton = ({ buttonsLabels, handleValue }) => {
  const [value, setValue] = useState(buttonsLabels[buttonsLabels.length - 1]);

  function handleClick(currentValue) {
    handleValue(currentValue);
    setValue(currentValue);
  }

  return (
    <div>
      <div className="form-radio-btn tag-text">
        {buttonsLabels.map((buttonLabel) => {
          return (
            <div key={buttonLabel}>
              <input
                id={buttonLabel}
                type="radio"
                name="radio"
                value={buttonLabel}
              />
              <label
                onClick={() => {
                  handleClick(buttonLabel);
                }}
                htmlFor={buttonLabel}
              >
                {buttonLabel}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
