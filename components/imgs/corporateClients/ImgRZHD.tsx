import stls from '@/styles/components/imgs/corporateClients/ImgRZHD.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporateClients/rZHD.jpg'

type TypeImgRZHD = TypeGeneralClassNames & TypeGeneralImg

const ImgRZHD = ({ classNames, width, height }: TypeImgRZHD) => {
  const publicSrc = '/assets/imgs/corporateClients/rZHD.jpg'
  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'РЖД'}
      />
    </>
  )
}

export default ImgRZHD
