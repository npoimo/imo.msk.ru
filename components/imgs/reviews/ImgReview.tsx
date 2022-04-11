import stls from '@/styles/components/imgs/reviews/ImgReview.module.sass'
import {
  TypeGeneralClassNames,
  TypeGeneralImg,
  TypeGeneralImgExtended
} from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'

type TypeImgReview = TypeGeneralClassNames &
  TypeGeneralImg &
  TypeGeneralImgExtended

const ImgReview = ({ classNames, width, height, src, alt }: TypeImgReview) => {
  const publicSrc = '/assets/imgs/reviews/review-default.png'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={src || (nextexport ? publicSrc : defaultSrc)}
        width={nextexport ? defaultSrc.width : width}
        height={nextexport ? defaultSrc.height : height}
        alt={alt || 'Студент'}
      />
    </>
  )
}

export default ImgReview
