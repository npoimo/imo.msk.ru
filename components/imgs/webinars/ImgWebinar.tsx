import stls from '@/styles/components/imgs/webinars/ImgWebinar.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralImg,
  TypeGeneralImgExtended
} from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'

type TypeImgWebinar = TypeGeneralClassNames &
  TypeGeneralImg &
  TypeGeneralImgExtended

const ImgWebinar = ({
  classNames,
  src,
  alt,
  width,
  height
}: TypeImgWebinar) => {
  const publicSrc = '/assets/imgs/reviews/review-default.png'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src || (nextexport ? publicSrc : defaultSrc)}
        width={nextexport ? defaultSrc.width : width}
        height={nextexport ? defaultSrc.height : height}
        alt={alt || 'Спикер'}
      />
    </>
  )
}

export default ImgWebinar
