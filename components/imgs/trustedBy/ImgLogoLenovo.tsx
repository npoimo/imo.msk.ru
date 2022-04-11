import stls from '@/styles/components/imgs/trustedBy/ImgLogoLenovo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-lenovo.jpg'

type TypeImgLogoLenovo = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoLenovo = ({ classNames, width, height }: TypeImgLogoLenovo) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-lenovo.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Lenovo'}
      />
    </>
  )
}

export default ImgLogoLenovo
