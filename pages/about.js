import { motion } from 'framer-motion';

import { StatisticBlock } from '../components/StatisticBlock/StatisticBlock';
import { CustomLink } from '../components/UI/customLink/CustomLink';
import { CustomSlider } from '../components/UI/customSlider/CustomSlider';

import mainImage from '../public/images/AboutPage/about-main.jpg';
import ideasImage from '../public/images/AboutPage/about-ideas-img.jpg';
import sliderFirstImg from '../public/images/StartPage/start-page-slider-img1.jpg';

import mockAboutFactorySlider from '../public/images/ProductCard/mockBaseCard.jpg';

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
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
    { imgSrc: sliderFirstImg.src },
  ];

  const teamSliderContent = [
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
    { imgSrc: mockAboutFactorySlider.src, description },
  ];

  const factorySliderBreakPoint = {
    gapxl: 40,
    slidesPerViewXl: 1.5,
    slidesPerViewMd: 1.5,
    slidesPerViewXs: 1.1,
  };

  const teamSliderBreakPoint = {
    gapxl: 24,
    slidesPerViewXl: 3.5,
    slidesPerViewMd: 2.5,
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
              производителей яичных продуктов, который основан на самых высоких
              требованиях стандартов пищевой безопасности.
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
      <div className="about__team-slider">
        <h2 className="about__team-slider-heading container">Команда</h2>
        <CustomSlider
          list={teamSliderContent}
          swiperWrapperStyle="about__team-slider-wrapper"
          swiperItemStyles="about__team-slider-item"
          slideImgStyle="about__team-slider-img"
          breakpointsObj={teamSliderBreakPoint}
        />
      </div>
    </section>
  );
}
