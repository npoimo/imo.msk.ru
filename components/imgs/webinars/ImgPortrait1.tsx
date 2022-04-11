import stls from '@/styles/components/imgs/webinars/ImgPortrait1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/webinars/portrait1.jpg'

type TypeImgPortrait1 = TypeGeneralClassNames & TypeGeneralImg

const ImgPortrait1 = ({ classNames, width, height }: TypeImgPortrait1) => {
  const publicSrc = '/assets/imgs/webinars/portrait1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Портрет 1'
      />
    </>
  )
}

export default ImgPortrait1
