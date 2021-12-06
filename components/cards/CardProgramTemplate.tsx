import stls from '@/styles/components/cards/CardProgramTemplate.module.sass'
import Link from 'next/link'
import { routeProfessions, routeCourses, routePrograms } from '@/data/routes'
import classNames from 'classnames'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import { IconArrowRight } from '@/components/icons'
import { TypeCategory } from '@/types/index'

type TypeCardProgramTemplate = {
  program: any
  threerow: boolean
  type?: TypeCategory
}

const CardProgramTemplate = ({
  program = null,
  threerow = false,
  type
}: TypeCardProgramTemplate) => {
  return (
    <Link
      href={`${
        type === 'profession'
          ? routeProfessions
          : type === 'course'
          ? routeCourses
          : program.category?.slug || routePrograms
      }/${program.study_field?.slug || 'studyfield'}/${program.slug}`}>
      <a
        className={classNames({
          [stls.container]: true,
          [stls.threerow]: threerow,
          [stls.fourrow]: !threerow
        })}>
        <span className={stls.type}>{program.category?.label}</span>
        <h4 className={stls.title}>{program.title}</h4>
        {program.timenprice?.studyMonthsDuration && (
          <div className={stls.dur}>
            <ProgramStudyDuration
              studyMonthsDuration={program.timenprice?.studyMonthsDuration}
              monthsOnly
            />
          </div>
        )}
        <div className={stls.arrowRight}>
          <IconArrowRight />{' '}
        </div>
      </a>
    </Link>
  )
}

export default CardProgramTemplate
