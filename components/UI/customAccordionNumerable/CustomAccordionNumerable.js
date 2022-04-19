import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// type list = Array<{title : string, description: string}>

export const CustomAccordionNumerable = ({ list }) => {

  return (
    <div className="accordion-numerable-wrapper" >
      {list.map((el, i) => {
        return <AccordionTab
          key={el.title}
          title={el.title}
          content={el.content}
          number={String(i + 1).padStart(2, 0)}
        />
      })}
    </div>
  );
};

const AccordionTab = ({ title, content, number }) => {
  const [isActive, setIsActive] = useState(false);

  const [showMessage, setShowMessage] = useState(false);

  const classOfArrow = isActive ?
    'accordion-tab-numerable__arrow-container accordion-numerable-arrow_open' :
    'accordion-tab-numerable__arrow-container accordion-numerable-arrow_close'

  const arrow = <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.127 15H17.627V4.5H15.627V15H5.12695V17H15.627V27.5H17.627V17H28.127V15Z" />
  </svg>


  return (
    <div className="accordion-tab-numerable">
      <div className="accordion-tab-numerable__number-wrapper">
        <h4 className="accordion-tab-numerable__number">{number}</h4>
      </div>
      <div className="accordion-tab-numerable__content-wrapper">
        <h4 className="accordion-tab-numerable__title">{title}</h4>
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="accordion-tab-numerable__animation"
          unmountOnExit
        >
          <div>
            {isActive && (
              <div className='accordion-tab-numerable__content'>
                <p className="text-1">{content}</p>
              </div>
            )
            }
          </div>
        </CSSTransition>
      </div>
      <div className={classOfArrow} onClick={() => { setIsActive(!isActive); setShowMessage(!showMessage) }}>
        {arrow}
      </div>
    </div>
  )
}

export default CustomAccordionNumerable