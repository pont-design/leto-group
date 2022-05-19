import React, { useState, useCallback, useContext } from 'react';

import Link from 'next/link';

import { CustomOutlinedButton } from '../UI/CustomOutlinedButton/CustomOutlinedButton';
import { CustomLanguageSwitcher } from '../UI/сustomLanguageSwitcher/CustomLanguageSwitcher';

import logoLeto from '../../public/images/header/logoLeto.svg';
import logoSanovo from '../../public/images/header/logoSanovo.svg';

import { CustomModal } from '../UI/CustomModal/CustomModal';
import { CustomForm } from '../UI/CustomForm/CustomForm';

import { removeFilterSettings } from '../../utils/removeFilterSettings';
import { FiltersValueContext } from '../../pages/_app';

export const Header = () => {
  const links = [
    { label: 'Продукция', link: '/catalog' },
    { label: 'О компании', link: '/about' },
    { label: 'Качество', link: '/quality' },
    { label: 'Технология', link: '/technologies' },
    { label: 'Контакты', link: '/contacts' },
  ];

  const filtersValueController = useContext(FiltersValueContext);

  const deleteCategories = () => {
    //TODO : this function should be in context
    filtersValueController.setFilterValue(
      removeFilterSettings(filtersValueController.filterValue)
    );
  };

  const removeFiltersOnLinkClick = (link) => {
    link === '/catalog' && deleteCategories();
  }; //TODO : this function should be in context

  const [scrollAbility, setScrollAbility] = useState(true); //TODO: all this logic should be in custom hook
  const [modalActive, setModalActive] = useState(false);

  const toggleBurger = useCallback(() => {
    setScrollAbility(!scrollAbility);
    scrollAbility ? disableScroll() : enableScroll();
  }, [scrollAbility]);

  const openModal = () => {
    setScrollAbility(!scrollAbility);
    scrollAbility ? disableScroll() : enableScroll();
    setModalActive(true);
  };

  const openModalDesktop = () => {
    setModalActive(true);
  };

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = 'unset';
  }

  return (
    <div className="header__outline-wrapper">
      <div className="container">
        <header className="header__wrapper">
          <div className="header-links__wrapper">
            <Link href="/">
              <img
                src={logoLeto.src}
                className="header-links__wrapper_logo-leto"
              />
            </Link>
            <img className="header__sanovo-label" src={logoSanovo.src} />
            <ul className="header__links">
              {links.map((link) => (
                <li
                  onClick={() => {
                    removeFiltersOnLinkClick(link.link);
                  }}
                  className="link-text header-link-content"
                  key={link.label}
                >
                  <Link href={link.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header__controls-panel">
            <a className="btn-text-2" href="tel:+78005553535">
              +7 800 555 35 35
            </a>

            <CustomOutlinedButton
              label="Оставить заявку"
              isButtonSmall={true}
              onClick={() => openModalDesktop()}
            />

            <CustomLanguageSwitcher />
          </div>
          <div className="hamburger-menu">
            <input
              id="menu__toggle"
              type="checkbox"
              checked={scrollAbility ? false : true}
              onChange={() => toggleBurger()}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <div onClick={() => toggleBurger()} className="menu-box__shadow">
              {' '}
              {/* TODO: to separate view (modal window menu) */}
              <div onClick={(e) => e.stopPropagation()} className="menu__box ">
                <div className="menu__box-nav">
                  <ul className="menu__box-nav-links">
                    {links.map((link) => (
                      <li
                        className="link-text link-text__burger"
                        key={link.label}
                        onClick={() => {
                          toggleBurger();
                          removeFiltersOnLinkClick(link.link);
                        }}
                      >
                        <Link href={link.link}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className="menu__box-additional-info">
                    <CustomOutlinedButton
                      onClick={() => openModal()}
                      label="Оставить заявку"
                      isButtonSmall={true}
                    />
                    <a className="btn-text-2" href="tel:+78005553535">
                      +7 800 555 35 35
                    </a>
                    <CustomLanguageSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <CustomModal active={modalActive} setActive={setModalActive}>
        <h2>Оставьте заявку</h2>
        <p className="text-1">В ближайщее время наш менеджер свяжется с Вами</p>
        <CustomForm buttonLabel="Отправить" />
      </CustomModal>
    </div>
  );
};
