import stls from '@/styles/components/imgs/teachers/ImgTeacher.module.sass'
import { ImgTemplate } from '@/components/imgs'
import { TypeImg } from '@/types/index'
import defaultSrc from '@/public/assets/imgs/reviews/review-default.png'

const ImgTeacher = ({ classNames = [], src, alt, width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src || defaultSrc}
      alt={alt || 'Преподаватель'}
      width={width}
      height={height}
    />
  )
}

export default ImgTeacher
