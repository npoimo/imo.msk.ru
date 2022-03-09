import stls from '@/styles/components/sections/Programs.module.sass'
import { elementIds } from '@/config/index'
import Wrapper from '@/components/layout/Wrapper'
import {
  ProgramsProfessions,
  ProgramsCourses,
  ProgramsHmos
} from '@/components/programs'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { filterProgramsByStudyField } from '@/helpers/index'
import { routeCourses, routeHMO, routeProfessions } from '@/data/routes'
import { TypeCategory } from '@/types/index'

type ProgramsType = {
  ofType?: TypeCategory
  withTitle?: boolean
  withBtn?: boolean
  withQty?: boolean
  threerow?: boolean
  withFilters?: boolean
  max?: number
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false,
  threerow = false,
  withFilters = false,
  max
}: ProgramsType) => {
  const {
    courses,
    professions,
    hmos,
    curProgramsStudyFieldSlug,
    filteredPrograms,
    searchTerm
  } = useContext(ProgramsContext)

  const router = useRouter()

  const coursesFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: courses,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const professionsFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: professions,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const hmosFiltered =
    curProgramsStudyFieldSlug &&
    filterProgramsByStudyField({
      programs: hmos,
      studyFieldSlug: curProgramsStudyFieldSlug
    })

  const data = {
    courses: curProgramsStudyFieldSlug ? coursesFiltered : courses,
    professions: curProgramsStudyFieldSlug ? professionsFiltered : professions,
    hmos: curProgramsStudyFieldSlug ? hmosFiltered : hmos
  }

  if (max) {
    data.courses = data.courses.filter((item, idx) => idx < max)
    data.professions = data.professions.filter((item, idx) => idx < max)
    data.hmos = data.hmos.filter((item, idx) => idx < max)
  }

  useEffect(() => {
    ofType === 'course' &&
      data.courses.length === 0 &&
      router.replace(routeCourses)
    ofType === 'profession' &&
      data.professions.length === 0 &&
      router.replace(routeProfessions)
    ofType === 'hmo' && data.hmos.length === 0 && router.replace(routeHMO)
  }, [])

  const filteredProgramsIds = filteredPrograms.map(item => item.id)

  const filteredData = {
    courses: data.courses.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    }),
    professions: data.professions.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    }),
    hmos: data.hmos.filter(item => {
      let include = false
      filteredProgramsIds.forEach(id => {
        if (item.id === id) include = true
      })
      if (include) return item
    })
  }

  return (
    <section
      id={elementIds.programs}
      className={classNames({
        [stls.container]: true,
        [stls.withFilters]: withFilters
      })}>
      <Wrapper>
        {withFilters && (
          <div className={stls.filters}>
            <ProgramsFilters ofType={ofType} />
          </div>
        )}
        <div className={stls.content}>
          {withTitle && <h2 className={stls.title}>Наши направления</h2>}
          <div className={stls.programs}>
            {ofType === 'profession' &&
              (searchTerm
                ? filteredData.professions &&
                  filteredData.professions.length > 0
                : data.professions && data.professions.length > 0) && (
                <div className={stls.professions}>
                  <ProgramsProfessions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={
                      searchTerm ? filteredData.professions : data.professions
                    }
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {ofType === 'course' &&
              (searchTerm
                ? filteredData.courses && filteredData.courses.length > 0
                : data.courses && data.courses.length > 0) && (
                <div className={stls.courses}>
                  <ProgramsCourses
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    courses={searchTerm ? filteredData.courses : data.courses}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {ofType === 'hmo' &&
              (searchTerm
                ? filteredData.hmos && filteredData.hmos.length > 0
                : data.hmos && data.hmos.length > 0) && (
                <div className={stls.hmos}>
                  <ProgramsHmos
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    hmos={searchTerm ? filteredData.hmos : data.hmos}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {!ofType &&
              (searchTerm
                ? filteredData.professions &&
                  filteredData.professions.length > 0
                : data.professions && data.professions.length > 0) && (
                <div className={stls.professions}>
                  <ProgramsProfessions
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    professions={
                      searchTerm ? filteredData.professions : data.professions
                    }
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}
            {!ofType &&
              (searchTerm
                ? filteredData.courses && filteredData.courses.length > 0
                : data.courses && data.courses.length > 0) && (
                <div className={stls.courses}>
                  <ProgramsCourses
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    courses={searchTerm ? filteredData.courses : data.courses}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}

            {!ofType &&
              (searchTerm
                ? filteredData.hmos && filteredData.hmos.length > 0
                : data.hmos && data.hmos.length > 0) && (
                <div className={stls.hmos}>
                  <ProgramsHmos
                    biggerTitle={!withTitle}
                    withBtn={withBtn}
                    hmos={searchTerm ? filteredData.hmos : data.hmos}
                    withQty={withQty}
                    threerow={threerow}
                  />
                </div>
              )}

            {searchTerm &&
              filteredData.courses.length === 0 &&
              filteredData.professions.length === 0 &&
              filteredData.hmos.length === 0 && (
                <>Кажется, что по вашему запросу ничего не нашлось</>
              )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
