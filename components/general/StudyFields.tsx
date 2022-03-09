import stls from '@/styles/components/general/StudyFields.module.sass'
import { Fragment, useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import { BtnField } from '@/components/btns'
import {
  routePrograms,
  routeCourses,
  routeProfessions,
  routeHMO
} from '@/data/routes'
import classNames from 'classnames'
import { TypeCategory } from '@/types/index'

type StudyFieldsType = {
  aside?: boolean
  ofType?: TypeCategory
  close?: any
}

const StudyFields = ({
  aside = false,
  ofType = null,
  close = null
}: StudyFieldsType) => {
  const {
    studyFields,
    studyFieldsCourses,
    studyFieldsProfessions,
    studyFieldsHMOs,
    curProgramsType
  } = useContext(ProgramsContext)

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : ofType === 'hmo'
      ? studyFieldsHMOs
      : studyFields

  return (
    <ul
      className={classNames({
        [stls.container]: true,
        [stls.aside]: aside,
        [stls.tooltip]: !aside
      })}>
      {list.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          {idx === 0 && (
            <li className={stls.studyField} onClick={close && close}>
              <BtnField
                href={
                  aside
                    ? curProgramsType === 'course'
                      ? routeCourses
                      : curProgramsType === 'profession'
                      ? routeProfessions
                      : curProgramsType === 'hmo'
                      ? routeHMO
                      : routePrograms
                    : routePrograms
                }
                aside={aside}>
                Все направления
              </BtnField>
            </li>
          )}
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              href={`${
                aside
                  ? curProgramsType === 'course'
                    ? routeCourses
                    : curProgramsType === 'profession'
                    ? routeProfessions
                    : curProgramsType === 'hmo'
                    ? routeHMO
                    : routePrograms
                  : routePrograms
              }/${slug}`}
              aside={aside}
              slug={slug}>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFields
