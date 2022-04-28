import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const CustomAccordion = ({ list }) => {
  return (
    <div className="accordion-product-card__wrapper">
      {list.map((el) => {
        return (
          <AccordionTab2 key={el.title} title={el.title} content={el.desc} />
        );
      })}
    </div>
  );
};

const AccordionTab2 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const [showMessage, setShowMessage] = useState(false);

  const classOfArrow = isActive
    ? 'accordion-product-card__arrow-container accordion-product-card-arrow_open'
    : 'accordion-product-card__arrow-container accordion-product-card-arrow_close';

  const arrow = (
    <svg
      width="11"
      height="16"
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.453125 14.1067L6.55979 8L0.453125 1.88L2.33312 0L10.3331 8L2.33312 16L0.453125 14.1067Z" />
    </svg>
  );

  return (
    <div className="accordion-product-card__tab">
      <div>
        <p className="card-accard">{title}</p>
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="accordion-product-card__animation"
          unmountOnExit
        >
          <div>
            {isActive && (
              <div className="accordion-product-card__content">
                <p className="text-1">{content}</p>
              </div>
            )}
          </div>
        </CSSTransition>
      </div>
      <div className={classOfArrow}>
        <div
          onClick={() => {
            setIsActive(!isActive);
            setShowMessage(!showMessage);
          }}
        >
          {arrow}
        </div>
      </div>
    </div>
  );
};
