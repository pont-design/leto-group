import React from 'react'
import mockImage from '../public/images/ProductCard/mockBaseCard.jpg'
import logoSanovo from '../public/images/Header/logoSanovo.svg'
import atexSertificate from '../public/images/Technologies/AtexSertificate.svg'
import ISOCertificate from '../public/images/Technologies/ISOCertificate.svg'

function technologies() {

  const equipment = {
    title: 'Наше оборудование', equipment: [
      { title: 'Оборудование 1', description: 'Нормализация сухого вещества в потоке, в жидком желтке (в автоматическом режиме)' },
      { title: 'Оборудование 2', description: 'Нормализация уровня Ph жидкого белка в потоке (в автоматическом режиме)' },
      { title: 'Оборудование 3', description: 'Дополнительная термическая обработка жидких яичных продуктов при помощи микроволнового модуля Weve Pasteur 6000, благодаря этому модулю, жидкие яичные продукты приобретают длительный срок хранения без использования консервантов' },
      { title: 'Оборудование 4', description: 'Ультрафиолетовое облучение куриных яиц в процессе разбивания, что позволяет снизить микробное загрязнение на поверхности скорлупы. В свою очередь влияет на увеличение срока годности жидких яичных продуктов без применения консервантов' }
    ]
  }

  const advantages = ['Высокий уровень компетенции Команды «Лето Групп»',
    'Объемы подтвержденные крупнейшими предприятиями пищевой промышленности',
    'Возможность выпуска пищевых продуктов ГПЯ',
    'Выстроенные по международным стандартам технологии и бизнес процессы ']

  return (
    <section className="technologies">
      <div className="technologies__hero">
        <h1>Технологии</h1>
      </div>
      <div className="technologies__hero-img">
        <img className='technologies__hero-img_img' src={mockImage.src} alt='image name' />
        <img className='technologies__hero-img_img' src={mockImage.src} alt='image name' />
      </div>
      <div className="technologies__quality-productivity">
        <div className="quality-productivity-logo">
          <img src={logoSanovo.src} alt='logo sanovo' />
        </div>
        <div className="quality-productivity-hero-text">
          <h2>Высокое качество и производительность</h2>
        </div>
        <div className="quality-productivity-hero-text__description">
          <p className="text-2">Оборудование для переработки яиц изготовлено датской компанией SANOVO, которые являются мировым лидером в этой отрасли.
            В арсенале завода «ЛЕТО» используется самое современное оборудование</p>
        </div>
        <div className="quality-productivity__sertificates">
          <img src={atexSertificate.src} alt='atex sertificate' />
          <img src={ISOCertificate.src} alt='ISO sertificate' />
        </div>
      </div>
      <div className="technologies__equipment">
        <h2>{equipment.title}</h2>
        {equipment.equipment.map((equipmentEl, i) => {
          return <div className={`technologies__equipment-wrapper ${i === 0 && 'technologies__equipment-wrapper_first-elem'}`} key={equipmentEl.title}>
            <img className="technologies__equipment_img" src={mockImage.src} alt={equipmentEl.title} />
            <div className="technologies__equipment-description">
              <h4 className="equipment-description-title">{equipmentEl.title}</h4>
              <p className="equipment-description-subtitle text-1">{equipmentEl.description}</p>
            </div>
          </div>
        })}
      </div>
      <div className="technologies-statistic">
        <div className="technologies-sales_small technologies-sales_small_sales">
          <p className="technologies-sales__heading_small text-numbers">70 000 000 +</p>
          <p className="technologies-sales__description_small text-1">Продаём упаковок в год</p>
        </div>
        <div className="technologies-sales_small technologies-sales_small_inovations">
          <p className="technologies-sales__heading_small text-numbers">SANOVO</p>
          <p className="technologies-sales__description_small text-1">Завод оборудован современной техникой датской компании</p>
        </div>
        <div className="technologies-sales_big technologies-sales_big_area">
          <p className="technologies-sales__heading_big text-numbers-big">3000 Га</p>
          <p className="technologies-sales__description_big text-1">Рабочая площадь преприятия</p>
        </div>
      </div>
      <div className="technologies__automation">
        <div className="technologies__automation_hero">
          <p className="text-3">Весь завод оснащен современной системой автоматизации, что позволяет осуществлять контроль с одного компьютера</p>
        </div>
      </div>
      <div className="technologies-advantages-wrapper">
        {advantages.map((advantage, i) => {
          return <div key={advantage} className="technologies-advantage">
            <div className="technologies-advantage_text">
              <h6 className="text-1">
                {advantage}
              </h6>
            </div>
            <p className="technologies-advantage_subtitle">{String(i + 1).padStart(2, '0')}</p>
          </div>
        })}
      </div>

    </section>
  )
}

export default technologies