import React, { useState } from 'react';

import accordionArrow from '../../../public/images/CustomAccordion/accordion-arrow.svg';

export const CustomAccordion = ({ title, content, style }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" style={style}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          <p className="card-accard">{title}</p>
        </div>
        <div>
          <img
            className={isActive ? 'accordion-arrow' : ''}
            src={accordionArrow.src}
            alt="arrow"
          />
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <p className="text-1">{content}</p>
        </div>
      )}
    </div>
  );
};
