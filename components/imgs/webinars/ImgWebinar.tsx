import stls from '@/styles/components/imgs/webinars/ImgWebinar.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'

const ImgWebinar = ({ classNames = [], src, alt, width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src || defaultSrc}
      alt={alt || 'Спикер'}
      width={width}
      height={height}
    />
  )
}

export default ImgWebinar
