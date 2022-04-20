import React from 'react';

function emailtest() {
  const equipment = {
    title: 'Наше оборудование',
    equipment: [
      {
        title: 'Оборудование 1',
        description:
          'Нормализация сухого вещества в потоке, в жидком желтке (в автоматическом режиме)',
      },
      {
        title: 'Оборудование 2',
        description:
          'Нормализация уровня Ph жидкого белка в потоке (в автоматическом режиме)',
      },
      {
        title: 'Оборудование 3',
        description:
          'Дополнительная термическая обработка жидких яичных продуктов при помощи микроволнового модуля Weve Pasteur 6000, благодаря этому модулю, жидкие яичные продукты приобретают длительный срок хранения без использования консервантов',
      },
      {
        title: 'Оборудование 4',
        description:
          'Ультрафиолетовое облучение куриных яиц в процессе разбивания, что позволяет снизить микробное загрязнение на поверхности скорлупы. В свою очередь влияет на увеличение срока годности жидких яичных продуктов без применения консервантов',
      },
    ],
  };

  return (
    <section className="technologies">
      <div className="technologies__hero">
        <h1>ПОШТА</h1>
      </div>
      <div className="technologies__hero-img">
        <h2>Введите сообщение:</h2>
        <div className="form">
          <form>
            <input style={{ border: '1px solid red' }} />
            <br />
            <button style={{ border: '1px solid red' }} type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default emailtest;
