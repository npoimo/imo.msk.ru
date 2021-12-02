import stls from '@/styles/components/imgs/trustedBy/ImgLogoTatneft.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-tatneft.jpg'

const ImgLogoTatneft = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'Tatneft'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoTatneft
