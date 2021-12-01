import { TypeCategory } from '@/types/index'

type ProgramTypeKey = TypeCategory | ''

type FilterProgramsProp = {
  // programs: [{ [key: string]: any; type: ProgramTypeKey }]
  programs: [{ [key: string]: any; type: ProgramTypeKey }]
  type: TypeCategory
}

const filterProgramsByType = ({
  programs = [{ type: '' }],
  type
}: FilterProgramsProp) => {
  if (!type)
    throw new Error(
      "You've passed in falsy prop 'type' somewhere or haven't specified it. Prop 'type' can't be falsy and has to be a string with either 'course' or 'profession' as a value"
    )

  return (
    programs &&
    programs.filter(
      program =>
        program.category?.type && program.category?.type.toLowerCase() === type
    )
  )
}

export default filterProgramsByType
