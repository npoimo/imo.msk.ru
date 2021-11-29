import { removeDuplicates } from '@/helpers/index'

type getStudyFieldsSlugsType = {
  [key: string]: any
  study_field: {
    slug: string
  }
}[]

const getStudyFieldsSlugs = (programs: getStudyFieldsSlugsType) => {
  const duplicates = programs.map(item => item.study_field?.slug)
  const output = removeDuplicates(duplicates)
  return output
}

export default getStudyFieldsSlugs
