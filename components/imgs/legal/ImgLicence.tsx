import stls from '@/styles/components/imgs/legal/ImgLicence.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/legal/licence.jpg'

type TypeImgLicence = TypeGeneralClassNames & TypeGeneralImg

const ImgLicence = ({ classNames, width, height }: TypeImgLicence) => {
  const publicSrc = '/assets/imgs/legal/licence.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Лицензия'
      />
    </>
  )
}

export default ImgLicence
