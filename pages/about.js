import { CustomLink } from '../components/UI/customLink/CustomLink';

import mainImage from '../public/images/AboutPage/about-main.jpg';
import ideasImage from '../public/images/AboutPage/ideas.jpg';

export default function about() {
  const companyIdeas = ['Развитие', 'Партнерство', 'Качество', 'Инновации'];

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
    <div className="about">
      <div className="about__heading">
        <h1 className="about__heading-text">
          Входим в топ-10 производителей яиц
        </h1>
        <img className="about__heading-img" src={mainImage.src} alt="view" />
      </div>
      <div className="about__eco-products">
        <h2 className="about__eco-products-heading">
          Только экологически чистые и здоровые продукты питания
        </h2>
        <p className="caption-1 about__eco-products-caption">
          Наша главная цель — укрепление позиций компании как ведущего
          производителя высококачественной брендированной продукции, а также
          усиления вертикальной интеграции.
        </p>
      </div>
      <div className="about__numbers">
        <div className="about__numbers-packaging">
          <p className="text-numbers">70 000 000 +</p>
          <p className="text-1">Продаём упаковок в год</p>
        </div>
        <div className="about__numbers-technology">
          <p className="text-numbers">SANOVO</p>
          <p className="text-1">
            Завод оборудован современной техникой датской компании
          </p>
        </div>
        <div className="about__numbers-square">
          <p className="text-numbers about__numbers-square-text">3000 Га</p>
          <p className="text-1">Рабочая площадь преприятия</p>
        </div>
      </div>
      <div className="about__ideas">
        <div className="about__ideas-text">
          {getCompanyList()}
          <p className="text-1 about__ideas-team">
            Наша команда имеет высокий уровень компетенции и дальше надо что-то
            дописать
          </p>
          <CustomLink label="Наши процессы" />
        </div>
        <div className="about__ideas-img">
          <img src={ideasImage.src} alt="Ideas" />
        </div>
      </div>
    </div>
  );
}
