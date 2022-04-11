import stls from '@/styles/components/imgs/webinars/ImgPortrait2.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/webinars/portrait2.jpg'

type TypeImgPortrait2 = TypeGeneralClassNames & TypeGeneralImg

const ImgPortrait2 = ({ classNames, width, height }: TypeImgPortrait2) => {
  const publicSrc = '/assets/imgs/webinars/portrait2.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Портрет 2'
      />
    </>
  )
}

export default ImgPortrait2
