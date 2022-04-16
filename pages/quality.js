import React from 'react'
import { CustomAccordion } from "../components/UI/customAccordion/CustomAccordion"
import { CustomLink } from "../components/UI/CustomLink/customLink"
import mockImage from '../public/images/ProductCard/mockBaseCard.jpg'

function Quality() {
  return (
    <section>
      <div className="quality-hero-text">
        <h3>
          Сертификация продукции по международным стандартам: для целей экспорта
        </h3>
      </div>
      <div className="quality-hero-img">
        <img src={mockImage.src} />
      </div>
      <div className="quality-certification-wrapper">
        <div className="quality-certification__imgs-wrapper">
          <h2></h2>
          <div className="quality-certification__imgs">
            <img src={mockImage.src} />
            <img src={mockImage.src} />
            <img src={mockImage.src} />
          </div>
        </div>
        <div className="quality-certification-description">
          <p className="caption-1">Аттестованный технологический процесс полного цикла и наличие двух лабораторий. </p>
          <p className="text-2">Высокое и стабильное качество продукции ГПЯ – самые современные технологии и стандарты работы позволяют как замещать импорт и развивать рынок продукции ГПЯ, так и экспортировать продукты на целевые экспортные рынки</p>
        </div>
      </div>
      <div className="quality-steps-wrapper">
        <div className='quality-steps-description'>
          <h2>Многоступенчатый контроль качества </h2>
          <CustomAccordion list={[{ title: '123', description: '321' }, { title: '456', description: '654' }]} />
        </div>
        <div className='quality-steps-img-wrapper'>
          <img src={mockImage.src} />
        </div>

      </div>
      <div className="quality-certification-integration">
        <p className="text-3">Международная сертификация и полная интеграция в технологическую цепочку Sanovo Technology group</p>
        <div className="quality-process-description">
          <div className="quality-process-description__link-block">
            <p className="text-1">
              Все входное сырье и готовая продукция тестируется в собственной аккредитованной лаборатории, реализованной по самым современным стандартам и требованиям
            </p>
            <CustomLink />
          </div>
          <div className="quality-process-description__text-block">
            <p className="text-1">
              Контроль и управление всеми технологическими процессами с одного компьютера, а так же контроль за всеми процессами дистанционно
            </p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Quality