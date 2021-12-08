import stls from '@/styles/components/programs/ProgramsProfessions.module.sass'
import { ProgramsTemplate } from '@/components/programs'

type TypeProgramsProfessions = {
  biggerTitle?: boolean
  withBtn?: boolean
  professions: any[]
  withQty?: boolean
  threerow?: boolean
}

const ProgramsProfessions = ({
  biggerTitle = false,
  withBtn = false,
  professions = [],
  withQty = false,
  threerow = false
}: TypeProgramsProfessions) => {
  return (
    <ProgramsTemplate
      biggerTitle={biggerTitle}
      withBtn={withBtn}
      programs={professions}
      withQty={withQty}
      threerow={threerow}
      ofType='profession'
      classNames={[stls.container]}
    />
  )
}

export default ProgramsProfessions
