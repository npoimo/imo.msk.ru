import stls from '@/styles/components/imgs/programs/courses/ImgCourse1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/programs/courses/course-1.jpg'

type TypeImgCourse1 = TypeGeneralClassNames & TypeGeneralImg

const ImgCourse1 = ({ classNames, width, height }: TypeImgCourse1) => {
  const publicSrc = '/assets/imgs/programs/courses/course-1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'ПП 1'}
      />
    </>
  )
}

export default ImgCourse1
