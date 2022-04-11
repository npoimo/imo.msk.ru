import stls from '@/styles/components/imgs/diplomas/ImgDiploma1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-1.jpg'

type TypeImgDiploma1 = TypeGeneralClassNames & TypeGeneralImg

const ImgDiploma1 = ({ classNames, width, height }: TypeImgDiploma1) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом 1'}
      />
    </>
  )
}

export default ImgDiploma1
