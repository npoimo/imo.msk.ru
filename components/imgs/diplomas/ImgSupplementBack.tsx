import stls from '@/styles/components/imgs/diplomas/ImgSupplementBack.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/supplement-back.jpg'

type TypeImgSupplementBack = TypeGeneralClassNames & TypeGeneralImg

const ImgSupplementBack = ({
  classNames,
  width,
  height
}: TypeImgSupplementBack) => {
  const publicSrc = '/assets/imgs/diplomas/supplement-back.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Приложение оборот'
      />
    </>
  )
}

export default ImgSupplementBack
