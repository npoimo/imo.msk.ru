import { createContext } from 'react'

const programsContext = createContext({
  programs: [],
  courses: [],
  professions: [],
  mbas: [],
  studyFields: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  studyFieldsHMOs: [],
  curProgramsType: null,
  curProgramsStudyFieldSlug: null,
  searchTerm: null,
  filteredPrograms: [],
  setSearchTerm: (programs, term) => {},
  setPrograms: programs => {},
  setCurProgramsType: programType => {},
  setCurProgramsStudyFieldSlug: slug => {}
})

export default programsContext
