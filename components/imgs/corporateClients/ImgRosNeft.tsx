import stls from '@/styles/components/imgs/corporateClients/ImgRosNeft.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporateClients/rosNeft.jpg'

type TypeImgRosNeft = TypeGeneralClassNames & TypeGeneralImg

const ImgRosNeft = ({ classNames, width, height }: TypeImgRosNeft) => {
  const publicSrc = '/assets/imgs/corporateClients/rosNeft.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'РосНефть'}
      />
    </>
  )
}

export default ImgRosNeft
