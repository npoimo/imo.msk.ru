import stls from '@/styles/components/general/GetDiplomaAndAccreditation.module.sass'
import { BtnIota, BtnKappa } from '@/components/btns'
import { ImgDiploma } from '@/components/imgs'

const GetDiplomaAndAccreditation = () => {
  return (
    <div className={stls.container}>
      <div className={stls.laptopdesktop}>
        <h3 className={stls.title}>Получаете диплом с аккредитацией</h3>
        <p className={stls.subtitle}>
        Все наши дипломы являются установленного образца Министерством образования и вносятся в федеральный реестр ФИС-ФРДО
        </p>
      </div>
      <div className={stls.btns}>
        <BtnIota classNames={[stls.btn, stls.btn1]}>
          Первая&nbsp;страница
        </BtnIota>
        <BtnKappa classNames={[stls.btn, stls.btn2]}>Приложение</BtnKappa>
      </div>
      <div className={stls.diplomas}>
        <ImgDiploma classNames={[stls.diploma, stls.diploma1]} />
        <ImgDiploma classNames={[stls.diploma, stls.diploma2]} />
      </div>
    </div>
  )
}

export default GetDiplomaAndAccreditation
