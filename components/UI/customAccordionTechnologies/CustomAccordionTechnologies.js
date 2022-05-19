import React, { useState, useEffect } from 'react';

// type accordionList = Array<{title : string, imgSrc: string}>

export const CustomAccordionTechnologies = ({ accordionList }) => {
  const [blockOpenStatus, setBlockOpenStatus] = useState({});

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
  };

  return (
    <div className="accordions-pure-wrapper">
      {accordionList.map((item, index) => (
        <AccordionTab
          key={index}
          subTitle={item.subTitle}
          index={index}
          title={item.title}
          blockOpenStatus={blockOpenStatus}
          toggle={toggle(index)}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
};

const AccordionTab = ({
  index,
  title,
  blockOpenStatus,
  toggle,
  imgSrc,
  subTitle,
}) => {
  const arrow = (
    <svg
      width="32"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.127 15H17.627V4.5H15.627V15H5.12695V17H15.627V27.5H17.627V17H28.127V15Z" />
    </svg>
  );

  const classOfArrow = blockOpenStatus[`block${index}`]
    ? 'accordion-tab-numerable__arrow-container accordion-numerable-arrow_open'
    : 'accordion-tab-numerable__arrow-container accordion-numerable-arrow_close';

  return (
    <div key={index} className="accordion-technologies-wrapper">
      <div className="accordion-technologies__title">
        <h4 className="accordion-technologies__title-text">{title}</h4>
        <div className={classOfArrow}>
          <div className="small-arrow-container" onClick={toggle}>
            {arrow}
          </div>
        </div>
      </div>
      <div>
        <div className="accordion-technologies__image-wrapper">
          <div className="accordion-technologies__content">
            <p className="text-1">{subTitle}</p>
          </div>
          <div className={classOfArrow}>
            <div className="small-arrow-container" onClick={toggle}>
              {arrow}
            </div>
          </div>
        </div>
        <div
          className={
            blockOpenStatus[`block${index}`] ? 'content is-expanded' : 'content'
          }
        >
          <img className="accordion-technologies_img" src={imgSrc} />
        </div>
      </div>
    </div>
  );
};
