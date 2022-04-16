import React from 'react'
import { CustomAccordion } from "../components/UI/customAccordion/CustomAccordion"
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
        <CustomAccordion />
      </div>

    </section>
  )
}

export default Quality