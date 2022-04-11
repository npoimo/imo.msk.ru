import stls from '@/styles/components/imgs/trustedBy/ImgLogoRzhd.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-rzhd.jpg'

type TypeImgLogoRzhd = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoRzhd = ({ classNames, width, height }: TypeImgLogoRzhd) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-rzhd.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'РЖД'}
      />
    </>
  )
}

export default ImgLogoRzhd
