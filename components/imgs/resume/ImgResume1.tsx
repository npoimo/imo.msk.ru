import stls from '@/styles/components/imgs/resume/ImgResume1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/resume/resume1.jpg'

type TypeImgLicence = TypeGeneralClassNames & TypeGeneralImg

const ImgResume1 = ({ classNames, width, height }: TypeImgLicence) => {
  const publicSrc = '/assets/imgs/resume/resume1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Семейный врач'
      />
    </>
  )
}

export default ImgResume1
