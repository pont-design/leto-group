import React, { useState } from 'react';

import accordionArrow from '../public/images/customAccordion/accordion-arrow.svg';

export const CustomAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
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
          <p className="text1">{content}</p>
        </div>
      )}
    </div>
  );
};
