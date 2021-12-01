import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'
import { TypeCategory } from '@/types/index'

type getProgramKey = TypeCategory | ''

type getProgramType = {
  data: [{ [key: string]: any; type: getProgramKey }]
  ofType: TypeCategory
  slug: string
}

const getProgram = ({ data, ofType, slug }: getProgramType) => {
  const programs = filterProgramsByType({ programs: data, type: ofType })
  const program = convertMdToHtml({
    arr: programs && programs.filter(program => program.slug === slug),
    params: [
      'description',
      'WhatYouWillLearn',
      'ForWhom',
      'shortContents',
      'resumeSkills',
      'jobTitles',
      'questions'
    ]
  })[0]

  return program
}

export default getProgram
