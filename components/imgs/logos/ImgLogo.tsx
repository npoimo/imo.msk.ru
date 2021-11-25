import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import { companyName } from '@/config/index'
import src from '@/public/assets/imgs/logos/logo.png'

const ImgLogo = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={companyName}
      classNames={classNames}
    />
  )
}

export default ImgLogo
