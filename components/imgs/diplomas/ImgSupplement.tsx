import stls from '@/styles/components/imgs/diplomas/ImgSupplement.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/supplement.jpg'

type TypeImgSupplement = TypeGeneralClassNames & TypeGeneralImg

const ImgSupplement = ({ classNames, width, height }: TypeImgSupplement) => {
  const publicSrc = '/assets/imgs/diplomas/supplement.jpg'

  return (
    <ImgTemplate
      classNames={[cn(stls.container, classNames)]}
      src={nextexport ? publicSrc : src}
      width={nextexport ? src.width : width}
      height={nextexport ? src.height : height}
      alt={'Приложение'}
    />
  )
}

export default ImgSupplement
