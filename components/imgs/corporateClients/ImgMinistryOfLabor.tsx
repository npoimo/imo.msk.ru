import stls from '@/styles/components/imgs/corporateClients/ImgMinistryOfLabor.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporateClients/ministryOfLabor.jpg'

type TypeImgMinistryOfLabor = TypeGeneralClassNames & TypeGeneralImg

const ImgMinistryOfLabor = ({
  classNames,
  width,
  height
}: TypeImgMinistryOfLabor) => {
  const publicSrc = '/assets/imgs/corporateClients/ministryOfLabor.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Министерство труда'}
      />
    </>
  )
}

export default ImgMinistryOfLabor
