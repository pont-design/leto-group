import React from 'react'

function technologies() {

  const equipment = [
    { title: 'Оборудование 1', description: 'Нормализация сухого вещества в потоке, в жидком желтке (в автоматическом режиме)' },
    { title: 'Оборудование 2', description: 'Нормализация уровня Ph жидкого белка в потоке (в автоматическом режиме)' },
    { title: 'Оборудование 3', description: 'Дополнительная термическая обработка жидких яичных продуктов при помощи микроволнового модуля Weve Pasteur 6000, благодаря этому модулю, жидкие яичные продукты приобретают длительный срок хранения без использования консервантов' },
    { title: 'Оборудование 4', description: 'Ультрафиолетовое облучение куриных яиц в процессе разбивания, что позволяет снизить микробное загрязнение на поверхности скорлупы. В свою очередь влияет на увеличение срока годности жидких яичных продуктов без применения консервантов' }
  ]

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
        <img></img>
        <img></img>
      </div>
      <div className="technologies__quality-productivity">

      </div>
      <div className="technologies__equipment">
        <h2>Наше оборудование</h2>
        <div>
          <img></img>
          <div className="technologies__equipment-description">
            <h4 className="technologies__equipment-description-title"></h4>
            <p className="technologies__equipment-description-title text-1"></p>
          </div>
        </div>
      </div>
      <div className="technologies-statistic">
        <div className="technologies-sales_small">
          <p className="technologies-sales__heading_small"></p>
          <p className="technologies-sales__description_small"></p>
        </div>
        <div className="technologies-sales_small">
          <p className="technologies-sales__heading_small"></p>
          <p className="technologies-sales__description_small"></p>
        </div>
        <div className="technologies-sales_big">
          <p className="technologies-sales__heading_big"></p>
          <p className="technologies-sales__description_big"></p>
        </div>
      </div>
      <div className="technologies__automation">
        <p className="text-3">Весь завод оснащен современной системой автоматизации, что позволяет осуществлять контроль с одного компьютера</p>
      </div>
      <div className="technologies-advantages">
        <div className="technologies-advantages__hero-text">
          <p className="text-1"></p>
        </div>
        <div className="technologies-advantages_number">
          <h6>

          </h6>
        </div>
      </div>

    </section>
  )
}

export default technologies