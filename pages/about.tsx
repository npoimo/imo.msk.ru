import About from '@/components/sections/About'
import { handleGetStaticProps } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect, useCallback } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routeAbout } from '@/data/routes'
import { companyName } from '@/config/index'

const AboutPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Об институте | ${companyName}`}
        description={truncate(
          `${companyName} за современный подход в образовании. Мы постоянно берем обратную связь от работодателей и каждый месяц адаптируем учебные программы. Это в 12 раз быстрее обновления программы обучения в государственном ВУЗе!`,
          120
        )}
        canonical={`${routesFront.root}${routeAbout}`}
      />
      <About standalone />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/about' })

export default AboutPage
