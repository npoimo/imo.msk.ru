import { removeDuplicates } from '@/helpers/index'

type getStudyFieldsLabelsType = {
  [key: string]: any
  studyField: string
}[]

const getStudyFieldsLabels = (programs: getStudyFieldsLabelsType) => {
  const duplicates = programs
    .map(item => item.study_field?.title)
    .filter(item => item)
  const output = removeDuplicates(duplicates)
  return output
}

export default getStudyFieldsLabels
