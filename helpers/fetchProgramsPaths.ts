import { routesBack } from '@/config/index'
import { filterProgramsByType } from '@/helpers/index'
import { TypeCategory } from '@/types/index'

type ProgramsType = {
  ofType: TypeCategory
}

const fetchProgramsPaths = async ({ ofType }: ProgramsType) => {
  const res = await fetch(`${routesBack.root}${routesBack.programs}`)
  const data = await res.json()

  const programs = filterProgramsByType({ programs: data, type: ofType })

  const paths = programs.map(program => ({
    params: {
      slug: program.slug,
      studyFieldSlug: program.study_field?.slug || 'studyfield'
    }
  }))

  return paths
}

export default fetchProgramsPaths
