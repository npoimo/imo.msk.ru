import stls from '@/styles/components/imgs/yourfuturejob/ImgDecoration3.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/yourfuturejob/decoration3.jpg'

type TypeImgDecoration3 = TypeGeneralClassNames & TypeGeneralImg

const ImgDecoration3 = ({ classNames, width, height }: TypeImgDecoration3) => {
  const publicSrc = '/assets/imgs/yourfuturejob/decoration3.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Врач работает удалённо'
      />
    </>
  )
}

export default ImgDecoration3
