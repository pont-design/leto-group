import React, { useState, useEffect } from 'react';

// type accordionList = Array<{title : string, content: string}>

export const CustomAccordion = ({ accordionList }) => {
  const [blockOpenStatus, setBlockOpenStatus] = useState({});
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const initialBlockStatuses = {};
    accordionList.forEach((_, index) => {
      initialBlockStatuses[`block${index}`] = false;
    });
    setBlockOpenStatus(initialBlockStatuses);
  }, [accordionList]);

  const toggle = (index) => () => {
    setBlockOpenStatus({
      [`block${index}`]: !blockOpenStatus[`block${index}`],
    });
    setIsActive(!isActive);
  };

  return (
    <div className="accordions-pure-wrapper">
      {accordionList.map((item, index) => (
        <AccordionTab
          index={index}
          title={item.title}
          blockOpenStatus={blockOpenStatus}
          toggle={toggle(index + 1)}
          content={item.desc}
        />
      ))}
    </div>
  );
};

const AccordionTab = ({ index, title, blockOpenStatus, toggle, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCurrentTab = () => {
    toggle();
    setIsActive(!isActive);
  };

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

  const classOfArrow = isActive
    ? 'accordion__arrow-container accordion-arrow_open'
    : 'accordion__arrow-container accordion-arrow_close';

  return (
    <div key={index} className="accordion-wrapper">
      <div className="accordion-tab-wrapper" onClick={toggleCurrentTab}>
        <h4 className="accordion__title">{title}</h4>
        <div className={classOfArrow}>
          <div className="arrow-container">{arrow}</div>
        </div>
      </div>
      <div
        className={
          blockOpenStatus[`block${index + 1}`]
            ? 'accordion-content is-opened'
            : 'accordion-content'
        }
      >
        <p className="text-1"> {content} </p>
      </div>
    </div>
  );
};
