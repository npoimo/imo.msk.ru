import stls from '@/styles/components/imgs/trustedBy/ImgLogoSberbank.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-sberbank.jpg'

type TypeImgLogoSberbank = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoSberbank = ({
  classNames = [],
  width,
  height
}: TypeImgLogoSberbank) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-sberbank.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Сбербанк'}
      />
    </>
  )
}

export default ImgLogoSberbank
