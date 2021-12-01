import stls from '@/styles/components/imgs/reviews/ImgReview.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'

const ImgReview = ({ classNames = [], src, alt, width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src || defaultSrc}
      alt={alt || 'Студент'}
      width={width}
      height={height}
    />
  )
}

export default ImgReview
