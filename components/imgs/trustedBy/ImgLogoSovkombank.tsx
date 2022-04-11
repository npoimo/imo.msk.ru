import stls from '@/styles/components/imgs/trustedBy/ImgLogoSovkombank.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-sovkombank.jpg'

type TypeImgLogoSovkombank = TypeGeneralClassNames & TypeGeneralImg

const ImgLogoSovkombank = ({
  classNames,
  width,
  height
}: TypeImgLogoSovkombank) => {
  const publicSrc = '/assets/imgs/trustedBy/logo-sovkombank.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Совкомбанк'}
      />
    </>
  )
}

export default ImgLogoSovkombank
