import stls from '@/styles/components/imgs/diplomas/ImgDiploma.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma.jpg'

type TypeImgDiploma = TypeGeneralClassNames & TypeGeneralImg

const ImgDiploma = ({ classNames, width, height }: TypeImgDiploma) => {
  const publicSrc = '/assets/imgs/diplomas/diploma.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом'}
      />
    </>
  )
}

export default ImgDiploma
