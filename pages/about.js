import { motion } from 'framer-motion';

import { StatisticBlock } from '../components/StatisticBlock/StatisticBlock';
import { CustomLink } from '../components/UI/customLink/CustomLink';
import { CustomSlider } from '../components/UI/customSlider/CustomSlider';

import mainImage from '../public/images/AboutPage/about-main.jpg';
import ideasImage from '../public/images/AboutPage/about-ideas-img.jpg';
import sliderImgOne from '../public/images/AboutPage/about-slider-1.jpg';
import sliderImgTwo from '../public/images/AboutPage/about-slider-2.jpg';
import sliderImgThree from '../public/images/AboutPage/about-slider-3.jpg';
import sliderImgFour from '../public/images/AboutPage/about-slider-4.jpg';
import sliderImgFife from '../public/images/AboutPage/about-slider-5.jpg';

import {
  startPageAnimation,
  startPageAnimationSecond,
} from '../assets/animations/animations';

export default function about() {
  const companyIdeas = ['Развитие', 'Партнерство', 'Качество', 'Инновации'];

  const description = (
    <div className="about__team-slider-desc">
      <h6>Иван Иванов</h6>
      <p className="text-1">Директор по развитию</p>
    </div>
  );

  const factorySliderContent = [
    { imgSrc: sliderImgOne.src },
    { imgSrc: sliderImgTwo.src },
    { imgSrc: sliderImgThree.src },
    { imgSrc: sliderImgFour.src },
    { imgSrc: sliderImgFife.src },
  ];

  const factorySliderBreakPoint = {
    gapxl: 40,
    slidesPerViewXl: 1.5,
    slidesPerViewMd: 1.5,
    slidesPerViewXs: 1.1,
  };

  const getCompanyList = () => {
    return (
      <ul className="about__ideas-list">
        {companyIdeas.map((el, idx) => (
          <li className="about__ideas-item" key={el}>
            <p className="about__ideas-item-idx">0{idx + 1}</p>
            <p className="h0">{el}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="about">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="about__heading"
          >
            <motion.h1
              variants={startPageAnimationSecond}
              className="about__heading-text"
            >
              Входим в топ-10 <br /> производителей яиц
            </motion.h1>
            <div className="about__heading-img-wrapper">
              <img
                className="about__heading-img"
                src={mainImage.src}
                alt="view"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={startPageAnimation}
            className="about__eco-products"
          >
            <h2 className="about__eco-products-heading">
              Только экологически чистые и здоровые продукты питания
            </h2>
            <p className="caption-1 about__eco-products-caption">
              Наша главная цель — укрепление позиций компании как ведущего
              производителя высококачественной брендированной продукции, а также
              усиления вертикальной интеграции.
            </p>
          </motion.div>
          <StatisticBlock />
          <div className="about__ideas">
            <div className="about__ideas-text">
              {getCompanyList()}
              <p className="text-1 about__ideas-team">
                Наша команда имеет высокий уровень компетенции и дальше надо
                что-то дописать
              </p>
              <CustomLink label="О качестве" route="/quality" />
            </div>
            <div className="about__ideas-img">
              <img src={ideasImage.src} alt="Ideas" />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={startPageAnimation}
            className="about__design-factories"
          >
            <h2 className="about__design-factories-heading">
              Проектирование завода
            </h2>
            <div className="about__design-factories-text">
              <p className="text-1">
                В состав технологического комплекса входит подразделение
                технологического сервиса в сфере B2B, центр исследований и
                разработки новых продуктов R&D. Комплекс имеет мощности для
                реализации продукции сектора B2C
              </p>
              <p className="text-1">
                При проектировании завода, учитывался самый передовой опыт
                производителей яичных продуктов, который основан на самых
                высоких требованиях стандартов пищевой безопасности.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={startPageAnimationSecond}
          className="about__design-factories-slider"
        >
          <CustomSlider
            list={factorySliderContent}
            swiperWrapperStyle="about__design-factory-swiper-wrapper"
            swiperItemStyles="about__design-factory-swiper-item"
            slideImgStyle=""
            breakpointsObj={factorySliderBreakPoint}
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
