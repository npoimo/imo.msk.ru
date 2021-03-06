import stls from '@/styles/components/popups/PopupCta.module.sass'
import { FormAlpha } from '@/components/forms'
import { BtnClose } from '@/components/btns'

const PopupCta = ({ title, desc, cta, close, question = false }) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <h3 className={stls.title}>{title}</h3>
      <p className={stls.desc}>{desc}</p>
      <div className={stls.form}>
        <FormAlpha cta={cta} question={question} popup={true} />
      </div>
    </div>
  )
}

export default PopupCta
