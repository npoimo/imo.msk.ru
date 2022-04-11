import stls from '@/styles/components/imgs/corporateClients/ImgSberBankLeasing.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/corporateClients/sberbankLeasing.jpg'

type TypeImgSberbankLeasing = TypeGeneralClassNames & TypeGeneralImg

const ImgSberbankLeasing = ({
  classNames,
  width,
  height
}: TypeImgSberbankLeasing) => {
  const publicSrc = '/assets/imgs/corporateClients/sberbankLeasing.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Сбербанк Лизинг'}
      />
    </>
  )
}

export default ImgSberbankLeasing
