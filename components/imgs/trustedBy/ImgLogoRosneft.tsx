import stls from '@/styles/components/imgs/trustedBy/ImgLogoRosneft.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-rosneft.jpg'

const ImgLogoRosneft = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'Роснефть'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoRosneft
