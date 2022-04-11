import stls from '@/styles/components/imgs/forWhom/ImgForWhomPhoneTablet.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralImg,
  TypeGeneralImgExtended
} from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
// import defaultSrc from '@/public/assets/imgs/forWhom/forWhom-phone-tablet.jpg'
import defaultSrc from '@/public/assets/imgs/programs/courses/course-2.jpg'

type TypeImgForWhomPhoneTablet = TypeGeneralClassNames &
  TypeGeneralImg &
  TypeGeneralImgExtended

const ImgForWhomPhoneTablet = ({
  classNames,
  src,
  alt,
  width,
  height
}: TypeImgForWhomPhoneTablet) => {
  const publicSrc = '/assets/imgs/programs/courses/course-2.jpg'
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : defaultSrc}
        width={nextexport ? defaultSrc.width : width}
        height={nextexport ? defaultSrc.height : height}
        alt={alt || 'Врач в работе'}
      />
    </>
  )
}

export default ImgForWhomPhoneTablet
