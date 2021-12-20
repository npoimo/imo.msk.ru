import stls from '@/styles/components/general/ProsCircle.module.sass'
import { IconLogoAlt, IconBgCircle } from '@/components/icons'

const ProsCircle = () => {
  return (
    <div className={stls.container}>
      <IconBgCircle />
      <div className={stls.center}>
        <IconLogoAlt responsive />
      </div>
      <div className={stls.top}>
        <h3 className={stls.subTitle}>12 лет</h3>
        <p className={stls.p}>
          Занимаемся <br />
          образованием
        </p>
      </div>
      <div className={stls.right}>
        <h3 className={stls.subTitle}>2500+</h3>
        <p className={stls.p}>Учаться прямо сейчас</p>
      </div>
      <div className={stls.bottom}>
        <h3 className={stls.subTitle}>8 лет</h3>
        <p className={stls.p}>специализируемся на дистанционном обучении</p>
      </div>
      <div className={stls.left}>
        <h3 className={stls.subTitle}>{'>'}17 000</h3>
        <p className={stls.p}>Студентов уже обучили</p>
      </div>
    </div>
  )
}

export default ProsCircle
