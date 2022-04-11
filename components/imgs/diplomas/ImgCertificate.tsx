import stls from '@/styles/components/imgs/diplomas/ImgCertificate.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/certificate.jpg'

type TypeImgCertificate = TypeGeneralClassNames & TypeGeneralImg

const ImgCertificate = ({ classNames, width, height }: TypeImgCertificate) => {
  const publicSrc = '/assets/imgs/diplomas/certificate.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Приложение к диплому'
      />
    </>
  )
}

export default ImgCertificate
