import stls from '@/styles/components/imgs/trustedBy/ImgLogoSovkombank.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-sovkombank.jpg'

const ImgLogoSovkombank = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'Совкомбанк'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoSovkombank
