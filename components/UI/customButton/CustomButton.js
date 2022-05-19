import React from 'react';

export const CustomButton = ({ onClick, label, styles, type, style }) => {
  const customButtonStyles = `btn-text custom-button ${styles ? styles : ''}`;

  return (
    <button
      type={type ? type : 'button'}
      className={customButtonStyles}
      onClick={onClick}
      style={style ? style : null}
    >
      {label}
    </button>
  );
};
