import stls from '@/styles/components/imgs/corporateClients/ImgHeadHunter.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporateClients/headhunter.jpg'

type TypeImgHeadHunter = TypeGeneralClassNames & TypeGeneralImg

const ImgHeadHunter = ({ classNames, width, height }: TypeImgHeadHunter) => {
  const publicSrc = '/assets/imgs/corporateClients/headhunter.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'HeadHunter'}
      />
    </>
  )
}

export default ImgHeadHunter
