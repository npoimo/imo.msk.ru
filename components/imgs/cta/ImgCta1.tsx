import stls from '@/styles/components/imgs/cta/ImgCta1.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/cta/cta1.png'

type TypeImgCta1 = TypeGeneralClassNames & TypeGeneralImg

const ImgCta1 = ({ classNames, width, height }: TypeImgCta1) => {
  const publicSrc = '/assets/imgs/cta/cta1.png'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Девушка в очках и с книгой'
      />
    </>
  )
}

export default ImgCta1
