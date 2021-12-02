import stls from '@/styles/components/imgs/trustedBy/ImgLogoSberbank.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-sberbank.jpg'

const ImgLogoSberbank = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'Сбербанк'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoSberbank
