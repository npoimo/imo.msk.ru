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
import { routeMBA } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesProgram } from '@/components/pages'

const MBAPage = ({ programs, program, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType('mba')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, program, studyFieldSlug])

  return (
    <>
      <NextSeo
        title={`${program.title} | MBA | ${companyName}`}
        description={truncate(program.description, 120)}
        canonical={`${routesFront.root}${routeMBA}/${studyFieldSlug}/${program.slug}`}
      />
      <PagesProgram ofType={'mba'} />
    </>
  )
}

export const getStaticProps = async ({ params: { slug, studyFieldSlug } }) =>
  await handleGetStaticProps({
    page: '/programs',
    studyFieldSlug,
    slug,
    type: 'mba'
  })

// export async function getStaticProps({ params: { slug, studyFieldSlug } }) {
//   const programs = await fetchPrograms()
//   const program = getProgram({
//     data: programs,
//     ofType: 'mba',
//     slug
//   })

//   return {
//     props: {
//       programs,
//       program,
//       studyFieldSlug
//     },
//     revalidate: revalidate.default
//   }
// }

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/mba' })

export default MBAPage
