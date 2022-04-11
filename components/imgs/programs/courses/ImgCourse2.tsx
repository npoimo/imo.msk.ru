import stls from '@/styles/components/imgs/programs/courses/ImgCourse2.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/programs/courses/course-2.jpg'

type TypeImgCourse2 = TypeGeneralClassNames & TypeGeneralImg

const ImgCourse2 = ({ classNames, width = 676, height }: TypeImgCourse2) => {
  const publicSrc = '/assets/imgs/programs/courses/course-2.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='ПП 2'
      />
    </>
  )
}

export default ImgCourse2
