import React from 'react'
import logoLeto from '../../public/images/header/logoLeto.svg'
import logoSanovo from '../../public/images/header/logoSanovo.svg'

import Link from 'next/link'

export const Header = () => {
  const links = [{ label: 'Продукция', link: 'production' },
  { label: 'Продукция', link: 'production' },
  { label: 'О компании', link: 'about' },
  { label: 'Качество', link: 'quality' },
  { label: 'Технология', link: 'technology' },
  { label: 'Вакансии', link: 'vacancy' },
  { label: 'Контакты', link: 'contacts' }]

  return (
    <section className="header__wrapper">
      <img src={logoLeto.src} />
      <img src={logoSanovo.src} />
      <div>
        {links.map(link => (
          <Link href={link.link}>
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <span>
          <a href="tel:+78005553535">+7 800 555 35 35</a>
        </span>
        <button></button>
      </div>
    </section>
  )
}