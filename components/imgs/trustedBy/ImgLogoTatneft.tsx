import stls from '@/styles/components/imgs/trustedBy/ImgLogoTatneft.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-tatneft.jpg'

type TypeImgLogoTatneft = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoTatneft = ({ classNames, width, height }: TypeImgLogoTatneft) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-tatneft.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Tatneft'}
      />
    </>
  )
}

export default ImgLogoTatneft
