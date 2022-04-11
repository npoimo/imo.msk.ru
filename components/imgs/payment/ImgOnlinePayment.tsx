import stls from '@/styles/components/imgs/payment/ImgOnlinePayment.module.sass'
import { TypeGeneralClassNames, TypeGeneralImg } from '@/types/index'
import cn from 'classnames'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/online-payment.jpg'

type TypeImgOnlinePayment = TypeGeneralClassNames & TypeGeneralImg

const ImgOnlinePayment = ({
  classNames,
  width,
  height
}: TypeImgOnlinePayment) => {
  const publicSrc = '/assets/imgs/payment/online-payment.jpg'

  return (
    <>
      <ImgTemplate
        classNames={[cn(stls.container, classNames)]}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt='Оплата онлайн'
      />
    </>
  )
}

export default ImgOnlinePayment
