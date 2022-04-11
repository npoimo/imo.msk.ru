import stls from '@/styles/components/imgs/logos/ImgLogo.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport, companyName } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/logos/logo.png'

type TypeImgLogo = TypeGeneralClassNames & TypeGeneralImg

const ImgLogo = ({ classNames, width, height }: TypeImgLogo) => {
  const publicSrc = '/assets/imgs/logos/logo.png'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={companyName}
      />
    </>
  )
}

export default ImgLogo
