import stls from '@/styles/components/imgs/trustedBy/ImgLogoVtb.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/trustedBy/logo-vtb.jpg'

const ImgLogoVtb = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={src}
      alt={'ВТБ'}
      width={width}
      height={height}
    />
  )
}

export default ImgLogoVtb
