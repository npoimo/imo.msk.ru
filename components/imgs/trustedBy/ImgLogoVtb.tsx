import stls from '@/styles/components/imgs/trustedBy/ImgLogoVtb.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-vtb.jpg'

type TypeImgLogoVtb = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoVtb = ({ classNames, width, height }: TypeImgLogoVtb) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-vtb.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'ВТБ'}
      />
    </>
  )
}

export default ImgLogoVtb
