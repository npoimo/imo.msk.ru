import stls from '@/styles/components/general/Logo.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { ImgLogo } from '@/components/imgs'
import { routeHome } from '@/data/routes'

const Logo = ({ atHeader = false, withTitle = true }) => {
  return (
    <div className={stls.container}>
      <Link href={routeHome}>
        <a
          className={classNames({
            [stls.logo]: true,
            [stls.atHeader]: atHeader
          })}>
          <ImgLogo classNames={[stls.img]} />
          {withTitle && (
            <p className={stls.title}>
              Институт <br /> медицинского <br /> образования
            </p>
          )}
        </a>
      </Link>
    </div>
  )
}

export default Logo
