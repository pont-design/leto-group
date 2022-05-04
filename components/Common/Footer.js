import React from 'react';
import Link from 'next/link';

import { CustomOutlinedButton } from '../UI/CustomOutlinedButton/CustomOutlinedButton';

import logoLeto from '../../public/images/header/logoLeto.svg';
import vkLogo from '../../public/images/Footer/VkLogo.svg';

export const Footer = () => {
  const linksCompany = [
    { label: 'Продукция', link: 'production' },
    { label: 'О компании', link: 'about' },
    { label: 'Качество', link: 'quality' },
    { label: 'Технология', link: 'technology' },
    { label: 'Вакансии', link: 'vacancy' },
    { label: 'Контакты', link: 'contacts' },
  ];

  const linksMedia = [
    {
      label: 'Вконтакте',
      link: '#',
    },
  ];

  const helpCompany = [
    { label: 'Вакансии', link: 'vacancy' },
    { label: 'Контакты', link: 'contacts' },
  ];

  const company = { title: 'Компания', list: linksCompany };

  const help = { title: 'Помощь', list: helpCompany };

  const media = { title: 'Медиа', list: linksMedia };

  return (
    <div className="footer__outline-wrapper">
      <div className="container">
        <footer>
          <div className="footer__contacts-wrapper">
            <ul className="footer__contacts-list">
              <li className="footer__contacts-list_title">
                <h6>{company.title}</h6>
              </li>
              {company.list.map((link) => (
                <li className="link-text" key={link.link}>
                  <Link href={link.link}>
                    <span className="footer-link-content">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="footer__contacts-list footer__contacts-list_help">
              <li className="footer__contacts-list_title">
                <h6>{help.title}</h6>
              </li>
              {help.list.map((link) => (
                <li className="link-text" key={link.link}>
                  <Link href={link.link}>
                    <span className="footer-link-content">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="footer__request-wrapper_mobile">
              <h5>
                Есть предложения? <br /> Оставьте заявку
              </h5>
              <div className="footer__request-button">
                <Link href="/contacts">
                  <a>
                    <CustomOutlinedButton
                      label="Оставить заявку"
                      isButtonSmall={false}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <ul className="footer__contacts-list footer__contacts-list_media">
              <li className="footer__contacts-list_title">
                <h6>{media.title}</h6>
              </li>
              {media.list.map((link) => (
                <li className="link-text">
                  <a href="#" className="footer__vk-logo" link={link.link}>
                    <img className="footer__vk-logo_img" src={vkLogo.src} />
                    <p className="footer-link-content">{link.label}</p>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="footer__contacts-list footer__contacts-list_contacts">
              <li>
                <p className="caption-2">Телефон</p>
                <a
                  className="footer-link-content text-2"
                  href="tel:+7 495 147 01 99"
                >
                  +7 495 147 01 99
                </a>
              </li>
              <li>
                <p className="caption-2">Email</p>
                <a
                  className="footer-link-content text-2"
                  href="mailto:info@egg-go.ru"
                >
                  info@egg-go.ru
                </a>
              </li>
            </ul>
            <div className="footer__contacts-list footer__contacts-list_logo">
              <img
                className="footer__contacts-list_logo_img"
                src={logoLeto.src}
              />
            </div>
          </div>
          <div className="footer__request-wrapper">
            <h5>
              Есть предложения? <br /> Оставьте заявку
            </h5>
            <div className="footer__request-button">
              <CustomOutlinedButton
                label="Оставить заявку"
                isButtonSmall={false}
              />
            </div>
          </div>
          <div className="footer__mark-wrapper link-text">
            <a href="#">© ООО «Лето Групп» 2022</a>
            <a href="#">Политика обработки персональных данных</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </footer>
      </div>
    </div>
  );
};
