import React from 'react';

import { motion } from 'framer-motion';

import { StatisticBlock } from '../components/StatisticBlock/StatisticBlock';

import mockImage from '../public/images/ProductCard/mockBaseCard.jpg';
import logoSanovo from '../public/images/Header/logoSanovo.svg';
import atexSertificate from '../public/images/Technologies/AtexSertificate.svg';
import ISOCertificate from '../public/images/Technologies/ISOCertificate.svg';
import mainBlockFirst from '../public/images/Technologies/technologies-main-block-first-img.jpg';
import mainBlockSecond from '../public/images/Technologies/technologies-main-block-second.jpg';
import {
  startPageAnimation,
  startPageAnimationSecond,
} from '../assets/animations/animations';
import { CustomAccordionTechnologies } from "../components/UI/customAccordionTechnologies/CustomAccordionTechnologies";

function technologies() {
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

  const advantages = [
    'Высокий уровень компетенции Команды «Лето Групп»',
    'Объемы подтвержденные крупнейшими предприятиями пищевой промышленности',
    'Возможность выпуска пищевых продуктов ГПЯ',
    'Выстроенные по международным стандартам технологии и бизнес процессы ',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="technologies container">
        <div className="technologies__hero">
          <h1>Технологии</h1>
        </div>
        <div className="technologies__hero-img">
          <img
            className="technologies__hero-img_img "
            src={mainBlockFirst.src}
            alt="image name"
          />
          <img
            className="technologies__hero-img_img"
            src={mainBlockSecond.src}
            alt="image name"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimationSecond}
          className="technologies__quality-productivity"
        >
          <div className="quality-productivity-logo">
            <img
              className="quality-productivity-logo__sanovo-logo"
              src={logoSanovo.src}
              alt="logo sanovo"
            />
          </div>
          <div className="quality-productivity-hero-text">
            <h2>Высокое качество и производительность</h2>
          </div>
          <div className="quality-productivity-hero-text__description">
            <p className="text-2">
              Оборудование для переработки яиц изготовлено датской компанией
              SANOVO, которые являются мировым лидером в этой отрасли. В арсенале
              завода «ЛЕТО» используется самое современное оборудование
            </p>
          </div>
          <div className="quality-productivity__sertificates">
            <div className="quality-productivity__sertificates_atex">
              <img src={atexSertificate.src} alt="atex sertificate" />
            </div>
            <div className="quality-productivity__sertificates_iso">
              <img src={ISOCertificate.src} alt="ISO sertificate" />
            </div>
          </div>
        </motion.div>
        <div className="technologies__equipment">
          <CustomAccordionTechnologies accordionList={[
            { title: 'Нормализация уровня рН.', subTitle: 'Автоматическая нормализация уровня pH жидкого яичного белка позволяет производить жидкий яичный белок с заданным уровнем pH', imgSrc: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' },
            { title: '123', subTitle: '123', imgSrc: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' },
            { title: '123', subTitle: '123', imgSrc: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' },
            { title: '123', subTitle: '123', imgSrc: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' }]} />
        </div>
        <StatisticBlock />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimationSecond}
          className="technologies__automation"
        >
          <div className="technologies__automation_hero">
            <p className="text-3">
              Весь завод оснащен современной системой автоматизации, что позволяет
              осуществлять контроль с одного компьютера
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="technologies-advantages-wrapper"
        >
          {advantages.map((advantage, i) => {
            return (
              <motion.div
                custom={i}
                variants={startPageAnimation}
                key={advantage}
                className="technologies-advantage"
              >
                <div className="technologies-advantage_text">
                  <h6 className="text-1">{advantage}</h6>
                </div>
                <p className="technologies-advantage_subtitle">
                  {String(i + 1).padStart(2, '0')}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </motion.div>
  );
}

export default technologies;
