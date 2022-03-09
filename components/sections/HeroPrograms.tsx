import stls from '@/styles/components/sections/HeroPrograms.module.sass'
import { elementIds } from '@/config/index'
import Link from 'next/link'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramsContext from '@/context/programs/programsContext'
import Wrapper from '@/components/layout/Wrapper'
import { routeCourses, routeHMO, routeProfessions } from '@/data/routes'

const HeroPrograms = ({ ofType = null }) => {
  const { curProgramsType, curProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  const slug = curProgramsStudyFieldSlug ? curProgramsStudyFieldSlug : ''

  return (
    <section id={elementIds.heroPrograms} className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
        </div>
        <div className={stls.typeLinks}>
          <Link href={`${routeProfessions}/${slug}`}>
            <a
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'profession'
              })}>
              <span className={stls.laptopdesktop}>Переподготовка</span>
              <span className={stls.phonetablet}>ПП</span>
            </a>
          </Link>
          <Link href={`${routeCourses}/${slug}`}>
            <a
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'course'
              })}>
              <span className={stls.laptopdesktop}>Повышение квалификации</span>
              <span className={stls.phonetablet}>ПК</span>
            </a>
          </Link>
          <Link href={`${routeHMO}/${slug}`}>
            <a
              className={cn([stls.link], {
                [stls.active]: curProgramsType === 'hmo'
              })}>
              <span className={stls.laptopdesktop}>НМО</span>
              <span className={stls.phonetablet}>НМО</span>
            </a>
          </Link>
        </div>
      </Wrapper>
    </section>
  )
}

export default HeroPrograms
