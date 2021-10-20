import stls from '@/styles/components/layout/Footer.module.sass'
import classNames from 'classnames'
import { useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import Link from 'next/link'
import Wrapper from '@/components/layout/Wrapper'
import { number } from '@/data/contact'
import { city, street } from '@/data/location'
import {
  routeCourses,
  routeProfessions,
  routeWebinars,
  routeReviews
} from '@/data/routes'
import { BtnVk, BtnWhatsapp, BtnTelegram } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'
import FooterBottom from '@/components/general/FooterBottom'

const Footer = () => {
  const { studyFields } = useContext(ProgramsContext)

  const staticLinks = [
    {
      val: 'Курсы',
      href: routeCourses
    },
    {
      val: 'Профессии',
      href: routeProfessions
    },
    // {
    //   val: 'Вебинары',
    //   href: routeWebinars
    // },
    {
      val: 'Отзывы',
      href: routeReviews
    }
  ]

  const fieldsLinks = []

  studyFields.forEach(field => {
    fieldsLinks.push({ val: field.label, href: `/programs/${field.slug}` })
  })

  return (
    <footer className={stls.container}>
      <Wrapper>
        <div className={stls.left}>
          <div className={stls.top}>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.staticLinks]: true
              })}>
              {staticLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.staticLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.staticLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className={classNames({
                [stls.links]: true,
                [stls.fieldsLinks]: true
              })}>
              {fieldsLinks.map(link => (
                <li
                  key={link.val + link.href}
                  className={classNames({
                    [stls.linkItem]: true,
                    [stls.fieldsLinkItem]: true
                  })}>
                  <Link href={link.href}>
                    <a
                      className={classNames({
                        [stls.link]: true,
                        [stls.fieldsLink]: true
                      })}>
                      {link.val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={stls.contact}>
              <div className={stls.numbers}>
                <a href={number.href} className={stls.number}>
                  {number.val}
                </a>
                <a href={number.href} className={stls.number}>
                  {number.val}
                </a>
              </div>
              <div className={stls.address}>
                {city}, {street}
              </div>
              <div className={stls.sm}>
                <BtnVk dark mlzero />
                <BtnWhatsapp dark />
                <BtnTelegram dark />
              </div>
              <div className={stls.btn}>
                <PopupTrigger btn='beta' cta='askQuestion' />
              </div>
            </div>
          </div>
          <div className={stls.bottom}>
            <FooterBottom />
          </div>
        </div>
        <div className={stls.right}>right</div>
      </Wrapper>
      <div className={stls.footerBottom}>
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
