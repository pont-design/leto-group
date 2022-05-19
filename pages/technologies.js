import React from 'react';

import { motion } from 'framer-motion';

import { StatisticBlock } from '../components/StatisticBlock/StatisticBlock';
import { CustomAccordionTechnologies } from '../components/UI/customAccordionTechnologies/CustomAccordionTechnologies';

import {
  startPageAnimation,
  startPageAnimationSecond,
} from '../assets/animations/animations';

import logoSanovo from '../public/images/Header/logoSanovo.svg';
import atexSertificate from '../public/images/Technologies/AtexSertificate.svg';
import ISOCertificate from '../public/images/Technologies/ISOCertificate.svg';
import mainBlockFirst from '../public/images/Technologies/technologies-main-block-first-img.jpg';
import mainBlockSecond from '../public/images/Technologies/technologies-main-block-second.jpg';
import technologiesFirst from '../public/images/Technologies/tech-accordion-1.jpg';
import technologiesSecond from '../public/images/Technologies/tech-accordion-2.jpg';
import technologiesThird from '../public/images/Technologies/tech-accordion-3.jpg';
import technologiesFourth from '../public/images/Technologies/tech-accordion-4.jpg';
import technologiesFifth from '../public/images/Technologies/tech-accordion-5.jpg';
import technologiesSixth from '../public/images/Technologies/tech-accordion-6.jpg';
import technologiesSeventh from '../public/images/Technologies/tech-accordion-7.jpg';
import technologiesEigth from '../public/images/Technologies/tech-accordion-8.jpg';
import technologiesFactoryImg from '../public/images/Technologies/technologies-factory-img.jpg';

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
              SANOVO, которые являются мировым лидером в этой отрасли. В
              арсенале завода «ЛЕТО» используется самое современное оборудование
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
          <CustomAccordionTechnologies
            accordionList={[
              {
                title: 'Нормализация уровня рН.',
                subTitle:
                  'Автоматическая нормализация уровня pH жидкого яичного белка позволяет производить жидкий яичный белок с заданным уровнем pH',
                imgSrc: technologiesFirst.src,
              },
              {
                title: 'Охлаждение сухого яичного желтка.',
                subTitle:
                  'Данная система охлаждает яичный продукт перед фасовкой и упаковкой, в результате при хранении продукт не слёживается.',
                imgSrc: technologiesSecond.src,
              },
              {
                title: 'Приготовление специальных и индивидуальных продуктов.',
                subTitle:
                  'Система смешивания позволяет производить специальные продукты с добавлением соли и / или сахара по индивидуальным требованиям заказчика.',
                imgSrc: technologiesThird.src,
              },
              {
                title: 'Сушка для производства порошковых продуктов',
                subTitle:
                  'Данная система при помощи распылительной сушки позволяет производить высококачественные порошковые яичные продукты',
                imgSrc: technologiesFourth.src,
              },
              {
                title: 'Система усиления эффекта пастеризации',
                subTitle:
                  'Импульсивная волновая система нагрева для генерации кратковременного скачка температуры с целью усиления эффекта пастеризации.',
                imgSrc: technologiesFifth.src,
              },
              {
                title: 'Станция CIP-мойки модели SANOMAXCIP',
                subTitle:
                  'Станция предназначенная для вымывания продукта, промыва и дезинфекции неразборных, труднодоступных мест.',
                imgSrc: technologiesSixth.src,
              },
              {
                title: 'Хранение и ферментация жидкого яичного белка.',
                subTitle:
                  'Танк предназначен для временного хранения продукции, а так-же ферментации в безопасных условиях в ходе производства.',
                imgSrc: technologiesSeventh.src,
              },
              {
                title: 'Разбивочно-сепарационная машина.',
                subTitle:
                  'Компактная система для разбивания и сепарации пищевого куриного яйца для последующей переработки.',
                imgSrc: technologiesEigth.src,
              },
            ]}
          />
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
              Весь завод оснащен современной системой автоматизации, что
              позволяет осуществлять контроль с одного компьютера
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="technologies-advantages-wrapper"
        >
          <img src={technologiesFactoryImg.src} alt="technologies factory" />
        </motion.div>
      </section>
    </motion.div>
  );
}

export default technologies;
