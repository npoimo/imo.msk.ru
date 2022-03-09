import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routeHMO } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const HMOPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('hmo')
    setCurProgramsStudyFieldSlug(null)
  }, [programs])

  return (
    <>
      <NextSeo
        title={`НМО | ${companyName}`}
        description={truncate(`${companyName} НМО`, 120)}
        canonical={`${routesFront.root}${routeHMO}`}
      />
      <PagesPrograms ofType='hmo' />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/programs' })

export default HMOPage
