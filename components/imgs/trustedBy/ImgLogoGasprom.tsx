import stls from '@/styles/components/imgs/trustedBy/ImgLogoGasprom.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-gasprom.jpg'

type TypeImgLogoGasprom = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoGasprom = ({ classNames, width, height }: TypeImgLogoGasprom) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-gasprom.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Газпром'}
      />
    </>
  )
}

export default ImgLogoGasprom
