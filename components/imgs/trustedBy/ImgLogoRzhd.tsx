import stls from '@/styles/components/imgs/trustedBy/ImgLogoRzhd.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-rzhd.jpg'

const ImgLogoRzhd = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'РЖД'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoRzhd
