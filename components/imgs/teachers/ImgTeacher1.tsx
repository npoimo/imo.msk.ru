import stls from '@/styles/components/imgs/teachers/ImgTeacher1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/teachers/teacher-1.jpg'

type TypeImgTeacher1 = TypeGeneralClassNames & TypeGeneralImg

const ImgTeacher1 = ({ classNames, width, height }: TypeImgTeacher1) => {
  const publicSrc = '/assets/imgs/teachers/teacher-1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Преподаватель'}
      />
    </>
  )
}

export default ImgTeacher1
