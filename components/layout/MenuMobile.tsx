import stls from '@/styles/components/layout/MenuMobile.module.sass'
import { useContext } from 'react'
import Link from 'next/link'
import MenuContext from '@/context/menu/menuContext'
import Wrapper from '@/components/layout/Wrapper'
import Logo from '@/components/general/Logo'
import { BtnClose, BtnPhone, BtnVk, BtnFb, BtnYt } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import { IconMoreThan } from '@/components/icons'
import classNames from 'classnames'
import {
  routePrograms,
  routeWebinars,
  routeReviews,
  routeAbout
} from '@/data/routes'

const MenuMobile = () => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const links = [
    { text: 'Направления обучения', href: routePrograms, withIcon: true },
    { text: 'Вебинары', href: routeWebinars, withIcon: false },
    { text: 'Отзывы', href: routeReviews, withIcon: false },
    { text: 'Об институте', href: routeAbout, withIcon: false }
  ]

  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.menuIsOpen]: menuIsOpen
      })}>
      <Wrapper>
        <div className={stls.row}>
          <Logo atHeader />
          <BtnClose />
        </div>
        <nav className={stls.nav}>
          <ul className={stls.navList}>
            {links.map((item, idx) => (
              <li key={item.text + idx} className={stls.navItem}>
                <Link href={item.href}>
                  <a onClick={closeMenu}>
                    <span>{item.text}</span>
                    {item.withIcon && <IconMoreThan small cnu />}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={stls.cta}>
          <BtnPhone withNumber />
          <PopupTrigger btn='epsilon' cta='callMeBack' />
        </div>
        <div className={stls.sm}>
          <BtnVk mlzero />
          <BtnFb />
          <BtnYt />
        </div>
      </Wrapper>
    </div>
  )
}

export default MenuMobile
