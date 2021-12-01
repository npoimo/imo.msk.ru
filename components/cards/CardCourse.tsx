import stls from '@/styles/components/cards/CardCourse.module.sass'
import CardProgramTemplate from '@/components/cards/CardProgramTemplate'

const CardCourse = ({ course = null, threerow = false }) => {
  return (
    <CardProgramTemplate program={course} threerow={threerow} type='course' />
  )
}

export default CardCourse
