import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramsContext from '@/context/programs/programsContext'
import Wrapper from '@/components/layout/Wrapper'
import { routeCourses, routeMBA, routeProfessions } from '@/data/routes'
import { BtnProgramsField } from '@/components/btns'

const HeroPrograms = ({ ofType = null }) => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
        </div>
        <div className={stls.typeLinks}>
          <Link href={`${routeProfessions}/${slug}`}>
            <a
              className={cn([stls.link], {
                [stls.active]:
                  curProgramsType === null || curProgramsType === 'profession'
              })}>
              Переподготовка
            </a>
          </Link>
          <Link href={`${routeCourses}/${slug}`}>
            <a
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'course'
              })}>
              Повышение квалификации
            </a>
          </Link>
          <Link href={`${routeMBA}/${slug}`}>
            <a
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'mba'
              })}>
              МБА
            </a>
          </Link>
        </div>
        <div className={stls.btn}>
          <BtnProgramsField ofType={ofType} />
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
