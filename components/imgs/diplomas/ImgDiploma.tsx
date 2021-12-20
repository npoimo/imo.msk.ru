import stls from '@/styles/components/imgs/diplomas/ImgDiploma.module.sass'
import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import pic from '@/public/assets/imgs/diplomas/diploma.jpg'

const ImgDiploma = ({ classNames = [], width, height }: TypeImg) => {
  return (
    <ImgTemplate
      classNames={classNames}
      src={pic}
      alt='Диплом'
      width={width}
      height={height}
    />
  )
}

export default ImgDiploma
