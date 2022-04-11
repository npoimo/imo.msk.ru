import stls from '@/styles/components/imgs/general/ImgHero.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/hero.jpg'

type TypeImgHero = TypeGeneralClassNames & TypeGeneralImg

const ImgHero = ({ classNames, width, height }: TypeImgHero) => {
  const publicSrc = '/assets/imgs/general/hero.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Сферы медицины'
      />
    </>
  )
}

export default ImgHero
