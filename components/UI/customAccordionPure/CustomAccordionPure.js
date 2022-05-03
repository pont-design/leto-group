import React, { useState, useEffect } from 'react'

// type accordionList = Array<{title : string, content: string}>

export const CustomAccordionPure = ({ accordionList }) => {

  const [blockOpenStatus, setBlockOpenStatus] = useState({})
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const initialBlockStatuses = {}
    accordionList.forEach((_, index) => {
      initialBlockStatuses[`block${index}`] = false
    });
    setBlockOpenStatus(initialBlockStatuses)
  }, [accordionList])

  const toggle = (index) => () => {
    setBlockOpenStatus({ [`block${index}`]: !blockOpenStatus[`block${index}`] });
    setIsActive(!isActive)
  }



  return (
    <div className="accordions-pure-wrapper">
      {accordionList.map((item, index) => (
        <AccordionTab
          index={index}
          title={item.title}
          blockOpenStatus={blockOpenStatus}
          toggle={toggle(index + 1)}
          content={item.content}
        />
      ))
      }
    </div >
  )
}

const AccordionTab = ({ index, title, blockOpenStatus, toggle, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCurrentTab = () => {
    toggle();
    setIsActive(!isActive)
  }

  const arrow = <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.127 15H17.627V4.5H15.627V15H5.12695V17H15.627V27.5H17.627V17H28.127V15Z" />
  </svg>

  const classOfArrow = isActive ?
    'accordion-tab-numerable__arrow-container accordion-numerable-arrow_open' :
    'accordion-tab-numerable__arrow-container accordion-numerable-arrow_close'

  return (
    <div key={index} className="accordion-pure-wrapper">
      <h4>{String(index + 1).padStart(2, 0)}</h4>
      <div>
        <h4 className="accordion-pure__title">
          {title}
        </h4>
        <div className={blockOpenStatus[`block${index + 1}`] ? 'content is-expanded' : 'content'} >
          <p className="text-1"> {content} </p>
        </div>
      </div>
      <div className={classOfArrow}>
        <div className="small-arrow-container" onClick={toggleCurrentTab}>
          {arrow}
        </div>
      </div>
    </div>
  )
}
