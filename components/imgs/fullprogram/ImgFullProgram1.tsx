import stls from '@/styles/components/imgs/fullprogram/ImgFullProgram1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/fullprogram/fullprogram1.jpg'

type TypeImgFullProgram1 = TypeGeneralClassNames & TypeGeneralImg

const ImgFullProgram1 = ({
  classNames,
  width,
  height
}: TypeImgFullProgram1) => {
  const publicSrc = '/assets/imgs/fullprogram/fullprogram1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Полная программа'
      />
    </>
  )
}

export default ImgFullProgram1
