import stls from '@/styles/components/imgs/trustedBy/ImgLogoGasprom.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-gasprom.jpg'

const ImgLogoGasprom = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'Газпром'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoGasprom
