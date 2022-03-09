import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'
import {
  fetchPrograms,
  getProgram,
  handleGetStaticProps,
  handleGetStaticPathsPrograms
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, revalidate } from '@/config/index'
import { routeHMO } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesProgram } from '@/components/pages'

const HMOPage = ({ programs, program, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType('hmo')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, program, studyFieldSlug])

  return (
    <>
      <NextSeo
        title={`${program.title} | НМО | ${companyName}`}
        description={truncate(program.description, 120)}
        canonical={`${routesFront.root}${routeHMO}/${studyFieldSlug}/${program.slug}`}
      />
      <PagesProgram ofType={'hmo'} />
    </>
  )
}

export const getStaticProps = async ({ params: { slug, studyFieldSlug } }) =>
  await handleGetStaticProps({
    page: '/programs',
    studyFieldSlug,
    slug,
    type: 'hmo'
  })

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/hmo' })

export default HMOPage
