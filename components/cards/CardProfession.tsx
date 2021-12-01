import stls from '@/styles/components/cards/CardProfession.module.sass'
import CardProgramTemplate from '@/components/cards/CardProgramTemplate'

const CardProfession = ({ profession = null, threerow = false }) => {
  return (
    <CardProgramTemplate
      program={profession}
      threerow={threerow}
      type='profession'
    />
  )
}

export default CardProfession
