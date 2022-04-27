import React from 'react'
import { CustomForm } from "../components/UI/customForm/customForm"

function Contacts() {

  const contactsDepartments = [{
    department: 'Любые воросы',
    number: '+7 495 147 01 99',
    email: 'info@egg-go.ru'
  },
  {
    department: 'Отдел продаж',
    number: '+7 911 441 32 07',
    email: 'kremeshkova@egg-go.ru'
  },
  {
    department: 'Отдел закупок',
    number: '+7 985 488 29 18',
    email: 'zaharochkina@egg-go.ru'
  },
  {
    department: 'Отдел кадров',
    number: '+7 965 195 27 09',
    email: 'vasileva@egg-go.ru'
  },
  ]

  return (
    <section className="container" >
      <div className="contacts-hero">
        <h1>Есть столько <br />
          причин связаться</h1>
      </div>
      <div className="contacts-communication-links-wrapper">
        <p className="contacts-communication-links__title text-4">01017, Тульская обл., Заокский р-н, п. Сосновый, стр. 1</p>
        <div className="contacts-communication-links">
          {contactsDepartments.map(department => {
            return <div className="contacts-communication-links__block" key={department.number}>
              <p className="caption-1">
                {department.department}
              </p>
              <a className="contacts-communication-links__block_number text-1" href={`tel:${department.number}`}>{department.number}</a>
              <div>
                <a className="contacts-communication-links__block_email text-1" href={`mailto:${department.email}`}>{department.email}</a>
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="contacts-form-wrapper">
        <div className="contacts-form__form">
          <h4>Оставьте заявку</h4>
          <p className="text-1">We're proud to be an accredited 'Australian Trusted Trader'.
            This internationally recognised, Australian Government accreditation. </p>
          <CustomForm buttonLabel='Отправить' />
        </div>
        <iframe className='map-iframe-wrapper' src="https://yandex.ru/map-widget/v1/?um=constructor%3A3c9f7210935d1d610768574acf1c7a0c8c9d247c1ab24aaf271e60590eeeb41f&amp;source=constructor" frameborder="0"></iframe>
      </div>
      <div>
      </div>
    </section >
  )
}

export default Contacts