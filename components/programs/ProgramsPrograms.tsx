import stls from '@/styles/components/programs/ProgramsPrograms.module.sass'
import { ProgramsTemplate } from '@/components/programs'

type TypeProgramsPrograms = {
  biggerTitle?: boolean
  withBtn?: boolean
  programs: any[]
  withQty?: boolean
  threerow?: boolean
}

const ProgramsPrograms = ({
  biggerTitle = false,
  withBtn = false,
  programs = [],
  withQty = false,
  threerow = false
}: TypeProgramsPrograms) => {
  return (
    <ProgramsTemplate
      biggerTitle={biggerTitle}
      withBtn={withBtn}
      programs={programs}
      withQty={withQty}
      threerow={threerow}
      ofType='profession'
      classNames={[stls.container]}
    />
  )
}

export default ProgramsPrograms
