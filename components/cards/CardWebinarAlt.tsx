import { getThreeLettersRuMonths, getRuDaysOfWeek } from '@/helpers/index'
import stls from '@/styles/components/cards/CardWebinarAlt.module.sass'
import { IconBell } from '@/components/icons'
import CtaText from '@/components/general/CtaText'
import {
  addOptionalZeroToMinutes,
  addOptionalZeroToHours
} from '@/helpers/index'

type CardWebinarAltType = {
  date: Date
  name: string
  picture: any
  title: string
}

const CardWebinarAlt = ({ date, name, picture, title }: CardWebinarAltType) => {
  const newDate = new Date(date)

  const monhts = getThreeLettersRuMonths()
  const daysOfWeek = getRuDaysOfWeek()
  const hours = addOptionalZeroToHours({ date: newDate })
  const minutes = addOptionalZeroToMinutes({ date: newDate })

  return (
    <button className={stls.container}>
      <div className={stls.bell}>
        <IconBell />
      </div>
      <div className={stls.when}>
        <span className={stls.date}>
          {newDate.getDate()} {monhts[newDate.getMonth()]}., {hours}:{minutes}{' '}
        </span>
        <span className={stls.dayOfWeek}>{daysOfWeek[newDate.getDay()]}</span>
      </div>
      <div className={stls.speaker}>
        <div className={stls.img}>{picture}</div>
        <div className={stls.right}>
          <span className={stls.label}>Спикер:</span>
          <p className={stls.name}>{name}</p>
          <h2 className={stls.title}>{title}</h2>
          <div className={stls.link}>
            <CtaText text={'Подробнее'} ctheta />
          </div>
        </div>
      </div>
    </button>
  )
}

export default CardWebinarAlt
