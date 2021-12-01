import stls from '@/styles/components/cards/CardProgram.module.sass'
import CardProgramTemplate from '@/components/cards/CardProgramTemplate'

const CardProgram = ({ profession = null, threerow = false }) => {
  return <CardProgramTemplate program={profession} threerow={threerow} />
}

export default CardProgram
