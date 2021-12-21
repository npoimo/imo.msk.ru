import stls from '@/styles/components/btns/BtnGamma.module.sass'

const BtnGamma = ({ text = '', isDisabled = false }) => {
  return (
    <button className={stls.container} disabled={isDisabled}>
      {text}
    </button>
  )
}

export default BtnGamma
