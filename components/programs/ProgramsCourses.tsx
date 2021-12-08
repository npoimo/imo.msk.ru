import stls from '@/styles/components/programs/ProgramsCourses.module.sass'
import { ProgramsTemplate } from '@/components/programs'

type TypeProgramsCourses = {
  biggerTitle?: boolean
  withBtn?: boolean
  courses: any[]
  withQty?: boolean
  threerow?: boolean
}

const ProgramsCourses = ({
  biggerTitle = false,
  withBtn = false,
  courses = [],
  withQty = false,
  threerow = false
}: TypeProgramsCourses) => {
  return (
    <ProgramsTemplate
      biggerTitle={biggerTitle}
      withBtn={withBtn}
      programs={courses}
      withQty={withQty}
      threerow={threerow}
      ofType='course'
    />
  )
}

export default ProgramsCourses
