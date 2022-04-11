import stls from '@/styles/components/imgs/webinars/ImgPortrait3.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/webinars/portrait3.jpg'

type TypeImgPortrait3 = TypeGeneralClassNames & TypeGeneralImg

const ImgPortrait3 = ({ classNames, width, height }: TypeImgPortrait3) => {
  const publicSrc = '/assets/imgs/webinars/portrait3.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Портрет 3'
      />
    </>
  )
}

export default ImgPortrait3
