import React from 'react'
import logoLeto from '../../public/images/header/logoLeto.svg'
import logoSanovo from '../../public/images/header/logoSanovo.svg'

import Link from 'next/link'
import { CustomOutlinedButton } from "../UI/CustomOutlinedButton/CustomOutlinedButton"
import { CustomLanguageSwitcher } from "../UI/сustomLanguageSwitcher/CustomLanguageSwitcher"

export const Header = () => {
  const links = [
    { label: 'Продукция', link: 'catalog/catalog' },
    { label: 'О компании', link: 'about' },
    { label: 'Качество', link: 'quality' },
    { label: 'Технология', link: 'technologies' },
    { label: 'Вакансии', link: 'vacancy' },
    { label: 'Контакты', link: 'contacts' }]

  return (
    <div className="header__outline-wrapper">
      <div className="container">
        <header className="header__wrapper">
          <div className="header-links__wrapper">
            <img src={logoLeto.src} />
            <img className="header__sanovo-label" src={logoSanovo.src} />
            <ul className="header__links">
              {links.map(link => (
                <li className="link-text" key={link.label}>
                  <Link href={link.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header__controls-panel">
            <a className="btn-text-2" href="tel:+78005553535">+7 800 555 35 35</a>
            <CustomOutlinedButton label='Оставить заявку' isButtonSmall={true} />
            <CustomLanguageSwitcher />
          </div>
        </header>
      </div>
    </div>
  )
}
