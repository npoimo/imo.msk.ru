import stls from '@/styles/components/programs/ProgramsMbas.module.sass'
import { ProgramsTemplate } from '@/components/programs'

type TypeProgramsMbas = {
  biggerTitle?: boolean
  withBtn?: boolean
  mbas: any[]
  withQty?: boolean
  threerow?: boolean
}

const ProgramsMbas = ({
  biggerTitle = false,
  withBtn = false,
  mbas = [],
  withQty = false,
  threerow = false
}: TypeProgramsMbas) => {
  return (
    <ProgramsTemplate
      biggerTitle={biggerTitle}
      withBtn={withBtn}
      programs={mbas}
      withQty={withQty}
      threerow={threerow}
      ofType='mba'
    />
  )
}

export default ProgramsMbas
