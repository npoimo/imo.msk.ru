import stls from '@/styles/components/imgs/yourfuturejob/ImgDecoration1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/yourfuturejob/decoration1.jpg'

type TypeImgDecoration1 = TypeGeneralClassNames & TypeGeneralImg

const ImgDecoration1 = ({ classNames, width, height }: TypeImgDecoration1) => {
  const publicSrc = '/assets/imgs/yourfuturejob/decoration1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Врач занимается с ребёнком'
      />
    </>
  )
}

export default ImgDecoration1
