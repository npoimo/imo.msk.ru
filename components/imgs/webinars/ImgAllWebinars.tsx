import stls from '@/styles/components/imgs/webinars/ImgAllWebinars.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/webinars/all-webinars.jpg'

type TypeImgAllWebinars = TypeGeneralClassNames & TypeGeneralImg

const ImgAllWebinars = ({ classNames, width, height }: TypeImgAllWebinars) => {
  const publicSrc = '/assets/imgs/webinars/all-webinars.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        objectFit='cover'
        alt='Портрет 1'
      />
    </>
  )
}

export default ImgAllWebinars
