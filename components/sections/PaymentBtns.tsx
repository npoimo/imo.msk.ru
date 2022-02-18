import stls from '@/styles/components/sections/PaymentBtns.module.sass'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'

const PaymentBtns = () => {
  return (
    <section id={elementIds.paymentBtns} className={stls.container}>
      <Wrapper>
        <div className={stls.btns}>
          <div className={stls.btn}>
            <BtnAlpha
              text='Оплата банковской картой'
              href='https://securepayments.sberbank.ru/shortlink/MAViQpOW'
              target='_blank'
            />
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='delta' cta='help' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentBtns
