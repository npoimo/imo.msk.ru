import stls from '@/styles/components/imgs/teachers/ImgTeacher.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralImg,
  TypeGeneralImgExtended
} from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'

type TypeImgTeacher = TypeGeneralClassNames &
  TypeGeneralImg &
  TypeGeneralImgExtended

const ImgTeacher = ({
  classNames,
  width,
  height,
  src,
  alt
}: TypeImgTeacher) => {
  const publicSrc = '/assets/imgs/reviews/review-default.png'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src || (nextexport ? publicSrc : defaultSrc)}
        width={nextexport ? defaultSrc.width : width}
        height={nextexport ? defaultSrc.height : height}
        alt={alt || 'Преподаватель'}
      />
    </>
  )
}

export default ImgTeacher
