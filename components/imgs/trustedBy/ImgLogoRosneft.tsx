import stls from '@/styles/components/imgs/trustedBy/ImgLogoRosneft.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-rosneft.jpg'

type TypeImgLogoRosneft = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoRosneft = ({ classNames, width, height }: TypeImgLogoRosneft) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-rosneft.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Роснефть'}
      />
    </>
  )
}

export default ImgLogoRosneft
