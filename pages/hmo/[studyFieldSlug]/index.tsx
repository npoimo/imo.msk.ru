import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import {
  handleGetStaticPathsStudyFields,
  handleGetStaticProps
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routeHMO } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const HMOStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const {
    setPrograms,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    studyFields
  } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('hmo')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'НМО'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | НМО | ${companyName}`}
        description={truncate(`${companyName} НМО`, 120)}
        canonical={`${routesFront.root}${routeHMO}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='hmo' />
    </>
  )
}

export const getStaticProps = async ({ params: { studyFieldSlug } }) =>
  await handleGetStaticProps({ page: '/programs', studyFieldSlug })

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields({ type: '/hmo' })

export default HMOStudyFieldPage
