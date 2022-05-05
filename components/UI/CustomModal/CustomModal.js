import React from 'react';

export const CustomModal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? 'modal modal__active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? 'modal__content modal__content-active' : 'modal__content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setActive(false)} className="modal__close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z"
              fill="#3F3F46"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
