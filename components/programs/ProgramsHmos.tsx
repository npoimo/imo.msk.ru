import stls from '@/styles/components/programs/ProgramsHmos.module.sass'
import { ProgramsTemplate } from '@/components/programs'

type TypeProgramsHmos = {
  biggerTitle?: boolean
  withBtn?: boolean
  hmos: any[]
  withQty?: boolean
  threerow?: boolean
}

const ProgramsHmos = ({
  biggerTitle = false,
  withBtn = false,
  hmos = [],
  withQty = false,
  threerow = false
}: TypeProgramsHmos) => {
  return (
    <ProgramsTemplate
      biggerTitle={biggerTitle}
      withBtn={withBtn}
      programs={hmos}
      withQty={withQty}
      threerow={threerow}
      ofType='hmo'
    />
  )
}

export default ProgramsHmos
