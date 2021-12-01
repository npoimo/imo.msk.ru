import stls from '@/styles/components/imgs/reviews/ImgLogoLenovo.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-lenovo.jpg'

const ImgLogoLenovo = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'Lenovo'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoLenovo
