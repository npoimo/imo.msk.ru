import stls from '@/styles/components/imgs/corporateClients/ImgRosSeti.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporateClients/rosSeti.jpg'

type TypeImgRosSeti = TypeGeneralClassNames & TypeGeneralImg

const ImgRosSeti = ({ classNames, width, height }: TypeImgRosSeti) => {
  const publicSrc = '/assets/imgs/corporateClients/rosSeti.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'РосСети'}
      />
    </>
  )
}

export default ImgRosSeti
